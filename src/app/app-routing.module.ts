import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OrderComponent } from './components/order/order.component';
import { GetFurnitureComponent } from './components/get-furniture/get-furniture.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'ourwork',component:OurworkComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'order',component:OrderComponent},
  {path:'getFurniture',component:GetFurnitureComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-auth',component:AdminAuthComponent},
  {path:'req',component:RequestStatusComponent},
  {path:'editprofile',component:EditDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
