import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { HttpService } from '../../../../core/services/http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() public usersEmitter = new EventEmitter();

  public valueControl = this._fb.control('');

  constructor(private _httpService: HttpService, private _fb: FormBuilder) {}

  public onSubmit(resetPage = false) {
    if (!this.valueControl.value) return;

    if (resetPage) {
      this._httpService.searchPage.next(0)
      this.usersEmitter.emit(null)
    }

    const filters = {
      q: this.valueControl.value,
      page: this._httpService.searchPage.value,
      per_page: this._httpService.perPageValue,
    }

    this._httpService.getUsers(filters).subscribe(res => {
      if (res) {
        this.usersEmitter.emit(res.items)
      }
    })
  }
}
