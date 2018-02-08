import { Component, Inject } from '@angular/core';

@Component({
  selector: 'prefs-component',
  template: `
      <div>
          <button class="btn btn-primary" (click)="reset()"><i class="fa fa-recycle"></i> <span>Reset All Data</span></button>
      </div>

      <div>
          <label for="restDelay">Simulated REST API delay (ms)</label>
          <input type="text" name="restDelay" [(ngModel)]="prefs.restDelay">
          <button class="btn btn-primary" (click)="savePrefs()">Save</button>
      </div>
  `,
})
export class PrefsComponent {
  prefs;

  constructor(@Inject('AppConfig') public AppConfig) { }

  ngOnInit() {
    this.prefs = {
      restDelay: this.AppConfig.restDelay
    }
  }

  /** Clear out the session storage */
  reset() {
    sessionStorage.clear();
    document.location.reload(true);
  }

  /** After saving preferences to session storage, reload the entire application */
  savePrefs() {
    Object.assign(this.AppConfig, { restDelay: this.prefs.restDelay }).save();
    document.location.reload(true);
  }
}

