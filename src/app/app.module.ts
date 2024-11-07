import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';

//todo: IMPORTAR EL ROUTING
import { routing, appRoutingProvider } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { TablaMultiplicarRoutingComponent } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing.component';
import { MenuTablaComponent } from './components/menu-tabla/menu-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent,
    TablaMultiplicarRoutingComponent,
    MenuTablaComponent
  ],
  imports: [
    BrowserModule,
    routing //todo: aqui routing
  ],
  providers: [appRoutingProvider], //todo: aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
