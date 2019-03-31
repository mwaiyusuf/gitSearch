import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {git-Search} from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 username = "mwaiyusuf";
 @Output() adduser = new EventEmitter();
 submitUser(){
   this.adduser.emit(this.userName)
 }
  constructor() { }

  ngOnInit() {
    this.submitter();
  }

}
