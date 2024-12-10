import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrl: './details-screen.component.scss'
})
export class DetailsScreenComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('ID da linha clicada:', this.id);
    });
  }
}
