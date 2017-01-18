"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello there';
        this.users = [{
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
            },];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <header>\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"navbar-header\">\n                    <a href=\"/\" class=\"navbar-brand\">My Angular 2 App</a>\n                </div>\n            </nav>\n        </header>\n        <main>\n            <div class=\"jumbotron\">\n                <h1>Welcome to our app</h1>\n                <p>{{message}}</p>\n            </div>\n            <div *ngIf=\"users\">\n                <div *ngFor=\"let user of users\">\n                    {{user.name}}\n                </div>\n            </div>\n        </main>\n        <footer>\n            Copyright &copy; 2017\n        </footer>\n",
        styles: ["\n        .jumbotron {\n            box-shadow 0 2px 0 0 #ddd;\n        }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map