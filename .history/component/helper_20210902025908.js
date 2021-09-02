import axios from "axios";
/**
 * create a html tag
 * @param {type, textContent, classArray, src, href} param0
 * @returns
 */
export function helper_create_tag({
  type,
  textContent,
  classArray,
  src,
  href,
}) {
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  classArray && temp_tag.classList.add(...classArray);
  temp_tag.src = src;
  temp_tag.href = href;
  return temp_tag;
} // end helper_create_tag
