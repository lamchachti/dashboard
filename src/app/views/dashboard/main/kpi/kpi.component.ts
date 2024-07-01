import { Component, Input } from '@angular/core';
import { Kpi } from 'src/app/interfaces/kpi.module';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent {
  @Input() kpi:Kpi
  constructor(){
    console.log(this.kpi)
  }
}
