import { TimeOffRequestType } from "./time.off.request.type";

export type TimeOffRequest = {
  id: number;
  employeeId: number;
  startDate: string;
  endDate: string;
  type: TimeOffRequestType;
  status: 'Pending' | 'Approved' | 'Rejected';
  comment?: string;
}