import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeOffRequest } from '../infrastructure/types/time.off.request';

@Injectable({
  providedIn: 'root'
})
export class TimeOffRequestService {
  private readonly http = inject(HttpClient);

  getRequests() : Observable<TimeOffRequest[]> {
    return this.http.get<TimeOffRequest[]>('/api/timeoff');
  }

  getRequest(requestId : number) : Observable<TimeOffRequest> {
    return this.http.get<TimeOffRequest>(`/api/timeoff/${requestId}`);
  }
}
