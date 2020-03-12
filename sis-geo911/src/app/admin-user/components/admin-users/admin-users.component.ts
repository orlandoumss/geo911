import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../../models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers: [ UsersService ]
})
export class AdminUsersComponent implements OnInit {

  // public title = '';
  public user: User;
  form: FormGroup;
  constructor(
    // private _route: ActivatedRoute,
    // private _router: Router,
    private userService: UsersService,
    private formBuilder: FormBuilder

  ) {
    //  this.title = "Registro";
     this.buildForm();
  }

  ngOnInit() {
    // console.log(this.userService.saveUser());
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      grado: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidoP: ['', [Validators.required]],
      apellidoM: ['', [Validators.maxLength(200)]],
      ci: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      telefono: ['',[Validators.required]],
      username: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      email: ['', [Validators.email]]
    });

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.userService.registerUser(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // onSubmit(){
  //   this.userService.saveUser()
  // }

}
