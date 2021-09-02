import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const API_URL = "https://api.github.com/users/";
const my_username = "beefybroccoli";
const my_user_data = axios
  .get(API_URL + my_username)
  .then((response) => {
    // console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    console.log("error: ", error);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
my_user_data &&
  my_user_data.then((data) => {
    helper_create_UserCard_and_add_to_DOM(data);
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function Create_User_Card({
  avatar_url,
  login,
  html_url,
  bio,
  location,
  followers,
  following,
}) {
  //==========================================================================
  //Step 1 - create tags
  //==========================================================================
  // <div class="card">
  const div_card = helper_create_tag({ type: "div", classArray: ["card"] });
  // <img src={image url of user} />
  const tag_img_ = helper_create_tag({ type: "img", src: avatar_url });
  // <div class="card-info">
  const div_cardInfo = helper_create_tag({
    type: "div",
    classArray: ["card-info"],
  });
  // <h3 class="name">{users name}</h3>
  const tag_h3 = helper_create_tag({
    type: "h3",
    classArray: ["name"],
    textContent: login,
  });
  // <p class="username">{users name}</p>
  const tag_p_userName = helper_create_tag({
    type: "p",
    classArray: ["username"],
    textContent: login,
  });
  // <p>Location: {users location}</p>
  const tag_p_location = helper_create_tag({
    type: "p",
    textContent: `Location: ${location}`,
  });
  // <p>Profile: </p>
  const tag_p_profile = helper_create_tag({
    type: "p",
    textContent: "Profile:",
  });
  // <a href={address to users github page}>{address to users github page}</a>
  const tag_anchor = helper_create_tag({
    type: "a",
    href: html_url,
    textContent: html_url,
  });
  // <p>Followers: {users followers count}</p>
  const tag_p_followers = helper_create_tag({
    type: "p",
    textContent: "Followers: " + followers,
  });
  // <p>Following: {users following count}</p>
  const tag_p_follwing = helper_create_tag({
    type: "p",
    textContent: "Following: " + following,
  });
  // <p>Bio: {users bio}</p>
  const tag_p_bio = helper_create_tag({
    type: "p",
    textContent: "Bio: " + bio,
  });

  //==========================================================================
  //Step 2 - add child to parent
  //==========================================================================
  /*
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
  */
  tag_p_profile.appendChild(tag_anchor);

  /*
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users name}</p>
      <p>Location: {users location}</p>
      <p>Profile: <a></a> </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  */
  [
    tag_h3,
    tag_p_userName,
    tag_p_location,
    tag_p_profile,
    tag_p_followers,
    tag_p_follwing,
    tag_p_bio,
  ].forEach((child) => {
    div_cardInfo.appendChild(child);
  });

  /*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info"> ... </div>
    </div>
  */
  [tag_img_, div_cardInfo].forEach((child) => {
    div_card.appendChild(child);
  });

  // console.log(`line 176, div_card = `, div_card);

  //==========================================================================
  //Step 3 - return tag
  //==========================================================================
  return div_card;
}

/**
 * create a html tag
 * @param {type, textContent, classArray, src, href} param0
 * @returns
 */
function helper_create_tag({ type, textContent, classArray, src, href }) {
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
function helper_create_UserCard_and_add_to_DOM(user_object) {
  //create a user card
  const my_card = Create_User_Card(user_object);
  // console.log(`create_UserCard_and_add_to_DOM - my_card = `, my_card);

  //add to DOM tree
  const div_cards = document.querySelector(".cards");
  div_cards.appendChild(my_card);
} //end helper_create_UserCard_and_add_to_DOM

//=========================================================================
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell

  const API_URL = "https://api.github.com/users/";
  const my_username = "beefybroccoli";
*/
["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"].forEach(
  (each_userName) => {
    axios
      .get(API_URL + each_userName)
      .then((response) => {
        helper_create_UserCard_and_add_to_DOM(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
