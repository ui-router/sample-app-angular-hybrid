import { mymessagesModule } from '../mymessages.module';

messageBody.$inject = ['$sce'];
function messageBody($sce) {
  return (msgText = '') => $sce.trustAsHtml(msgText.split(/\n/).map(p => `<p>${p}</p>`).join('\n'));
}

mymessagesModule.filter('messageBody', messageBody);
