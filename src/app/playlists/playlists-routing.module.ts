import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaladasComponent } from './baladas/baladas.component';
import { MetalComponent } from './metal/metal.component';
import { ParabailarComponent } from './parabailar/parabailar.component';
import { Rock90sComponent } from './rock90s/rock90s.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'baladas', component: BaladasComponent },
      { path: 'metal', component: MetalComponent },
      { path: 'parabailar', component: ParabailarComponent },
      { path: 'rock', component: Rock90sComponent },
      { path: '**', redirectTo: 'baladas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
