import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { AdminUserModule } from './admin-user/admin-user.module';

// Componentes
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoggedModule } from './logged/logged.module';
import { MapOperationsModule } from './map-operations/map-operations.module';
import { isPlatformBrowser } from '@angular/common';

// Servicios

import { GeoLocalService} from './services/geo-local.service';
import { MapgeoService } from './services/mapgeo.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoggedModule,
    MapOperationsModule,
    AdminUserModule

  ],
  providers: [GeoLocalService, MapgeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
