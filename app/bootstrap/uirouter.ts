// Create an AppModule for the ng2 portion of the hybrid app
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {NgModule} from "@angular/core";

// TODO: move to ui-router-ng2
@NgModule({
  declarations: [UIROUTER_DIRECTIVES],
  exports: [UIROUTER_DIRECTIVES]
}) export class UIRouterModule {}

