import { Component, OnInit } from '@angular/core';
import { Kpi } from 'src/app/interfaces/kpi.module';
import { KpiService } from 'src/app/services/kpi.service';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {
  dataTypes = [
    { id: 'option1', name: 'Numbers' },
    { id: 'option2', name: 'List of Projects' },
    { id: 'option3', name: 'List of Tasks' }
  ];
  kpisCanBeOperated:Kpi[]= []

  selectedDataType = this.dataTypes[1]; // Default to 'List of Projects'

  constructor(private kpiService:KpiService){}
  ngOnInit(): void {
    this.kpiService.getFiltredByType().subscribe(
      response => {
        this.kpisCanBeOperated= response;
      })
  }

  onDataTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    this.selectedDataType = this.dataTypes.find(option => option.id === selectedId) || this.dataTypes[0]; 
    console.log(this.selectedDataType);
  }


}
