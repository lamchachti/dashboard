import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Kpi } from 'src/app/interfaces/kpi.module';
import { Project } from 'src/app/interfaces/project.module';
import { KpiService } from 'src/app/services/kpi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  kpis: Kpi[] = []
  projects:Project []= []
  elseBlock: TemplateRef<NgIfContext<boolean>>|null;

  constructor(private kpiService: KpiService) { }

  ngOnInit(): void {
    this.kpiService.getList().subscribe(
      response => {
        this.kpis = response;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  
  }


}
