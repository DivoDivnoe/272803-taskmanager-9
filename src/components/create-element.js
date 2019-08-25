const createElement = (template) => {
  const parent = document.createElement(`div`);
  parent.innerHTML = template;

  return parent.firstElementChild;
};

export default createElement;
