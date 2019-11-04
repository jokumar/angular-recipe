import {Component, Output, EventEmitter } from '@angular/core' ;
import {AuthenticationService} from '../services/authentication.service';


@Component({
   selector: 'app-header',
   templateUrl: './header.component.html'
})

export class HeaderComponent{

 constructor(protected authenticationService: AuthenticationService){

 }

 public doLogout(): void {

   this.authenticationService.doLogout();
 }

}


