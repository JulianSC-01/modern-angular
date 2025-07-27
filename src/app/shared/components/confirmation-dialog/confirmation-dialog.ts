import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.html'
})
export class ConfirmationDialog {
  isConfirmationOpen = model<boolean>(true);
}