import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeOffRequest } from '../../../infrastructure/types/time.off.request';
import { TimeOffManagementService } from '../../../services/time-off-management-service';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-time-off-management',
  templateUrl: './time-off-management.html'
})
export class TimeOffManagement {
  private readonly timeOffService =
    inject(TimeOffManagementService);

  requests = this.timeOffService.requests;
  resolvedRequests = this.timeOffService.resolvedRequests;

  selectedType = this.timeOffService.selectedType;

  approveRequest(request: TimeOffRequest) {
    this.timeOffService.approveRequest(request);
  }

  rejectRequest(request: TimeOffRequest) {
    this.timeOffService.rejectRequest(request);
  }

  deleteRequest(request: TimeOffRequest) {
    this.timeOffService.deleteRequest(request);
  }
}
