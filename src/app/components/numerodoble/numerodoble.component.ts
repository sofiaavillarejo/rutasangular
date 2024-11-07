import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit{
  //! esta variable nada que ver con el params
  public numero!: number;
  public doble!: number;

  //lo que se recibe, se recibe como private por sintaxis
                                                    //!inyectamos el objeto router
  constructor(private _activateRoute: ActivatedRoute, private _router: Router){

  }

  goToHome(): void {
    //que nos lleve a home
    this._router.navigate(["/"]);
  }

  //recibimos un numero
  redirect(num: number): void {
    //nos llamamos a nosotros mismo enviando en la ruta el parametro del num recibido
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //aqui debemos suscribirnos a los parametros q puedan venir en la ruta
    this._activateRoute.params.subscribe((parametros: Params) => {
      //todo: en esta promesa, viene una variable de objetos que es de tipo params
      //!Dentro de la variable params, se recuperan los parametros por su nombre con -> params['parameter name]
      //aqui el parametro sera opcional, asi que vamos a pregutnar antes de asignar
      if (parametros['numero'] != null) {
        //los parámetros son string
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero*2;
      }
    })
  }
}
