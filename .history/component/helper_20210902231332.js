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
  let temp_tag = null;

  try {
    temp_tag = document.createElement(object.type);
    for(key of object.key){
      console.log(`${key} = ${object[key]}`)
    }
  } catch (error) {
    console.log(error);
  } finally {
    return temp_tag;
  }
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  classArray && temp_tag.classList.add(...classArray);
  temp_tag.src = src;
  temp_tag.href = href;
  return temp_tag;
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
