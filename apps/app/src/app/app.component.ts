import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import * as SuperTokens from "supertokens-auth-react";
import * as Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
      appName: "Zitzmann ID",
      apiDomain: "http://localhost:3001",
      websiteDomain: "http://localhost:4200",
      apiBasePath: "",
      websiteBasePath: "/auth"
  },
  recipeList: [
      Passwordless.init({
          contactMethod: "EMAIL"
      }),
      Session.init(),
  ],
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
