import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-statistics',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
