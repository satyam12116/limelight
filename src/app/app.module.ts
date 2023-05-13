import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OrderComponent } from './components/order/order.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetFurnitureComponent } from './components/get-furniture/get-furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    OurworkComponent,
    AboutusComponent,
    OrderComponent,
    AdminAuthComponent,
    AdminDashboardComponent,
    UserAuthComponent,
    UserDashboardComponent,
    EditProfileComponent,
    EditDashboardComponent,
    RequestStatusComponent,
    GetFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
