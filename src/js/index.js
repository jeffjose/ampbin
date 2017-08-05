import { Ampbin } from './ampbin';
import { Users } from './users';
import { Modal } from './modal';
import { Helper } from './helper';
import { Database } from './database';
import { Notifications } from './notifications';
import { UserInterface } from './userinterface';

let options = {
  files: [{
    type: 'html'
  }],
  pane: 'html',
  plugins: [
    'ace',
    'ampbin'
  ]
};

let db = new Database('bins');
let notifications = new Notifications('status');
let ampbin = new Ampbin(db, notifications, options);
let users = new Users(ampbin);
let userinterface = new UserInterface(users);

ampbin.addSaveHandler();

let modal = new Modal('modal', new Helper());
modal.addList([
  {'name': 'levi'},
  {'name': 'tadd'}
]);
