import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {

  dsList = [
    {
      name: 'Stack',
      url: '/stack',
      btnClass: 'btn btn-primary'
    },{
      name: 'Queues',
      url: '/queues',
      btnClass: 'btn btn-secondary'
    },{
      name: 'Linked Lists',
      url: '/linkedlists',
      btnClass: 'btn btn-danger'
    },{
      name: 'Trees',
      url: '/trees',
      btnClass: 'btn btn-warning'
    },{
      name: 'Graphs',
      url: '/graphs',
      btnClass: 'btn btn-success'
    }
  ]
}
