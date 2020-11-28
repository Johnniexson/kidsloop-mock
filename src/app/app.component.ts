import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dark_mode = false;
  title = "CodeSandbox";

  toggle_mode() {
    this.dark_mode = !this.dark_mode;
    // add dark class to body classlist based on dark_mode value
    if (this.dark_mode) {
      window.document.body.classList.toggle("dark", true);
    } else {
      window.document.body.classList.toggle("dark", false);
    }
  }
}
