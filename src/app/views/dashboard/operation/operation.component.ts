import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/interfaces/operation.module';
import { OperationService } from 'src/app/services/operation.service';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit{
  operations:Operation[]=[]
  constructor(private operationService:OperationService){}
  ngOnInit(): void {
    this.operationService.getList().subscribe(
      response => {
        this.operations= response;
      })
  }
  onDel(id:number){
    this.operationService.del(id).subscribe(
      response => {
        this.operations = this.operations.filter(item => item.id !== id);
      })
  }
}
