import { mymessagesModule } from './mymessages.module';

/**
 * This component renders a list of messages using the `messageTable` component
 */
const messageListComponent = {
  bindings: { folder: '<', messages: '<' },
  template: `
    <div class="messages">
      <message-table columns="$ctrl.folder.columns" messages="$ctrl.messages"></message-table>
    </div>
`};

mymessagesModule.component('messageList', messageListComponent);