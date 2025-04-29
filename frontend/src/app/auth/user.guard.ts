import { CanActivateFn, Router } from '@angular/router';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token && role === 'user') {
    return true;
  } else {
    alert('Access denied. Users only!');
    router.navigate(['/login']);
    return false;
  }
};
