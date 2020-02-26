import { Atividade } from './atividade.model';

export class Grupo {

  constructor(
    public titulo: string,
    public atividades: Atividade[]
  ) { }

}

