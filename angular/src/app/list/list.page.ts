import { Component } from '@angular/core';
import { legends } from '../names/nameslist.ts';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {
  legends: Array<string> = [];

  ngOnInit() {
    this.legends = legends
  }
  
}
