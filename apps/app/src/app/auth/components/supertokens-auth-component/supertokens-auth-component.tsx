import * as React from "react";
import * as SuperTokens from "supertokens-auth-react";
import {canHandleRoute, getRoutingComponent} from "supertokens-auth-react/ui";
import { PasswordlessPreBuiltUI } from "supertokens-auth-react/recipe/passwordless/prebuiltui";

class SuperTokensReactComponent extends React.Component {
    override render() {
        if (canHandleRoute([PasswordlessPreBuiltUI])) { 
            return getRoutingComponent([PasswordlessPreBuiltUI]);
        }
        return "Route not found";
    }
}

export default SuperTokensReactComponent;