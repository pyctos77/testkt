import { inject } from '@angular/core';
import { CanActivateFn,CanLoadFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  

  const router = inject(Router);  // Inyectamos el Router
  

  // if (hasUser()) {
  //   // Si no tiene acceso (la función devuelve false), redirigimos a la página de login
  //   router.navigate(['/contacts']);
  //   // return false;
  // }
  return false;
};



export const hasUser = () => {
  return true;
}
