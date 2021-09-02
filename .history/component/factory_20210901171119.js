export function create_tag({ type, textContent, classArray }) {
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  classArray && temp_tag.classList.add(...classArray);
  return temp_tag;
}
