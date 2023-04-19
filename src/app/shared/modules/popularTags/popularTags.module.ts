import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { PopularTagsComponent } from 'src/app/shared/modules/popularTags/components/popularTags/popularTags.component'
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service'
import { GetPopularTagsEffect } from 'src/app/shared/modules/popularTags/store/effects/getPopularTags.effect'
import { reducers } from 'src/app/shared/modules/popularTags/store/reducers'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
  ],
  exports: [PopularTagsComponent],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
