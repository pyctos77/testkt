import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('paso http');
  console.log(req.url);

  const headers = new HttpHeaders({
    'token-user': '3232323',
  });
  const reqClone = req.clone({
    headers,
  });

  return next(reqClone);
};
