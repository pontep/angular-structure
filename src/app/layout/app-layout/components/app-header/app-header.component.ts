import { Component, OnInit } from '@angular/core';
import { User } from '@data/model/user';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  user: User;

  constructor(private auth: AuthenticationService) {
    this.user = auth.currentUser;
  }

  ngOnInit(): void {
  }

}
