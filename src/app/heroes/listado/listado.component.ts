import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[]=['Spiderman', 'Airoman', 'Hulk', 'Thor', 'Capitan america'];
  heroeBorrado: string='';

  borrarHeroe(): void{
    this.heroeBorrado=this.heroes.shift() || '';
  }


}


// Contructor y el OnInit son lo primero que se ejecutan, ose ale primer momento.
