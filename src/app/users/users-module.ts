import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    Users
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }