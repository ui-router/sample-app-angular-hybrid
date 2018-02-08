import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export class SomeClass {
  title = "This is an instance of SomeClass";
  toString() {
    return this.title
  }
}

@Component({
  selector: 'angular-cmp',
  template: `<h1>Angular component</h1>`,
})
export class AngularCmp {
  constructor(
      @Inject(SomeClass) public someObject: SomeClass, // this works
      // public someObject: SomeClass, // this does not work
  ) {
    console.log("Object:", this.someObject)
  }
}

@NgModule({
  imports: [ BrowserModule ],
  providers: [
    { provide: SomeClass, useClass: SomeClass },
  ],
  entryComponents: [ AngularCmp ],
  declarations: [ AngularCmp ],
  bootstrap: [ AngularCmp ],
})
export class SampleAppModuleAngular {
}

platformBrowserDynamic().bootstrapModule(SampleAppModuleAngular);
