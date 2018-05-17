import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HowitworksComponent,
    ServicesComponent,
    PricingComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKACfeJ_H7tMmk4XQAMKxaHYvqDro6leQ'
    }),
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      [
      {path:'', redirectTo:'/home', pathMatch:'full'},
       {path:'home', component: HomeComponent}, 
       {path:'aboutus', component: AboutusComponent},
       {path:'howitworks', component: HowitworksComponent},
       {path:'services', component: ServicesComponent},
       {path:'pricing', component: PricingComponent},
       {path:'contact', component: ContactComponent}
      ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
