export class Modal {
  constructor(modalId, helper) {
    this.helper = helper;
    this.modal = helper.id(modalId);
  }

  show() {
    this.modal.classList.add('show');
  }

  hide() {
    this.modal.classList.remove('show');
  }

  addList(listItemsObject) {
    let ul = this.helper.create('ul');
    let li;
    for(let i=0; i<listItemsObject.length; i++) {
      li = this.helper.create('li');
      li.appendChild(this.helper.text(listItemsObject[i].name));
      ul.appendChild(li);
    }
    this.modal.appendChild(ul);
  }
}
