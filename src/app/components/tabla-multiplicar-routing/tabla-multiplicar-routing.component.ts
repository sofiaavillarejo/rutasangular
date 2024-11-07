import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing',
  templateUrl: './tabla-multiplicar-routing.component.html',
  styleUrl: './tabla-multiplicar-routing.component.css'
})
export class TablaMultiplicarRoutingComponent {
  public numero!: number;
  public aux: Array<number>;
  constructor(private _activateRoute: ActivatedRoute, private _router: Router){
    this.aux = [];
  }

  redirect(num: number): void {
    this._router.navigate(["/tablamultiplicar", num]);
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros["numero"]);
        console.log(this.numero);
        this.aux = [];
        for (let i = 0; i < 11; i++) {
          let multiplicacion = this.numero * i;
          this.aux.push(multiplicacion);
        }
        console.log(this.aux);
      }
    })
  }

  
}
