import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedlists',
  templateUrl: './linkedlists.component.html',
  styleUrls: ['./linkedlists.component.scss']
})
export class LinkedlistsComponent {

  constructor() {
  }

  activeTab: string = 'singlyLinkedList'; // Initially active tab is Singly Linked List

  switchTab(tab: string): void {
    console.log(tab)
    this.activeTab = tab;
  }
}
