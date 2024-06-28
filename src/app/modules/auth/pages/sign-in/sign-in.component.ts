import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { IUserCredentials } from '../../../../common/interfaces'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor (private _fb: FormBuilder, private _authService: AuthService, private _router: Router) {}

  public credintialsForm = this._fb.group({
    email: [null, Validators.required],
    password: null
  })

  public async login() {
    if (!this.credintialsForm.valid) return;

    const credentials: any = {
      email: this.credintialsForm.value.email,
      password: this.credintialsForm.value.password,
    }

    await this._authService.loginWithEmailAndPassword(credentials)

    this._router.navigateByUrl('/home');
  }
}
