import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchCriteria: { field: string; value: string } | null = null;
  isSidebarVisible: boolean = false;

  onSearchCriteriaChange(criteria: { field: string; value: string }) {
    this.searchCriteria = criteria;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
