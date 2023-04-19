import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TagListComponent } from 'src/app/shared/modules/tagList/components/tagList/tagList.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TagListComponent],
  exports: [TagListComponent],
})
export class TagListModule {}
