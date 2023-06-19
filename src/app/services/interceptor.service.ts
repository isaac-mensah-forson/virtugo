import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    const token = localStorage.getItem("token");
    if (token) {
      const reqClone = req.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": '*',
          "Content-Type": "application/json"
        }
      })
      // return next.handle(reqClone);
      return next.handle(reqClone).pipe(tap(() => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401 || err.status === 403) {
              // this.authService.logout()
              localStorage.removeItem("token")
              // this.authService.isUserLoggedIn$.next(false)
              // this.router.navigate(['home']);
            }
            return;
          }
        }));
    }
    else {
      return next.handle(req);
    }
  }
}
