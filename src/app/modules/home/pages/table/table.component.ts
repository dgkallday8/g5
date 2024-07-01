import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component'
import { IUserData } from '../../../../common/interfaces'
import { HttpService } from '../../../../core/services/http.service'
import { ToastService } from '../../../../core/services/toast.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @ViewChild(SearchComponent)
  public searchComponent!: SearchComponent;

  public users: IUserData[] = []

  constructor(private _httpService: HttpService, private _toastService: ToastService) {}

  public onUsersEmit(gotUsers: IUserData[] | null) {
    if (gotUsers) {
      this.users = this.users.concat(gotUsers)

      if (!this.users.length) {
        this._toastService.error('Users not found, change your request!')
      }
    } else {
  

      this.users = []
    }
  }

  public onScroll() {
    this._httpService.searchPage.next(this._httpService.searchPage.value + 1)
    this.searchComponent.onSubmit()
  }
}
