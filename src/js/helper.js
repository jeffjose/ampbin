export class Helper {
  i(elId) {
    return document.getElementById(elId);
  }
  c(elClass) {
    return document.getElementsByClassName(elClass);
  }
  n(elType) {
    return document.createElement(elType);
  }
  t(text) {
    return document.createTextNode(text);
  }
}
