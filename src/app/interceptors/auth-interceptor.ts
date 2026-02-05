import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = '';
  const requestWithToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  });
  return next(requestWithToken);
};
