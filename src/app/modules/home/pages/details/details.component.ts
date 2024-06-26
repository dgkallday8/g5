import { Component } from '@angular/core';
import { IUserFullData } from '../../../../common/interfaces'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { HttpService } from '../../../../core/services/http.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  public userLogin: string | null = null  

  public user$: Observable<IUserFullData> | null = null;

  constructor (private _route: ActivatedRoute, private _httpService: HttpService, private _location: Location) {}

  public ngOnInit(): void {
    this.userLogin = this._route.snapshot.params['login'];

    if (this.userLogin) {
      this.user$ = this._httpService.getUser(this.userLogin)
    }

  }

  public goBack() {
    this._location.back()
  }
}
