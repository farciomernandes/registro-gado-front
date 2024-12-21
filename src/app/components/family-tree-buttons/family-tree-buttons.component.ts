import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-family-tree-buttons',
  templateUrl: './family-tree-buttons.component.html',
  styleUrl: './family-tree-buttons.component.scss'
})
export class FamilyTreeButtonsComponent {
  @Input()  animalName = '';
  @Input()  breed = '';
  @Input() sex = ''
  @Input()  age = '';
  @Input() picture = '';
}
