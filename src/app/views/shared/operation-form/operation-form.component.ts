import { Component, OnInit } from '@angular/core';
import { Kpi } from 'src/app/interfaces/kpi.module';
import { Operation } from 'src/app/interfaces/operation.module';
import { KpiService } from 'src/app/services/kpi.service';
import { OperationService } from 'src/app/services/operation.service';
import Swal from 'sweetalert2';

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
  kpisCanBeOperated:Kpi[]= []
  allowedOperators:string[]=['+','-']
  selectedDataType = this.dataTypes[1]; // Default to 'List of Projects'

  opFormula:string=''

  constructor(private kpiService:KpiService,private operationService:OperationService){
    this.kpiService.getFiltredByType().subscribe(
      response => {
        this.kpisCanBeOperated= response;
      })
  }
  onDataTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    this.selectedDataType = this.dataTypes.find(option => option.id === selectedId) || this.dataTypes[0]; 
  }
  updateFormula(id:string):void{
    if(!this.opFormula||this.opFormula.endsWith('+')||this.opFormula.endsWith('-')){
      this.opFormula+=`${'id:'+id}`
    }else{
      this.showAlert('click an operator first')
    }
  }
  addOperator(operator:string){
    if(!this.opFormula){
      this.showAlert('Select an element first')
    }else if(this.opFormula.endsWith('+') || this.opFormula.endsWith('-') ){
      this.showAlert('Dublicated operators!')
    }else{
      this.opFormula+=operator
    }
  }

  submit(){
    const newOperation:Operation={operation_data:this.opFormula}
    this.operationService.add(newOperation).subscribe( response=>{

    } )
  }

  // ALERT 
  showAlert(message:string) {
    Swal.fire({
      title: 'Invalid format',
      text: message,
      icon: 'error',
      confirmButtonText: 'close', 
    });
  }

}
