import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";

//todo: NECESITAMOS MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR PARA LA NAVEGACION DE RUTAS
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { TablaMultiplicarRoutingComponent } from "./components/tabla-multiplicar-routing/tabla-multiplicar-routing.component";

//todo: Array con las rutas -> de tipo Routes
const appRoutes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "cine", component: CineComponent
  },
  {
    path: "musica", component: MusicaComponent
  },
  //! ruta sin params
  {
    path: "numerodoble", component: NumerodobleComponent
  },
  //! ruta con Params
  {
    path: "numerodoble/:numero", component: NumerodobleComponent
  },
  {
    path: "tablamultiplicar/:numero", component: TablaMultiplicarRoutingComponent
  },
  {
    path: "**", component: NotfoundComponent
  }

]

//todo: DESDE ESTA CLASE, DEBEMOS EXPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
//todo: EXPORTAR LAS PROPIAS RUTAS
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);