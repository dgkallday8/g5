import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { ProviderValue } from '../../../../common/interfaces'

@Component({
  selector: 'app-sign-in-with-providers',
  templateUrl: './sign-in-with-providers.component.html',
  styleUrl: './sign-in-with-providers.component.scss'
})
export class SignInWithProvidersComponent {
  @Output() public providerType = new EventEmitter();

  public actionValue = ProviderValue
}
