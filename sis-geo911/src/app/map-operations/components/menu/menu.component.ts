import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
//import {Observable} from 'rxjs';
//import {map, startWith} from 'rxjs/operators';

import { GeoLocalService } from '../../../services/geo-local.service';
//import { GeoGrup } from  './ mapbox-gl-geocoder';

// importación de librerias mapbox
import * as Mapboxgl from 'mapbox-gl';
//import { element } from 'protractor';
//import { type } from 'os';
//import { async } from '@angular/core/testing';
import { MapgeoService } from 'src/app/services/mapgeo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public mapa: Mapboxgl.Map;
  // public coordinates: any = document.getElementById('coordinates');

  /* ************************************ */
 

/* ***************************** */
  tipo_geo:{grup_loc:string, opcion:number};
  options: FormGroup;
  colorControl = new FormControl('accent');
  fontSizeControl = new FormControl('', Validators.min(10));

  datosGeo: any ; // any;
  datosItem = []; // : any;
  /*  constructo de la clase *************************/
  constructor(
      fb: FormBuilder,
      private geoService: GeoLocalService,
      private mapgeoservice: MapgeoService
    ) {
        this.options = fb.group({
          color: this.colorControl,
          fontSize: this.fontSizeControl
        });

        // this.geoService.getGeo()
        //   .subscribe(
        //   res => {
        //     const datosG = JSON.stringify(res);
        //   },
        //     err => console.log(err)
        // );
  } // fin del constructor ************************

/* **************************************************************************************
    Función para ejecutar la asignacion de puntos de georeferenciación de puntos segun el
    grupo seleccionado...
**************************************************************************************** */
enviarParametros(nomb_grup: string, opcion: number){
  this.tipo_geo = {grup_loc: nomb_grup, opcion: opcion};
  //this.tipo_geo.opcion = opcion;
  //console.log('verificando ---> ', this.tipo_geo.grup_loc);
  this.mapgeoservice.localizacion$.emit(this.tipo_geo);
}

/* **************************************************************************************

**************************************************************************************** */

  getFontSize() {
    return Math.max(14, this.fontSizeControl.value);
  }

  ngOnInit() {
    this.geoService.getItem()
        .subscribe(
          res => {
            this.datosItem =  res;
            console.log('datos obtenidos uno... ' + this.datosItem);
          },
            err => console.log(err)
        );
 
  } // ********************************fin OnInit

}
