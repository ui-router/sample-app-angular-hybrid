import { mymessagesModule } from '../mymessages.module';

/** Angular filter to format fake emails as HTML*/
const messageBody = function($sce) {
  return (msgText = '') => $sce.trustAsHtml(msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n'));
};

mymessagesModule.filter('messageBody', messageBody);