import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { MOCK_Users } from "src/app/data/mock/mock-user";
import { User } from '@data/model/user';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: User;
  constructor(private tokenService: TokenStorageService) {
    let user = tokenService.getUser()
    if(user){
      this.user$ = user;
    }
  }

  signInWIthEmailAndPassword(email: string, password: string){
    // Mock signin user
    return new Promise((response, error) => {
      let user: User = MOCK_Users.find(u => u.email === email && u.password === password)
      if(user){
        this.tokenService.saveUser(user);
        response('SignIn Successfully')
      }else{
        error('Username or password is incorrect!')
      }
    })
  }

  signOut(){
    this.tokenService.signOut();
    return new Promise((response) => {
      response('SignOut Successfully')
    })
  }

  get currentUser(){
    return this.user$
  }
}
