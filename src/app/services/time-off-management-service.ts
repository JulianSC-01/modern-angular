import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { merge, Subject, switchMap } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time.off.request';
import { TimeOffRequestType } from '../infrastructure/types/time.off.request.type';
import { TimeOffRequestService } from './time-off-request-service';

@Injectable({
  providedIn: 'root'
})
export class TimeOffManagementService {
  private readonly timeOffRequestService =
    inject(TimeOffRequestService);

  approveRequest$ =
    new Subject<TimeOffRequest>();
  rejectRequest$ =
    new Subject<TimeOffRequest>();
  deleteRequest$ =
    new Subject<TimeOffRequest>();

  selectedType = signal<TimeOffRequestType>(
    (localStorage.getItem('selectedType') as any) ?? '');

  requests = toSignal(
    merge(
      toObservable(this.selectedType),
      this.approveRequest$.pipe(
        switchMap(
          r => this.timeOffRequestService.
            approveRequest(r.id))),
      this.rejectRequest$.pipe(
        switchMap(
          r => this.timeOffRequestService.
            rejectRequest(r.id))),
      this.deleteRequest$.pipe(
        switchMap(
          r => this.timeOffRequestService.
            deleteRequest(r.id)))).
      pipe(
        switchMap(() => {
          return this.timeOffRequestService.
            getRequestsByType(this.selectedType())
        })
      ),
    {
      initialValue : [] as TimeOffRequest[]
    }
  );

  resolvedRequests = computed(() =>
    this.requests().filter(r => r.status !== 'Pending'));

  constructor() {
    effect(() => {
      localStorage.setItem('selectedType', this.selectedType())
    })
  }

  approveRequest(request: TimeOffRequest) {
    this.approveRequest$.next(request);
  }

  rejectRequest(request: TimeOffRequest) {
    this.rejectRequest$.next(request);
  }

  deleteRequest(request: TimeOffRequest) {
    this.deleteRequest$.next(request);
  }
}
