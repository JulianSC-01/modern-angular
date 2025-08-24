import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time.off.request';
import { TimeOffRequestType } from '../infrastructure/types/time.off.request.type';

@Injectable({
  providedIn: 'root'
})
export class TimeOffRequestService {
  private readonly http = inject(HttpClient);

  getRequest(requestId : number) :
    Observable<TimeOffRequest> {
    return this.http.get<TimeOffRequest>(
      `/api/timeoff/${requestId}`);
  }

  getRequests() : Observable<TimeOffRequest[]> {
    return this.http.get<TimeOffRequest[]>(
      '/api/timeoff');
  }

  getRequestsByType(type : TimeOffRequestType) :
    Observable<TimeOffRequest[]> {
    return this.http.get<TimeOffRequest[]>(
      `/api/timeoff/${type}`);
  }

  approveRequest(requestId : number) {
    return this.http.post<TimeOffRequest>(
      `/api/timeoff/approve/${requestId}`, null);
  }

  rejectRequest(requestId : number) {
    return this.http.post<TimeOffRequest>(
      `/api/timeoff/reject/${requestId}`, null);
  }

  deleteRequest(requestId : number) {
    return this.http.delete<void>(
      `/api/timeoff/${requestId}`);
  }
}
