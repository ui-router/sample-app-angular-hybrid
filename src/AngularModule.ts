import { Component, Inject, NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

export class SomeClass {
  title = "This is an instance of SomeClass";
  toString() {
    return this.title
  }
}

@Component({
  selector: 'angular-cmp',
  template: `<h1>Hi from the Angular component</h1>`,
})
export class AngularCmp {
  constructor(
      // @Inject(SomeClass) public object: SomeClass, // this works
      public object: SomeClass, // this does not work
  ) {
    console.log("Object:", this.object)
  }
}

@NgModule({
  imports: [ BrowserModule, UpgradeModule, ],
  providers: [
    { provide: SomeClass, useClass: SomeClass },
  ],
  entryComponents: [ AngularCmp ],
  declarations: [ AngularCmp ],
})
export class SampleAppModuleAngular {
  ngDoBootstrap() { }
}
