//modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

//components
import {AppComponent} from './app.component';
import {UserProfileComponent} from './users/user-profile.component'
import {UsersComponent} from './users/users.component'
import {UserFormComponent} from './users/user-form.component'
import {UserListComponent} from './users/user-list/user-list.component'

//routing
import {routing} from './app.routing'

//service
import {UserService} from './shared/services/user.service'

//rxjs operators
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        UserProfileComponent,
        UserFormComponent,
        UsersComponent,
        UserListComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}