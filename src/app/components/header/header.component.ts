import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isModalOpen = false;
  notifications = [
    'Você tem uma nova mensagem!',
    'Atualização disponível no sistema.',
    'Lembrete: Reunião às 14h',
    'Lembrete de você fazer isso'
  ];

  @Output() menuToggle = new EventEmitter<void>();

  onMenuClick() {
    this.menuToggle.emit();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
