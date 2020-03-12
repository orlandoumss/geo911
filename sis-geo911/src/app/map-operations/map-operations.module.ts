import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MapRoutingModule } from './map-routing.module';
import { MaterialModule } from '../material.module';
import { PanelmapComponent } from './components/panelmap/panelmap.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';



@NgModule({
  declarations: [MenuComponent, PanelmapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    MaterialModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoib3JsYW5kb3Z2IiwiYSI6ImNrNWlpcmN4ZjBmNWczbHB4emJ1Y2UwbDAifQ.84x0H1Q5OpdhiKymfMPLFg',
      geocoderAccessToken: 'pk.eyJ1Ijoib3JsYW5kb3Z2IiwiYSI6ImNrNWlpcmN4ZjBmNWczbHB4emJ1Y2UwbDAifQ.84x0H1Q5OpdhiKymfMPLFg' 
    })
  ],
  exports: []
})
export class MapOperationsModule { }
