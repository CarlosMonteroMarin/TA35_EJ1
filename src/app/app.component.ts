import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TA35_EJ1';
  nombreF: string = '';
  cifF: string = '';
  direccionF: string = '';
  grupoF: string= '';
  lista: Cliente[] | null = null;
  constructor(){}

  anadirCliente(): void{
    const cliente : Cliente = {
      nombre: this.nombreF,
      cif: this.cifF,
      direccion: this.direccionF,
      grupo : this.grupoF
    }
    if(this.lista == null) this.lista = [];
    this.lista.push(cliente);
    this.nombreF = '';
    this.cifF = '';
    this.direccionF = '';
  }
}
