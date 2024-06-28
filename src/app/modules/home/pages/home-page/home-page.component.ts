import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { IUserCredentials } from '../../../../common/interfaces'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public links = ['blocks', 'table']

  constructor(private _authService: AuthService, private _router: Router) {}

  public async logout() {
    await this._authService.logOut()
    
    this._router.navigateByUrl('/auth');
  }
}

