import { Component } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
