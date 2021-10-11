import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit() { }

  actionFunction() {
    alert('I am a work in progress');
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
