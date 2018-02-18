import { mymessagesModule } from '../mymessages.module';

/** Provides services related to a message list */
class MessageListUI {
  static $inject = ['$filter', 'AppConfig'];
  constructor(public $filter, public AppConfig) { }

  /** This is a UI helper which finds the nearest messageId in the messages list to the messageId parameter */
  proximalMessageId(messages, messageId) {
    let sorted = this.$filter("orderBy")(messages, this.AppConfig.sort);
    let idx = sorted.findIndex(msg => msg._id === messageId);
    var proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
    return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
  }
}

mymessagesModule.service('MessageListUI', MessageListUI);
