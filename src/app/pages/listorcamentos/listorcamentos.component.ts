import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listorcamentos',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './listorcamentos.component.html',
  styleUrls: ['./listorcamentos.component.css']
})
export class ListorcamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
