import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-card-pokestop',
  templateUrl: './card-pokestop.component.html'
})
export class CardPokestopComponent implements OnInit {

  _info: any;


  @Output() novoItem = new EventEmitter<any>();

  newCard = {
    img: './assets/images/pokestops/morumbi/spiral-sculp.jpg',
    name: 'Spiral Sculp',
    location: `https://www.google.com.br/maps/place/23%C2%B037'36.2%22S+46%C2%B042'05.6%22W/@-23.6267258,-46.7020922,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-23.6267268!4d-46.7015445`,
    address: 'Rua Enxovia, 472 - Chacará Santo Antônio - SP',
    questName: 'Evoluir um pokemon usando 1 item',
    reward: 'Eevee (400 - 455)',
  };

  @Input()
  set info(value) {
    this._info = value;
  }

  @Output() titulo = new EventEmitter();
  @Output() novoCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(titulo: any) {
    this.titulo.emit(titulo);
    this.novoCard.emit(this.newCard);
  }

  sendMessage() {
    of([]).subscribe(
      res => {
        this.novoItem.emit(res);
      },
      err => {}
    )
  }

  _onNovoEvento(event) {

  }



}
