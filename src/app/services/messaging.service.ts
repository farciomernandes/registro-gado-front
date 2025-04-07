import { inject, Injectable } from '@angular/core';
import { getToken, Messaging, onMessage } from '@angular/fire/messaging';
import { environment, firebaseConfig } from '../../environments/environments';
import { MatDialog } from '@angular/material/dialog';
import { CustomNotificationComponent } from '../components/custom-notification/custom-notification.component';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  private messaging = inject(Messaging);

  constructor(private dialog: MatDialog) {}

  async requestPermissionAndSubscribe() {
    try {
      if (Notification.permission !== 'granted') {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          console.warn('Permissão de notificação negada');
          return null;
        }
      }

      const token = await getToken(this.messaging, {
        vapidKey: firebaseConfig.vapidKey,
      });

      console.log('🔑 Token de notificação:', token);

      if (token) {
        await fetch(`${environment.apiUrl}/topic/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
      }

      return token;
    } catch (error) {
      console.error('❌ Erro nas permissões/inscrição:', error);
      return null;
    }
  }

  listenForMessages() {
    onMessage(this.messaging, async (payload) => {
      console.log('📨 Mensagem recebida:', payload);

      const notification = payload.notification || {
        title: payload.data?.['title'] || 'Notificação',
        body: payload.data?.['body'] || 'Mensagem recebida',
      };

      console.log('🔔 Notificação formatada:', notification);

      await this.showNotification(notification);
    });
  }

  private async showNotification(notification: any) {
    const registration = await navigator.serviceWorker.getRegistration();
  
    if (registration && Notification.permission === 'granted') {
      registration.showNotification(notification.title, {
        body: notification.body,
        icon: '/assets/LogoFJSHorizontal.png',
        requireInteraction: true,
        tag: 'notificacao-gado',
      });
      console.log('✅ Notificação nativa exibida pelo Service Worker');
      this.fallbackNotification(notification);

    }
  }
  
  private fallbackNotification(notification: any) {
   this.dialog.open(CustomNotificationComponent, {
    data: notification,
    panelClass: 'custom-notification-dialog',
  });
  }
  
}
