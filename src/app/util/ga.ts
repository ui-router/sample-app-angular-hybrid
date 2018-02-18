import { sampleAppModuleAngularJS } from "../angularJSModule";

/** Google analytics */

(<any>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*(<any>new Date());a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
}))(window,document,'script','//www.google-analytics.com/analytics.js','ga');

window['ga']('create', 'UA-73329341-1', 'auto');
window['ga']('send', 'pageview');

sampleAppModuleAngularJS.config(googleAnalyticsConfigBlock);

googleAnalyticsConfigBlock.$inject = ['$transitionsProvider'];
function googleAnalyticsConfigBlock($transitionsProvider) {
  const vpv = (vpath) =>
    window['ga']('send', 'pageview', vpath);

  const path = (trans) => {
    const formattedRoute = trans.$to().url.format(trans.params());
    const withSitePrefix = location.pathname + formattedRoute;
    return `/${withSitePrefix.split('/').filter(x => x).join('/')}`;
  };

  const error = (trans) => {
    const err = trans.error();
    const type = err && err.hasOwnProperty('type') ? err.type : '_';
    const message = err && err.hasOwnProperty('message') ? err.message : '_';
    vpv(path(trans) + ';errorType=' + type + ';errorMessage=' + message);
  };

  $transitionsProvider.onSuccess({}, (trans) => vpv(path(trans)), { priority: -10000 });
  $transitionsProvider.onError({}, (trans) => error(trans), { priority: -10000 });
}
