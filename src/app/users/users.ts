import { Component } from '@angular/core';
import { UserInterface } from './interface/users.interface';
import { RoleEnum } from './enum/role.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrl: './users.less',
  standalone: false
})
export class Users {
  
  displayedColumns: string[] = ['index', 'name', 'surname', 'role', 'email'];

  users: UserInterface[] = [
    { name: "Jan", surname: "Kowalski", role: RoleEnum.admin, email: "test@test.pl" },
    { name: "Karol", surname: "Nowak", role: RoleEnum.user, email: "test2@test.pl" },
    { name: "Monika", surname: "Bez", role: RoleEnum.user, email: "test@test.pl" }
  ];
}