import { ScriptsModule } from './scripts/scripts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PsgRoutingModule } from './psg-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PsgComponent } from './psg.component';

@NgModule({
  declarations: [PsgComponent],
  imports: [NgbModule, BrowserModule, PsgRoutingModule, NgbModule, ScriptsModule],
  providers: [],
  bootstrap: [PsgComponent],
})
export class PsgModule {}
