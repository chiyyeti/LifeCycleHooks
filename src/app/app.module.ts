import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './Components/hooks/hooks.component';
import { ServiceService } from './Service/service.service';
import { ChildComponent } from './Components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
