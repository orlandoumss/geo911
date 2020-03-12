import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GeoLocalService } from '../../../services/geo-local.service';

@Component({
  selector: 'app-admin-registro',
  templateUrl: './admin-registro.component.html',
  styleUrls: ['./admin-registro.component.css']
})
export class AdminRegistroComponent implements OnInit {

  // public geolocal: GeoLocalService;
  formgeo: FormGroup;
  constructor(
    private geoService: GeoLocalService,
    private formgeolocal: FormBuilder
  ) {
      this. buildForm();
   }

  ngOnInit() {
  }

  private buildForm() {
    this.formgeo = this.formgeolocal.group({
      nom_grupo: ['', [Validators.required]],
      razon_social: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      distrito: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lon: ['', [Validators.required]]

    });
  }

  savegeo(event: Event){
    event.preventDefault();
    if (this.formgeo.valid) {
      const value = this.formgeo.value;
      console.log(value);
      this.geoService.registerGeo(value);
    } else {
      this.formgeo.markAllAsTouched();
    }
  }
}
