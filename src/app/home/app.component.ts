import { homeModule } from './home.module';

/**
 * The controller for the `app` component.
 */
class AuthedController {
  //data
  emailAddress;
  isAuthenticated;

  static $inject = ['AppConfig', 'AuthService', '$state'];
  constructor(AppConfig, public AuthService, public $state) {
    this.emailAddress = AppConfig.emailAddress;
    this.isAuthenticated = AuthService.isAuthenticated();
  }

  logout() {
    let {AuthService, $state} = this;
    AuthService.logout();
    // Reload states after authentication change
    return $state.go('welcome', {}, { reload: true });
  }
}

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */
const appComponent = {
  controller: AuthedController,
  template: `
    <div class="navheader">
      <ul ng-if="::$ctrl.isAuthenticated" class="nav nav-tabs">
    
        <li ui-sref-active="active"> <a ui-sref="mymessages" role="button"> Messages </a> </li>
        <li ui-sref-active="active"> <a ui-sref="contacts" role="button"> Contacts </a> </li>
        <li ui-sref-active="active"> <a ui-sref="prefs" role="button"> Preferences </a> </li>
    
        <li class="navbar-right">
          <button class="btn btn-primary fa fa-home" ui-sref="home"></button>
          <button style="margin-right: 15px;" class="btn btn-primary" ui-sref="mymessages.compose"><i class="fa fa-envelope"></i> New Message</button>
        </li>
    
        <li class="navbar-text navbar-right logged-in-user" style="margin: 0.5em 1.5em;">
          <div>
            {{::$ctrl.emailAddress}} <i class="fa fa-chevron-down"></i>
            <div class="hoverdrop">
              <button class="btn btn-primary" ng-click="$ctrl.logout()">Log Out</button>
            </div>
          </div>
        </li>
    
      </ul>
    </div>
    
    <div ui-view/>
`
};

homeModule.component('app', appComponent);
