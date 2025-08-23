import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { TimeOffRequest } from '../../../infrastructure/types/time.off.request';
import { TimeOffRequestType } from '../../../infrastructure/types/time.off.request.type';
import { TimeOffRequestService } from '../../../services/time-off-request-service';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-time-off-management',
  templateUrl: './time-off-management.html'
})
export class TimeOffManagement {
  private readonly timeOffRequestService =
    inject(TimeOffRequestService);

  // Convert HTTP observable request to a signal that
  // always stores the latest value.
  readonly requests =
    toSignal(this.timeOffRequestService.getRequests(),
      { initialValue: [] });

  readonly filteredType =
    signal<TimeOffRequestType>(
      localStorage.getItem(
        'filteredType') as TimeOffRequestType ?? '');

  readonly filteredRequests =
    computed(() => {
      const type = this.filteredType();
      return this.requests().
        filter(r => type ? r.type === type : true);
    });
  readonly resolvedRequests =
    computed(() => this.filteredRequests().
      filter(r => r.status !== 'Pending'));

  constructor() {
    effect(() => {
      localStorage.setItem('filteredType', this.filteredType());
    })
  }

  approveRequest(request: TimeOffRequest) {
    /*
    this.requests.update(requests => {
      const index = requests.
        findIndex(r => r.id === request.id);
      return requests.map((item, i) =>
        i === index ? { ...item, status: 'Approved'} : item);
    });
    */
  }

  rejectRequest(request: TimeOffRequest) {
    /*
    this.requests.update(requests => {
      const index = requests.
        findIndex(r => r.id === request.id);
      return requests.map((item, i) =>
        i === index ? { ...item, status: 'Rejected'} : item);
    });
    */
  }

  deleteRequest(request: TimeOffRequest) {
    /*
    this.requests.update(requests =>
      requests.filter(r => r.id !== request.id));
    */
  }
}
