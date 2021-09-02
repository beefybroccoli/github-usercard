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

/**
 * create UserCard and add to DOM tree
 * @param {*} user_object
 */
export function helper_create_UserCard_and_add_to_DOM(user_object) {
  //create a user card
  const my_card = Create_User_Card(user_object);
  // console.log(`create_UserCard_and_add_to_DOM - my_card = `, my_card);

  //add to DOM tree
  const div_cards = document.querySelector(".cards");
  div_cards.appendChild(my_card);
} //end helper_create_UserCard_and_add_to_DOM
