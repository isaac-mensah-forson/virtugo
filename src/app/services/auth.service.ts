import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://'

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http
      .post(`${this.url}`, user)
  }

  login(user: any): Observable<any> {
    return this.http
      .post(`${this.url}`, user)
    // .pipe<JSON>(
    //   tap((data: any) => {
    //     if (data.verified) {
    // localStorage.setItem('token', data.token)
    // this.loggedIn$()
    // }
    // }))
  }

  recoverPassword(email: string): Observable<any> {
    return this.http
      .post(`${this.url}`, email)
  }
}
