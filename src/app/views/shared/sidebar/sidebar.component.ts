import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports:[RouterLink]
})
export class SidebarComponent {

}
