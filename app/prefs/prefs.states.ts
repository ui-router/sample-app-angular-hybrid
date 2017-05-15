import { PrefsComponent } from './prefs.component';

/**
 * This state allows the user to set their application preferences
 */
export const prefsState = {
  parent: 'app',
  name: 'prefs',
  url: '/prefs',
  component: PrefsComponent,
  // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
  data: { requiresAuth: true }
};
