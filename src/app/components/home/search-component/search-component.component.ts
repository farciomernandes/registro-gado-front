import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponentComponent {
  filterValue: string = '';
  filterField: string = '';

  @Output() searchCriteriaChange = new EventEmitter<{ field: string, value: string }>();

  onSearchChange(): void {
    this.searchCriteriaChange.emit({ field: this.filterField, value: this.filterValue });
  }
}
