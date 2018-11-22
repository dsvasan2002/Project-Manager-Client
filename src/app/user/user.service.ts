import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util.service';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private util: UtilService, private messageService: MessageService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.util.host}/api/users`).pipe(
      tap(_ => this.log('Fetched users')),
      catchError(this.handleError('getAllUsers', []))
    );
  }
  getUser(userId): Observable<User> {
    const url = `${this.util.host}/api/users/${userId}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`Fetched user id = ${userId}`)),
      catchError(this.handleError<User>(`getUser id=${userId}`))
    );
  }
  createUser(user) {
    return this.http.post(`${this.util.host}/api/users`, user);
  }
  updateUser(userId, user) {
    return this.http.put(`${this.util.host}/api/users/${userId}`, user);
  }
  deleteUser(userId) {
    return this.http.delete(`${this.util.host}/api/users/${userId}`);
  }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

}

