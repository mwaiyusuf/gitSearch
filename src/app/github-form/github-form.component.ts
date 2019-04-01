import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  // providers: [UserRequestService],
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  // user:User;

  username = "mwaiyusuf";

  @Output() addUser = new EventEmitter<any>();

  submitUser() {
    this.addUser.emit(this.username);
  }



  constructor() {}


  ngOnInit() {
    this.submitUser();
  }

}
