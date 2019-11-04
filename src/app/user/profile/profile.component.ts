import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserView} from '../../types/user';

@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user: UserView
 constructor(public userService: UserService) { }

 ngOnInit() {

   this.userService.getProfile().subscribe(res => {
     this.user = res;
   }, error => {
     console.error('Failed to retrieve ingredients');
     this.user = null;
   });

 }

}

