import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { YourFeedComponent } from 'src/app/yourFeed/components/yourFeed/yourFeed.component'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popularTags.module'
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module'

const routes: Routes = [{ path: 'feed', component: YourFeedComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
