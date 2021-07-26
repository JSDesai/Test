import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { AnuskaComponent } from './anuska/anuska.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AnuskaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
