import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { PopularTagType } from 'src/app/shared/types/popularTag.type'
import { environment } from 'src/environments/environment'

import { GetPopularTagResponseInterface } from 'src/app/shared/modules/popularTags/types/getPopularTagResponseInterface.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get(url).pipe(
      map((response: GetPopularTagResponseInterface) => {
        return response.tags
      })
    )
  }
}
