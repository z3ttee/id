import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import SuperTokensReactComponent from "../../components/supertokens-auth-component/supertokens-auth-component";

@Component({
    standalone: true,
    selector: "app-auth",
    templateUrl: "./auth-view.component.html",
})
export class AuthComponent implements AfterViewInit, OnDestroy {
    title = "angularreactapp";

    public rootId = "rootId";

    // We use the ngAfterViewInit lifecycle hook to render the React component after the Angular component  view gets initialized
    ngAfterViewInit() {
        ReactDOM.render(React.createElement(SuperTokensReactComponent), document.getElementById(this.rootId));
    }

    // We use the ngOnDestroy lifecycle hook to unmount the React component when the Angular wrapper component is destroyed.
    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(document.getElementById(this.rootId) as Element);
    }
}