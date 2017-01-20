import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {RUser} from '../models/apiuser' 
@Injectable()
export class UserService {
    constructor(private http: Http) {}
    private resource = 'https://reqres.in/api/users?page=1';
    /**
     * Lists all users
     * @memberOf UserService
     */
    getUsers(): Observable < RUser[] > {
            return this.http.get(this.resource)
                .map(res => res.json().data)
                .catch(this.handleError);
        }
        //getUser
    getUser() {
            return this.http.get('https://reqres.in/api/users/2')
                .map(res => res.json().data)
                .catch(this.handleError);
        }
    //createUser

    //updateUser

    //deleteUser
    private handleError(err) {
        let errMessage: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;


        } else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
    }
}