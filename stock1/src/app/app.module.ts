import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GridsampleComponent } from './gridsample/gridsample.component';
import { 
	IgxGridModule,
	IgxToastModule,
	IgxBadgeModule
 } from "igniteui-angular";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridsampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    
	IgxToastModule,
	IgxBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
