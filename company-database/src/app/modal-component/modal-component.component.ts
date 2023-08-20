import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss',
                "../../../node_modules/sweetalert2/src/sweetalert2.scss"]
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
