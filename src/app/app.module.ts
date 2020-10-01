import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './compontents/not-found/not-found.component';
import { AboutComponent } from './compontents/about/about.component';
import { ApartmentComponent } from './compontents/apartment/apartment.component';
import { BlogComponent } from './compontents/blog/blog.component';
import { BookingDetailsComponent } from './compontents/booking-details/booking-details.component';
import { BlogSingleComponent } from './compontents/blog-single/blog-single.component';
import { BookingComponent } from './compontents/booking/booking.component';
import { CommingComponent } from './compontents/comming/comming.component';
import { ContactComponent } from './compontents/contact/contact.component';
import { GalleryComponent } from './compontents/gallery/gallery.component';
import { HomeComponent } from './compontents/home/home.component';
import { FooterComponent } from './compontents/footer/footer.component';
import { HeaderComponent } from './compontents/header/header.component';
import { ApartmentSingleComponent } from './compontents/apartment-single/apartment-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutComponent,
    ApartmentComponent,
    BlogComponent,
    BookingDetailsComponent,
    BlogSingleComponent,
    BookingComponent,
    CommingComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ApartmentSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
