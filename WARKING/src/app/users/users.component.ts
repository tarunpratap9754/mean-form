import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../app.validators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;

  selectedUser: User
  toggleForm: boolean = false

  constructor(private userService: UserService) { }

  addUser(form) {
    const newUser: User = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email
    };

    this.userService.addUser(newUser)
      .subscribe(user => {
        this.users.push(user);
        this.userService.getUsers()
          .subscribe(users => this.users = users);
      })
  }

  deleteUser(id: any) {
    var users = this.users;
    this.userService.deleteUser(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
              users.splice(i, 1);
            }
          }
        }
      })
  }

  updateUser(user) {
    this.selectedUser = user;
    this.toggleForm = !this.toggleForm;
  }

  editUser(form) {
    let newUser: User = {
      _id: this.selectedUser._id,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email
    };

    this.userService.updateUser(newUser)
      .subscribe(user => {
        this.userService.getUsers()
          .subscribe(users => this.users = users);
        this.toggleForm = !this.toggleForm;
      });


  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
