import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {
  tags: string[] = [];
  tagInputValue: string = '';

  addTag() {
    if (this.tagInputValue.trim() !== '') {
      this.tags.push(this.tagInputValue.trim());
      this.tagInputValue = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
}
