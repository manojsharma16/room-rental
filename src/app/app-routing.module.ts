import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'apartment',
    component: ApartmentComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'booking-detail',
    component: BookingDetailsComponent
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'comming',
    component: CommingComponent
  },
  {
    path: 'aparment-single',
    component: ApartmentSingleComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
