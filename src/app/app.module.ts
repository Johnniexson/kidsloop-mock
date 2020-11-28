import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
const routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "password-reset",
    component: PasswordResetComponent
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
