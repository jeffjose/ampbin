export class Helper {
  id(elId) {
    return document.getElementById(elId);
  }
  class(elClass) {
    return document.getElementsByClassName(elClass);
  }
  create(elType) {
    return document.createElement(elType);
  }
  text(text) {
    return document.createTextNode(text);
  }
}
