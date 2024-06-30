import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { IUserCredentials } from '../../../../common/interfaces'
import { ToastService } from '../../../../core/services/toast.service'
import { User } from 'firebase/auth'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public links = ['blocks', 'table'];

  public user$ = this._authService.authState$;

  constructor(private _authService: AuthService, private _router: Router, private _toastService: ToastService) {}

  public async logout() {
    await this._authService.logOut();
    this._toastService.success('Logout success!');
    this._router.navigateByUrl('/auth');
  }

  public getUserName(user: User) {
    return user.displayName || user.email
  }
}

