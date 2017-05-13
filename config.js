var packages = {
  "app": { "defaultExtension": "js" }
};

var ng2PackageNames = [
  'common', 'compiler', 'core', 'forms', 'http', 'platform-browser', 'platform-browser-dynamic', 'testing', 'upgrade', 'router'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
ng2PackageNames.forEach(function(pkgName) {
  packages["@angular/" + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
});

System.config({
  transpiler: false,
  defaultJSExtensions: true,

  packages: packages,

  paths: { "npm:*": "node_modules/*" },

  meta: {
    "npm:angular/angular": { format: "global", exports: "angular" },
  },

  map: {
    "angular": "npm:angular/angular",
    "@angular": "npm:@angular",
    "rxjs": "npm:rxjs",
    "@uirouter/core": "npm:@uirouter/core/_bundles/ui-router-core",
    "@uirouter/angular-hybrid": "npm:@uirouter/angular-hybrid/_bundles/ui-router-angular-hybrid",
    "@uirouter/angularjs": "npm:@uirouter/angularjs/release/ui-router-angularjs",
    "@uirouter/angular": "npm:@uirouter/angular/_bundles/ui-router-ng2",
    "@uirouter/rx": "npm:@uirouter/rx/_bundles/ui-router-rx",
    "@uirouter/visualizer": "npm:@uirouter/visualizer/bundles/visualizer.min",
    "bootstrap": "npm:bootstrap/dist",
    "css": "npm:systemjs-plugin-css/css",
    "d3": "npm:d3/d3.min",
    "font-awesome": "npm:font-awesome",
  }
});
