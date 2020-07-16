import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { CardPokestopComponent } from '../card-pokestop/card-pokestop.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  tituloCard = 'Teste';
  pokestops = [];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(CardPokestopComponent) card: CardPokestopComponent;

  getComunicados() {
    of([]).subscribe(
      res => {
        this.pokestops = res;
      },
      err => {
        alert('deu erro')
      }
    )
  }

  getCards() {
    this.pokestops = [
      {
        img: './assets/images/pokestops/morumbi/spiral-sculp.jpg',
        name: 'Spiral Sculp',
        location: `https://www.google.com.br/maps/place/23%C2%B037'36.2%22S+46%C2%B042'05.6%22W/@-23.6267258,-46.7020922,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-23.6267268!4d-46.7015445`,
        address: 'Rua Enxovia, 472 - Chacará Santo Antônio - SP',
        questName: 'Evoluir um pokemon usando 1 item',
        reward: 'Eevee (400 - 455)',
      },
      {
        img: './assets/images/pokestops/morumbi/azulejos-randa.jpg',
        name: 'Iguatemi Shopping',
        location: `https://www.google.com.br/maps/place/23%C2%B037'36.2%22S+46%C2%B042'05.6%22W/@-23.6267258,-46.7020922,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-23.6267268!4d-46.7015445`,
        address: 'Rua Enxovia, 472 - Chacará Santo Antônio - SP',
        questName: 'Evoluir um pokemon usando 1 item',
        reward: 'Eevee (400 - 455)',
      },
    ]
  }

  _onTitulo(event: any) {
    this.tituloCard = event;
  }

  _novoCard(event: any) {
    this.pokestops.push(event);
  }

}
