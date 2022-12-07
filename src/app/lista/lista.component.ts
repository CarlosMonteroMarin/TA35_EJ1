import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  @Input() lista: any;

  constructor(){}

  ngOnInit(): void {
  }
}
