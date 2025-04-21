import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');

  if (token) {
    return true; // ✅ allow navigation if token exists
  } else {
    alert('Please log in to continue');
    return false; // ⛔ block navigation
  }
};
