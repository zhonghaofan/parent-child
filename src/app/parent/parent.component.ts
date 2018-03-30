import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(Child2Component) child2;
  parentMessage = "Message from Parent!";
  constructor() { }

  ngOnInit() {
  }
  
  message2:string;

  message3:string;

  receiveMessage($event) {
    this.message3 = $event;
  }
  
  ngAfterViewInit() {
    this.message2 = this.child2.message;
  }

}
