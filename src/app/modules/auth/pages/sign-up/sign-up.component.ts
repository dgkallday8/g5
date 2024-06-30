import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor (private _fb: FormBuilder, private _authService: AuthService, private _router: Router) {}

  public credintialsForm = this._fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  })

  public async submit() {
    console.log('awd', this.credintialsForm.value);
    if (!this.credintialsForm.valid) return;

    const credential: any = {
      email: this.credintialsForm.value.email,
      password: this.credintialsForm.value.password,
    };

    try {
      await this._authService.signUpWithEmailAndPassword(credential);

      this._router.navigateByUrl('/home');

    } catch (error) {
      console.error(error);
    }
  } 

  public test() {
    this._authService.authState$.subscribe(dw => {
      console.log('res', dw);
    });
  }
}
