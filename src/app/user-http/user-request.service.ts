import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Repo } from '../repo-class/repo';
// import { environment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';

@Injectable(
  // providedIn: 'root'
)
export class UserRequestService {

  user: User;
  repo: Repo;
  arrayRepo:Repo[];
  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, "");
    this.repo = new Repo("", "", "");
  }




  userRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "?access_token="+environment.apikey).subscribe((response)=>{
    const userData=response;
    // https://api.github.com/users/daneden?access_token=43fad95bacdb5967ad02c08c76f47d9b7ba1625b
    this.user.photoUrl = userData["avatar_url"];
    this.user.userProfile = userData["login"];
    this.user.bio = userData["bio"];
    this.user.numRepos = userData["public_repos"];
    this.user.followers = userData["followers"];
    this.user.following = userData["following"];
    this.user.created = userData["created_at"];

    return this.user;
  })


  } //end userRequest



  repoRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "/repos?access_token="+environment.apikey).subscribe((response) =>{
      const reposData= response;
      // https://api.github.com/users/daneden/repos?access_token=43fad95bacdb5967ad02c08c76f47d9b7ba1625b
      this.arrayRepo = [];

      for (let index=0; index<reposData["length"]; index++) {
        this.repo = new Repo ("", "", "");
        this.repo.appName = reposData[index]["name"];
        this.repo.repoLink = reposData[index]["html_url"];
        this.repo.description = reposData[index]["description"];
        this.arrayRepo.push(this.repo);
      }
      return this.arrayRepo;
    })


  } //end Request

}
