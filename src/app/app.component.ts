import { Component, inject, OnInit } from '@angular/core';
import { Messaging } from '@angular/fire/messaging';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sistema-gado-registro';
  private messaging = inject(Messaging);

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.requestPermissionAndSubscribe();
    this.messagingService.listenForMessages();
  }

}
