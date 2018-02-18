## Contents

### States

- *mymessages.states.ts*: The MyMessages states

### Components

- *compose.component*.ts: Edits a new message
- *folderList.component*.ts: Displays a list of folders.
- *message.component*.ts: Displays the contents of a message.
- *messageList.component*.ts: Displays a list of messages.
- *messageTable.component*.ts: Displays a folder of messages as a table.
- *mymessages.component*.ts: Displays a list of folders.

### Filters

- *filters/messageBody.filter*.ts: Converts plain text formatting to something that html can display nicer.

### Directives

- *directives/sortMessages*.js: A directive used in messageTable to toggle the currently sorted column

### Services

- *services/messageListUI.service*.ts: A service used to find the closest (next/prev) message to the current message
