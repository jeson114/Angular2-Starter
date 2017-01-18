import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My Angular 2 App</a>
                </div>
            </nav>
        </header>
        <main>
            <div class="jumbotron">
                <h1>Welcome to our app</h1>
                <p>{{message}}</p>
            </div>
            <div *ngIf="users">
                <div *ngFor="let user of users">
                    {{user.name}}
                </div>
            </div>
        </main>
        <footer>
            Copyright &copy; 2017
        </footer>
`,
    styles: [`
        .jumbotron {
            box-shadow 0 2px 0 0 #ddd;
        }
`]
})
export class AppComponent {
    message = 'Hello there';
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
    },]
}
