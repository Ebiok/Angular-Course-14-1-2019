import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { AdminGuard } from './admin.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserService, AdminGuard]
})
export class UsersModule { }
