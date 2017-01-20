import {Component,OnInit } from '@angular/core';
import {RUser} from '../../shared/models/apiuser';
import {UserService} from '../../shared/services/user.service'

@Component({
    templateUrl : 'app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: RUser[];
    constructor(private service: UserService) {}
    ngOnInit() {
        this.service.getUsers()
            .subscribe(
                users => {
                    this.users = users
                },
                err => {
                    console.log('err');
                }
            );
    };
}

