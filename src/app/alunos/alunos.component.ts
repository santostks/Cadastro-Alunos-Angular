import { Component, OnInit } from '@angular/core';
import { Aluno } from '../alunos';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: Aluno = {
    id: 1,
    name: 'Carl Johnson',
    curso: 'ADS',
    RA: 1568947832165
  };

  constructor() { }

  ngOnInit(): void {
  }

}
