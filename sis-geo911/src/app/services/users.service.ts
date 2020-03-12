import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
// import { User } from '../';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs';
// import { map, filter } from 'rxjs/operators';


@Injectable()
export class UsersService {

  AUTH_SERVER: string = 'http://localhost:3800/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User) {
    // console.log(user);
    // let params = JSON.stringify(user);
    // console.log(params);
    // params = JSON.parse(params);
    // console.log(params);
    console.log(`${this.AUTH_SERVER}/register`);
    return this.httpClient.post(`${this.AUTH_SERVER}/register`, user)
        .subscribe(data => {
          console.log(data);
        });

        // addHero (hero: Hero): Observable<Hero> {
        //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        //     catchError(this.handleError<Hero>('addHero'))
        //   );
        // }
    // return this.httpClient.post(`http://localhost:3800/api/register`, params);
    //   user).pipe(tap(
    //     (res: JwtResponseI) => {
    //       if (res) {
    //         // guardar token
    //         this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
    //       }
    //     })
    //   );
  }
}























// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// // import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs';
// import { GLOBAL } from './global';
// // import {  } from '@angular/common';



// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   // private URL = 'http://localhost:3800/api';
//   public url: string;

//   constructor( private http: HttpClient) {
//     this.url = GLOBAL.URL;
//    }

//   saveUser(user){
//     // return "texto desde servicio";
//     // return this.http.post<any>(this.URL + '')
//     let params = JSON.stringify(user);
//     let headers = new Headers({'Content-Type': 'aplication/json'});

//     // return this.http.post(this.url + 'register', params, {headers:headers} )
//     //         .map(res => res.json());
//   }
// }
