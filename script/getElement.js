function getElement(selection) {
  return document.querySelector(selection);
}
export default getElement;

export const getElementAll = function (selection) {
  return document.querySelectorAll(selection);
};
