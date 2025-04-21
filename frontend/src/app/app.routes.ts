import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], //  Route protection here
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'bookings',
    component: BookingComponent,
    canActivate: [authGuard],
  },
];
