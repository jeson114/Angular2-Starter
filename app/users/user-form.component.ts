import { Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
    selector:'user-form',
    templateUrl:'app/users/user-form.html',
    styles:[`
    form{
        border-radius :3px;
        padding:10px;
    }
    `
    ]
})

export class UserFormComponent {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;
    onSubmit() {
        this.userCreated.emit({user : this.newUser});
        console.log(this.newUser);
        this.newUser = new User();
        this.active = false;
        setTimeout(()=> this.active =true,0);
    }
}