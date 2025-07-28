import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);

  isAuth$ = new BehaviorSubject(false);

  login(email: String, password: string) {
    return this.http.post(
      '/api/auth/login', {
      userEmail: email, userPassword: password}).pipe(
        tap(() => this.isAuth$.next(true)));
  }

  logout() {
    return this.http.post(
      '/api/auth/logout', {}).pipe(
        tap(() => this.isAuth$.next(false)));
  }

  getToken() : string {
    return localStorage.getItem('authToken') ?? '';
  }
}