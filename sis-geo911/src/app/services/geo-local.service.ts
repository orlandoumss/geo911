import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoGrup } from '../models/geoGrup';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocalService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3800/geopol';
  authSubject = new BehaviorSubject(false);

  registerGeo(geo: GeoGrup){
    console.log(geo);
    return this.http.post(`${this.url}/geo-registro`, geo)
      .subscribe(data => {
        console.log("probando ..."+ data);
      });

  }

  getGeo() {
    // console.log('datos obtenidos' + this.http.get(`${this.url}/get-registro`) );
    return this.http.get<any>(`${this.url}/get-registro`);
    // console.log('datos obtenidos' +datos);
    // return datos;

  }
  getItem() {
    // console.log('datos obtenidos' + this.http.get(`${this.url}/get-registro`) );
    return this.http.get<any>(`${this.url}/item-grupo`);
    // console.log('datos obtenidos' +datos);
    // return datos;

  }

}
