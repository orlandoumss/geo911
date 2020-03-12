import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapgeoService } from 'src/app/services/mapgeo.service';
import { GeoLocalService } from 'src/app/services/geo-local.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-panelmap',
  templateUrl: './panelmap.component.html',
  styleUrls: ['./panelmap.component.css']
})
export class PanelmapComponent implements OnInit, OnDestroy {

  public url: string;
  grup_loc: string;
  opcion: number;
  dat_geojson: any;
  nomSuscription: Subscription;
  constructor(
    private mapgeoservice: MapgeoService,
    private geoservice:GeoLocalService
    ) { 
      // this.grup_loc = "dp111";
      // this.opcion = 1;
    }

  ngOnInit() {
    //this.cargarLocalizacion();
    this.asignarPuntos();
    // this.nomSuscription = this.mapgeoservice.localizacion$.subscribe( texto => {
      
    //   console.log('datos servicio  ', texto.grup_loc);
    //   this.grup_loc = texto.grup_loc;
    //   this.opcion= texto.opcion;
    // });
    // console.log('datos servicio ----> ', this.grup_loc);
    
  }

  ngOnDestroy() {
    this.nomSuscription.unsubscribe();
  }
  // cargarLocalizacion = () => {
  //   this.mapgeoservice.localizacion$.subscribe( texto => {
      
  //     console.log('datos servicio  ', texto.grup_loc);
  //     this.grup_loc = texto.grup_loc;
  //     this.opcion= texto.opcion;
  //   });
  //   console.log('datos servicio ----> ', this.grup_loc);
  // }

  /* ******************************************************************************
  *      Obtener los puntos de la base de datos para geolocalizar    
  ********************************************************************************* */

  private getLocalizacion = async () => {
    try {
        const dato = await this.geoservice.getGeo().toPromise();
        return dato;
      } catch (error) {
        console.log('Error: ' + error);
        return null;
      }
  }
/* ***************************************************************************************
    Metodo que permite cargar los datos  para georeferenciar en el mapa
********************************************************************************************/
  crearDatosMarcador = ( datos, grupo) => {
    console.log('estos son datos en Marcador:' + `${datos[0].lat}`);
    let objgeo = {};
    let obj = {};
    for (const ind in datos) {
      if (datos[ind].nom_grupo.localeCompare(grupo) === 0 ) {

        obj = { ind: {type: 'Feature',
                              properties: {
                                title: datos[ind].razon_social,
                                text: `${datos[ind].direccion}: ${datos[ind].telefono}`,
                                iconSize: [40, 40]
                              },
                              geometry: {
                                type: 'Point',
                                coordinates: [datos[ind].lon, datos[ind].lat]
                              }
                }
        }  ;
        objgeo = Object.assign(objgeo, obj);
        objgeo = Object.values(objgeo);
        }
      }

    const geojson = {
          type: 'FeatureCollection',
          features: Object.values(objgeo)
        };
    return JSON.parse(JSON.stringify(geojson));
  } // ********* fin del metodo ************

 /* ********************************************************************************
 * 
 * ****************************************************************************** */
  asignarPuntos = () => {
    this.nomSuscription = this.mapgeoservice.localizacion$.subscribe( texto => {
      console.log('datos servicio  ', texto.grup_loc);
      this.grup_loc = texto.grup_loc;
      if(texto.opcion > 6){
        this.url = "../../../../assets/img/marcador" +1+ ".svg";
      } else {
        this.url = "../../../../assets/img/marcador" +texto.opcion+ ".svg";
      }
      console.log('******** ',this.url);
      (async () => {
        try {
          const datos = await this.getLocalizacion();
          console.log('datos obtenidos...--->', datos);
          const puntos_geo = this.crearDatosMarcador(datos, this.grup_loc);
          this.dat_geojson = puntos_geo.features;
          console.log('Probando Marker12....:' + JSON.stringify(puntos_geo));
        } catch (error) {
          console.log(error);
        }
    
      })();
    });
  }


} /* fin de la clase */



