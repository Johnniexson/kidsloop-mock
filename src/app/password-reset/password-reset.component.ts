import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.css"]
})
export class PasswordResetComponent implements OnInit {
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
      ]
    });
  }

  submit() {
    this.processing = true;
    setTimeout(() => {
      if (this.form.controls.email.invalid) {
        this.form.controls.email.markAsTouched();
      }
      this.processing = false;
    }, 1000);
  }
}
