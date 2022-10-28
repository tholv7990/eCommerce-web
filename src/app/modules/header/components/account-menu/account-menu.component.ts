import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from 'src/libs';

@Component({
    selector: 'app-account-menu',
    templateUrl: './account-menu.component.html',
    styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent {

    @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();

    public form: FormGroup;

    constructor(builder: FormBuilder, private service: AccountService) {

        this.form = builder.group({
            email: [null, []],
            password: [null, []]
        })

    }

    public onLogin() {

        this.service.helloWorl().subscribe();
    }
}
