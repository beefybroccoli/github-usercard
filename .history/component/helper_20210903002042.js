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

export function helper_create_tag_2(object) {
  try {
    let temp_tag = null;
    const key_array = ["textContent", "src", "href"];
    temp_tag = document.createElement(object.type);
    console.log("object.type = ", object.type);
    for (let key of Object.keys(object)) {
      // console.log(`${key} = ${object[key]}`);
      if (key === "classArray") {
        console.log(`${key} = ${object[key]}`);
        object.classArray && temp_tag.classList.add(...object.classArray);
      } else if (key_array.includes(key)) {
        console.log(`${key} = ${object[key]}`);

        //the below lines does not work
        // temp_tag.setAttribute(key, object[key]);

        //the below lines does not work
        // temp_tag.key = object[key];
      }
    }
    //return the result tag
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
