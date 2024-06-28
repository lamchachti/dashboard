import { Component } from '@angular/core';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent {
  dataTypes = [
    { id: 'option1', name: 'Numbers' },
    { id: 'option2', name: 'List of Projects' },
    { id: 'option3', name: 'List of Tasks' }
  ];
  kpisCanBeOperated= [
    {
      id:'1',
      name: 'asana-projectlist-2024',
      type:'projectslist'
    },
    {
      id:'2',
      name: 'holded-projectlist-2024',
      type:'projectslist'
    },
    {
      id:'3',
      name: 'pipline-projectlist-2024',
      type:'taskslist'
    }
  ]
  selectedDataType = this.dataTypes[1]; // Default to 'List of Projects'

  onDataTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    this.selectedDataType = this.dataTypes.find(option => option.id === selectedId) || this.dataTypes[0]; 
    console.log(this.selectedDataType);
  }

}
