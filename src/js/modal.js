export class Modal {
  constructor(modalId, helper) {
    this.helper = helper;
    this.modal = helper.i(modalId);
  }

  addList(listItemsObject) {
    let ul = this.helper.n('ul');
    let li;
    for(let i=0; i<listItemsObject.length; i++) {
      li = this.helper.n('li');
      li.appendChild(this.helper.t(listItemsObject[i].name));
      ul.appendChild(li);
    }
    this.modal.appendChild(ul);
  }
}
