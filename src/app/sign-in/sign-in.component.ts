import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  processing;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          )
        ])
      ],
      password: ["", Validators.required]
    });
  }

  submit() {
    this.processing = true;
    setTimeout(() => {
      if (this.form.controls.email.invalid) {
        this.form.controls.email.markAsTouched();
      }
      if (this.form.controls.password.invalid) {
        this.form.controls.password.markAsTouched();
      }
      this.processing = false;
    }, 1000);
  }
}
