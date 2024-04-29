import { Component } from '@angular/core';
import { Marca } from 'src/app/models/marca';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public info: Marca[];
constructor(){
  this.info = [
    {id: "",
    nombre: "sura",
    imagen: "https://www.shutterstock.com/image-vector/toyota-supra-design-logo-vector-260nw-2164012461.jpg",
    alt: "marca"
    }
  ]
}
}
