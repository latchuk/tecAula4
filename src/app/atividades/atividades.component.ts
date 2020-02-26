import { Component, OnInit } from '@angular/core';
import { Atividade } from './atividade.model';
import { Grupo } from './grupo.model';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss']
})
export class AtividadesComponent implements OnInit {

  titulo: string;
  grupos: Grupo[] = [];

  constructor() {

    this.titulo = 'Minhas atividades';

    this.grupos = [

      new Grupo('Aula 3', [
        new Atividade('Declarar um array', true),
        new Atividade('Popular o array', true),
        new Atividade('Terminar o componente', true)
      ]),

      new Grupo('Aula 4', [
        new Atividade('Criar um novo modelo para agrupar atividades', true),
        new Atividade('Exibir todos os grupos', false)
      ]),

    ];

  }

  numeroAtividadesConcluidasGrupo(grupo: Grupo) {
    return grupo.atividades
      .filter(atividade => atividade.concluida === true)
      .length;
  }

  ngOnInit(): void {
  }

}
