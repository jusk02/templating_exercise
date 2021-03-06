/**
 * @param {object} data contains the expected page content data
 * returns a default component to show the provided information.
 */
const defaultComp = (data) => {
  let section = document.createElement('SECTION');
  section.classList.add('default');
  section.textContent = JSON.stringify(data);
  return section;
}

export { defaultComp }