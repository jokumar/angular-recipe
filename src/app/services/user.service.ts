import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Recipe, RecipeView} from '../types/recipe';
import { environment } from '../../environments/environment';
import {User, UserView} from '../types/user';

@Injectable({
 providedIn: 'root'
})
export class UserService{
 constructor(private http: HttpClient){}
 url: string = environment.profileService;

 public getProfile(ownerId?: string): Observable<  UserView  > {
   return Observable.create((observer) => {
     this.http.get(this.url + '/' , {
       headers: new HttpHeaders({
         'Content-Type': 'application/json'

       }),
       observe: 'body',
     })
       .subscribe(
         (res: User) => {
           observer.next(res);
           observer.complete();

         },
         (error) => {
           console.log(JSON.stringify(error));
           observer.error(error);
           observer.complete();
         });
   });
 }


}

