import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { BaladasComponent } from './baladas/baladas.component';
import { MetalComponent } from './metal/metal.component';
import { ParabailarComponent } from './parabailar/parabailar.component';
import { Rock90sComponent } from './rock90s/rock90s.component';


@NgModule({
  declarations: [
    BaladasComponent,
    MetalComponent,
    ParabailarComponent,
    Rock90sComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
