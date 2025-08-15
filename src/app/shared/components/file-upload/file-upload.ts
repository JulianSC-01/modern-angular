import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-file-upload',
  templateUrl: './file-upload.html'
})
export class FileUpload {
  label = input.required<string>();

  accept = input.required<string[], string>({
    transform: (value: string) => value.split(',')
  });

  selected = output<FileList>();

  errorMessage = '';

  onFileSelected(event: any) {
    const files: FileList =
      event.target.files;

    this.errorMessage =
      Array.from(files).every(file =>
        this.accept().includes(file.type)) ?
          '' : 'Invalid file type';
  }
}