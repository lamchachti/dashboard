import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Kpi } from 'src/app/interfaces/kpi.module';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent  implements OnChanges {
  @Input() selectedDataType: any;
  @Input()  kpisCanBeOperated:Kpi[];
  tags: string[] = [];
  tagInput: string = '';
 
  allowedKeywords: string[] = []
  allowedOperator:string[] = ['+']
  operationData:string= ''

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['kpisCanBeOperated'] && this.kpisCanBeOperated) {
       this.kpisCanBeOperated.map(item => this.allowedKeywords.push(item.name));
    }
  }


  addTag() {
    if (this.tagInput && (this.allowedKeywords.includes( this.tagInput) || this.allowedOperator.includes(this.tagInput) ) ) {
      this.operationData+=this.tagInput
      this.tags.push(this.tagInput)
      this.updateOperationData()
      this.tagInput = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
    this.updateOperationData()
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTag();
    }
  }

  updateOperationData() {
    this.operationData = this.tags.join('');
    console.log('Operation Data:', this.operationData);
  }
  

}
