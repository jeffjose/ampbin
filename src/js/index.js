import { Ampbin } from './ampbin';
import { Users } from './users';
import { Modal } from './modal';
import { Helper } from './helper';
import { Database } from './database';
import { Notifications } from './notifications';
import { UserInterface } from './userinterface';
var results;
  var validationStatusEl = document.getElementById('validation-status');
  var validationStatus = function(status) {
    validationStatusEl.innerHTML = status;
    if(status === 'FAIL') {
        validationStatusEl.style.background = '#D50000';
    } else {
        validationStatusEl.style.background = '#33691E';
    }
  };
  var copy = document.getElementById('copy');

  Jotted.plugin('ampbin', function(jotted, options) {
    jotted.on('change', function(params, callback) {
      copy.value = params.content;
      if(params.content.length > 0) {
        results = amp.validator.validateString(params.content);
        validationStatus(results.status);
      }
      callback(null, params);
    });
  });
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
modal.show();

modal.modal.onclick = function() {
  modal.hide();
};
