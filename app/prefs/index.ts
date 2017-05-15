import { PrefsComponent } from './prefs.component';
import { prefsState } from './prefs.states';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';


let PREFS_STATES = [ prefsState ];

/** The NgModule for the Preferences feature */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild({ states: PREFS_STATES })
  ],
  declarations: [ PrefsComponent ],
})
class PrefsModule {}

export {PrefsModule};