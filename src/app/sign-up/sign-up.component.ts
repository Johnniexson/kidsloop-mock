import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  processing;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          )
        ])
      ],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required]
    });
  }

  submit() {
    this.processing = true;
    setTimeout(() => {
      if (this.form.controls.name.invalid) {
        this.form.controls.name.markAsTouched();
      }
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
