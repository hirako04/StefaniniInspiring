import { Component } from '@angular/core';
import { legends } from '../names/nameslist.ts';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {

  constructor() {
    
  }
  
  legends: Array<string> = [];

  ngOnInit() {
    this.legends = legends
  }

}


