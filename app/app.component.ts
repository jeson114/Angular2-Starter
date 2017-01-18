import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styles: [`
        .users-list li {
           cursor:pointer;
        }
        .jumbotron .glyphicon{
            font-size:80px;
        }
`]
})
export class AppComponent {
    users = [{
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
    activeUser;

    selectUser(user) {
        this.activeUser = user;
        console.log(user);
    }
}
