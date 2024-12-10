import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-creen-inputs',
  templateUrl: './details-creen-inputs.component.html',
  styleUrl: './details-creen-inputs.component.scss'
})
export class DetailsCreenInputsComponent {
  @Input() labelName:string = '';
  @Input() placeholderName:string = '';
}
