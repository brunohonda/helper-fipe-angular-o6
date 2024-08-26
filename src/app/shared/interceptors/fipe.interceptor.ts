import { HttpInterceptorFn } from '@angular/common/http';

const fipeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNzhiY2JlMS1iZmRlLTQ1MTMtOTI5Yy01NDBjMWFjZDg3MDAiLCJlbWFpbCI6ImJydW5vLmhvbmRhQGxpdmUuY29tIiwiaWF0IjoxNzI0NzA0NzMzfQ.9jfOqfXxwOtmlCUTSCgyVpAp_Nb1QaHgYVVTDzVarac';

export const fipeInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('https://fipe.parallelum.com.br/api/v2/')) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('X-Subscription-Token', fipeToken),
    });

    return next(reqWithHeader);
  }

  return next(req);
};
