import { Injectable } from '@angular/core';
import { IToast, IToastOptions } from '../../common/interfaces'



@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toasts: IToast[] = [];

  private _show(text: string, options: IToastOptions) {
    this.toasts.push({ text, options });
  }

  public remove(toast: IToast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public success(message: string) {
    this._show(message, { classname: 'bg-success text-light', delay: 5000 });
  }

  public error(message: string) {
    this._show(message, { classname: 'bg-danger text-light', delay: 5000 });
  }
}
