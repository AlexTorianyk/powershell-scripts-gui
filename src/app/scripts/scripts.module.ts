import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsListComponent } from './scripts-list/scripts-list.component';
import { ScriptsListItemComponent } from './scripts-list/scripts-list-item/scripts-list-item.component';

@NgModule({
  declarations: [ScriptsListComponent, ScriptsListItemComponent],
  imports: [CommonModule, ScriptsRoutingModule],
  exports: [ScriptsListComponent],
})
export class ScriptsModule {}
