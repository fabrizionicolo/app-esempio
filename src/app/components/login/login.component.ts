import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private profileService: ProfileService, private router: Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }

  public onLogin(): void {
    console.log("Login: ", this.form.value);
    this.authService.loggin(this.form.value).then(
      response => {
        if (response) {
          this.router.navigate(["shop"]);
          this.profileService.setProfilo(this.form.value.username);
        } else {
          alert("Credenziali non corrette!")
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
