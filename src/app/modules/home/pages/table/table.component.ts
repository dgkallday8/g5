import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../../../../services/http.service'
import { SearchComponent } from '../../components/search/search.component'
import { IUserData } from '../../../../common/interfaces'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @ViewChild(SearchComponent)
  public searchComponent!: SearchComponent;

  public users: IUserData[] = []

  public showToast = false;

  constructor(private _httpService: HttpService) {}

  public onUsersEmit(gotUsers: IUserData[] | null) {
    if (gotUsers) {
      this.users = this.users.concat(gotUsers)

      if (!gotUsers.length && !this.users.length) {
        this.showToast = true
      }
    } else {
      this.users = []
    }
  }

  public toUser(user: IUserData) {
    console.log('toUser', user);
  }

  public onScroll() {
    this._httpService.searchPage.next(this._httpService.searchPage.value + 1)
    this.searchComponent.onSubmit()
  }
}
