/* eslint-disable no-unsafe-finally */
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

export function helper_create_tag_2({
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

export function helper_create_tag_3(object) {
  let temp_tag = null;

  try {
    temp_tag = document.createElement(object.type);
    for (let key of Object.keys(object)) {
      console.log(`${key} = ${object[key]}`);
    }
    return temp_tag;
  } catch (error) {
    console.log(error);
  }
} // end helper_create_tag

export function helper_axios(API_URL) {
  return axios
    .get(API_URL)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
