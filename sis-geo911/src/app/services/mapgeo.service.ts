import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MapgeoService {

  localizacion$ = new EventEmitter<Object>();
  constructor() { }
}
