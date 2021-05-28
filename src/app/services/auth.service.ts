import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Login, UserNoPW } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  userNoPW :UserNoPW;
 
  
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
    ) { }

  registerUser(user):Observable<any> {
    const registerUrl = 'http://localhost:3000/users/register';
    return this.http.post(registerUrl, user, httpOptions);
  }

  authenticateUser(login): Observable<any> {
    const loginUrl = 'http://localhost:3000/users/authenticate';
    return this.http.post<Login>(loginUrl, login, httpOptions);
  }

  getProfile(): Observable<any> {
    this.authToken = localStorage.getItem('id_token');
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    const profileUrl = 'http://localhost:3000/users/profile';
    return this.http.get(profileUrl, httpOptions1);
  }

  storeUserData(token, userNoPW) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(userNoPW));
    this.authToken = token;
    this.userNoPW = userNoPW;
  }

  logout(){
    this.authToken = null;
    this.userNoPW = null;
    localStorage.clear();
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

}
