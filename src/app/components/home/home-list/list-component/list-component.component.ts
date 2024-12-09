import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.scss',
})
export class ListComponentComponent {
  displayedColumns: string[] = [
    'select',
    'numero',
    'serie',
    'nome',
    'raca',
    'pureza',
    'rdc',
    'sexo',
    'pai',
    'mae',
    'dataNascimento',
    'ultimaParicao',
    'menu',
  ];

  dataSource = [
    {
      numero: '123456789',
      serie: '123456789',
      nome: 'Bernadete',
      raca: 'Brangus',
      pureza: 'Exemplo',
      rdc: 'AFDCJ',
      sexo: 'Fêmea',
      pai: 'Hereford',
      mae: 'Hereford',
      dataNascimento: '12 de abril 2023',
      ultimaParicao: '10 de abril 2024',
    },
    {
      numero: '987654321',
      serie: '987654321',
      nome: 'Joana',
      raca: 'Angus',
      pureza: 'Puro',
      rdc: 'DFGJK',
      sexo: 'Fêmea',
      pai: 'Hereford',
      mae: 'Hereford',
      dataNascimento: '10 de janeiro 2023',
      ultimaParicao: '15 de março 2024',
    },
  ];
}
