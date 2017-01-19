import { Component } from '@angular/core';
import {User} from './shared/models/user'


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    users: User[] = [{
        id: 25,
        name: 'Jeson',
        username: 'js114'
    }, {
        id: 26,
        name: 'Nick',
        username: 'ni114'
    }, {
        id: 25,
        name: 'William',
        username: 'wi114'
    }, {
        id: 25,
        name: 'Holly',
        username: 'ho114'
    }, ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(user);
    }

    onUserCreated(event) {
        this.users.push({
            id: null,
            name: event.user.name,
            username: event.user.username
        });
        console.log(event);
        console.log(this.users);
    }
}
