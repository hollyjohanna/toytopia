window.addEventListener('scroll', function() {
  let navbar = document.getElementById('nav-bar');
  let windowPosition = window.scrollY > 450;

  navbar.classList.toggle('scrolling-active', windowPosition);
})

const scrollBtn = document.getElementById("scroll-button");
const element = document.getElementById("scroll-button");

scrollBtn.onclick = function() {
    element.scrollIntoView({behavior: "smooth"});
}



const toysArray = [
  {
    id: 0,
    name: "Giraffe Soft Toy",
    toy_type: "Soft Toy",
    image_URL: "img/giraffe.jpeg",
    description: "Very soft and cuddly Giraffe soft toy from the Ecokins range by Wild Republic.",
    list: "Made in China, Made from 100% recycled materials, Surface Washable, Suitable for ages 3+, Measures 12 inch / 30cm",
    price: 26.95
  },
  {
    id: 1,
    name: "Wolf Soft Toy",
    toy_type: "Soft Toy",
    image_URL: "img/wolf.jpeg",
    description: "Soft poly fur, cute facial features and colouring mimiking the real wolf pups, this one is the cuddliest wolf plush toys around.",
    list: "Made in China, All new materials, Hand Washable, Suitable for ages 3+, Measures 12 inch / 30cm",
    price: 22.95
  },
  {
    id: 2,
    name: "Labrador Dog Soft Toy",
    toy_type: "Soft Toy",
    image_URL: "img/dog.jpeg",
    description: "Very soft and cuddly Labrador dog soft toy. Suitable for both adults and children to play with and cuddle, one of the softest toys around.",
    list: "Made in China, All new materials, Hand Washable, Suitable for ages 3+, Measures 12 inch / 30cm long from front to rear paws.",
    price: 42.95
  },
  {
    id: 3,
    name: "Chimp Hand Puppet",
    toy_type: "Puppet Toy",
    image_URL: "img/chimp.jpeg",
    description: "This beautiful Chimp hand puppet will fit both childrens and adults hands. They are extremely high quality plush animal, a great jungle friend to go on Safari adventures.",
    list: "Made in China, Hand wash only, Fully lined, Suitable for ages 3+, Measures 9 inch / 23cm tall",
    price: 14.95
  },
  {
    id: 4,
    name: "Cow Hand Puppet",
    toy_type: "Puppet Toy",
    image_URL: "img/cow.jpeg",
    description: "Cow with sound chip Hand Puppet stuffed animal.  Has sound chip inside which makes the wonderful sound of the Cow, and is a fully lined soft toy.",
    list: "Made in China, Hand wash only, Suitable for ages 3+, Measures 10 inch / 25cm tall",
    price: 15.95
  },
  {
    id: 5,
    name: "Koala Hand Puppet",
    toy_type: "Puppet Toy",
    image_URL: "img/koala.jpeg",
    description: "Minkplush use a special feather soft polyester filling and the finest quality acrylic plush to make each creation incredibly soft and huggable. All Minkplush products are child-tested for safety.",
    list: "Made in China, Machine wash only, Colour-safe, Suitable for ages 3+, Measures 10 inch / 25cm tall",
    price: 27.95
  },
  {
    id: 6,
    name: "Ticket To Ride",
    toy_type: "Game",
    image_URL: "img/ticket-to-ride.jpeg",
    description: "Ticket to Ride is a cross-country train adventure game where players collect train cards that enable them to claim railway routes connecting cities throughout North America.",
    list: "Made in China, High quality cardboard, Fast and easy, Suitable for ages 8+",
    price: 80.95
  },
  {
    id: 7,
    name: "Code Names",
    toy_type: "Game",
    image_URL: "img/code-names.jpeg",
    description: "The two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES. The teams compete to see who can make contact with all of their agents first.",
    list: "Made in China, High quality cardboard, Fast and easy, Suitable for ages 8+, 15 minute playtime",
    price: 16
  },
  {
    id: 8,
    name: "Monopoly",
    toy_type: "Game",
    image_URL: "img/monopoly.jpg",
    description: "Monopoly is a real-estate board game for two to eight players. The player's goal is to remain financially solvent while forcing opponents into bankruptcy by buying and developing pieces of property.",
    list: "Made in China, High quality cardboard, 8 Players, Suitable for ages 8+",
    price: 35
  },
  {
    id: 9,
    name: "Rainbow Dash",
    toy_type: "Hard Toy",
    image_URL: "img/rainbow.jpg",
    description: "Fun, colorful ponies with pretty hair and Cutie Mark designs. Collect the world of My Little Pony friendship is magic. Style their hair and dress them up. Discover the magic of friendship",
    list: "Made in China, Suitable for ages 3+, Measures 8 inch / 22cm tall",
    price: 15.99
  },
  {
    id: 10,
    name: "Rarity",
    toy_type: "Hard Toy",
    image_URL: "img/rarity.jpg",
    description: "Fun, colorful ponies with pretty hair and Cutie Mark designs. Collect the world of My Little Pony friendship is magic. Style their hair and dress them up. Discover the magic of friendship",
    list: "Made in China, Suitable for ages 3+, Measures 8 inch / 22cm tall",
    price: 15.99
  },
  {
    id: 11,
    name: "Pinkie pie",
    toy_type: "Hard Toy",
    image_URL: "img/pinkie-pie.jpg",
    description: "Fun, colorful ponies with pretty hair and Cutie Mark designs. Collect the world of My Little Pony friendship is magic. Style their hair and dress them up. Discover the magic of friendship",
    list: "Made in China, Suitable for ages 3+, Measures 8 inch / 22cm tall",
    price: 14.99
  }
];

const result = document.getElementById('result');
showAllToys();

function showAllToys(){
  for (let i = 0; i < toysArray.length; i++) {
    generateToy(i);
    //<p>${toysArray[i].description}</p> taken out from space above
  }
}

//------------------------------FILTER MODAL---------------------------------------

const filterModalBtn = document.getElementById('filter-modal-button');
const filterModal = document.getElementById('filter-modal');
const closeFilterModalBtn = document.getElementById('filter-close-button');

filterModalBtn.onclick = function() {
  filterModal.classList.toggle("active");
}

closeFilterModalBtn.onclick = function(){
  filterModal.classList.toggle("active");
}

//------------------------------MODAL---------------------------------------

let modalBtnsArray = document.getElementsByClassName("modal-button");
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById('close-button');
const result2 = document.getElementById('result-2');
const body = document.querySelector('body');

generateButtons();

closeBtn.onclick = function (){
  closeModal()
}

function openModal(currentBtnId) {
  // console.log(toysArray[currentBtnId].price);
  // update the price element with our price from the toy ID

  result2.innerHTML = `
  <div class="modal-content-wrapper">
    <h3>Product Information</h3>
    <h3 id="modal-heading">${toysArray[currentBtnId].name}</h3>
    <div id="modal-flex-container">
        <img class="modal-img" src="${toysArray[currentBtnId].image_URL}" alt="${toysArray[currentBtnId].name}">
      <div id="modal-main-text">
        <p id="price">$${toysArray[currentBtnId].price}</p>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        <p id="description-text">${toysArray[currentBtnId].description}</p>
        <p id="description-text">${toysArray[currentBtnId].list}</p>
      </div>
    </div>
    <div id="modal-icons">
      <i class="bi bi-heart-fill"></i>
      <i class="bi bi-emoji-smile-fill"></i>
      <i class="bi bi-hand-thumbs-up-fill"></i>
    </div>
    <a class="buy-button">Buy Now!</a>
  </div>
  `;

  modalOverlay.classList.toggle("active");
  //----------stop body from scrolling when modal open-----------
  // if (modalOverlay.classList.contains("active")) {
  //              // Disable scroll
  //              body.style.overflow = "hidden";
  // }

// modal content fade in function toggle class list INSIDE the function
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn (){
  modalContent.classList.toggle("active");
  }
}

function closeModal() {
  modalContent.classList.toggle("active");
  let delayAnimation = setTimeout(fadeOut, 300);
  function fadeOut(){
    modalOverlay.classList.toggle("active");
  }
}

function generateButtons(){
  for (let i = 0; i < modalBtnsArray.length; i++) {
    // show the individual button
    // i is something that counts upwards i is going 0, 1, 2, 3, 4, slowly incrementing thing
    // console.log(modalBtnsArray[i]);
    modalBtnsArray[i].onclick = function (){
      // console.log("you clicked on a button");
      //put the buttons id into a variable
      let currentBtnId = this.id;
      openModal(currentBtnId);
    }
  }
}


//----------------------------SEARCH FUNCTION--------------------------------
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const notifications = document.getElementById('notifications');
let toyFound;

searchBtn.onclick = function() {
  filterSearchWord();
}

function filterSearchWord(){
  let searchString = searchInput.value;
  if (searchString == ""){
    notifications.innerHTML = `
    <div class="alert">Please enter a search term...</div>
    `;
    result.innerHTML = "";
    showAllToys();
  } else {
    runSearch(searchString);
  }
}

function runSearch(searchString){
  // toy is not found by default, only gets turned on if there's a match
  toyFound = false;
  let toysFoundNumber = 0;
  // console.log("you ran a search");
  result.innerHTML = "";
    // loop through All the toys
    for (let i = 0; i < toysArray.length; i++) {
      let lowercaseSearchString = searchString.toLowerCase();
      // turn each iteration of a toy name into a variable that is lowercase
      let lowercaseToyName = toysArray[i].name.toLowerCase();
      let lowercaseToyType = toysArray[i].toy_type.toLowerCase();
      let lowercaseToyDescription = toysArray[i].description.toLowerCase();
      //decare a variable called match it will become true id the toy name includes anything within the search term
      let match1 = lowercaseToyName.includes(lowercaseSearchString);
      let match2 = lowercaseToyType.includes(lowercaseSearchString);
      let match3 = lowercaseToyDescription.includes(lowercaseSearchString);
      // console.log(lowercaseToyName);
      // console.log(match);
      if (match1 == true || match2 == true || match3 == true) {
        toysFoundNumber++;
        toyFound = true;
        generateToy(i);
        if (toysFoundNumber == 1) {
          notifications.innerHTML = `
          <div class="alert">Your search term <strong>"${searchString}"</strong> returned "${toysFoundNumber}" result.</div>
          `;
        } else {
          notifications.innerHTML = `
          <div class="alert">Your search term <strong>"${searchString}"</strong> returned "${toysFoundNumber}" results.</div>
          `;
        }
      }
    }
    if (toyFound == false){
      notifications.innerHTML = `
      <div class="alert">Your search term "${searchString}" returned no results.</div>
      `;
    }
  }

function generateToy(i) {
    result.innerHTML += `
    <div class="toy-profile">
        <img src="${toysArray[i].image_URL}" alt="${toysArray[i].name}">
        <div class="content-wrapper">
          <h4>${toysArray[i].name}</h4>
          <h5>${toysArray[i].toy_type}</h5>

          <h2>$${toysArray[i].price}</h2>
          <a class="button modal-button" id="${toysArray[i].id}">Product Info <i class="bi bi-arrow-right-circle"></i></a>
        </div>
    </div>
  `;
}

//------------------------------FILTER FUNCTION--------------------------------

const filterBtn = document.getElementById('type-filter-button');
// const clearFilterBtn = document.getElementById('clear-filter-button');
//
// clearFilterBtn.onclick = function() {
//   result.innerHTML = "";
//   notifications.innerHTML = `
//   <div class="alert">Showing all toys</div>
//   `;
//   generateToy();
// }

filterBtn.onclick = function() {
  filterGenre();
  filterModal.classList.toggle("active");
}

function filterGenre() {
  // reset our list of artists - clear every single card/artist
  result.innerHTML = "";
  // grab the checked checkedBoxes - querying all the checked boxes and putting them in an array (this array is very complex which is why we create a new one below)
  let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  // console.log(checkedBoxes);

  // declare an array to contain all the checked genres to make the array cleaner and remove all the unnnecessary HTML
  const selectedToyTypes = [];

//loop looping through all the checked boxes
  for (let i = 0; i < checkedBoxes.length; i++) {
    //value checks value of the input in the HTML
    // console.log(checkedBoxes[i].value);
    //collecting and pushing the value of the input into the new array we created
    selectedToyTypes.push(checkedBoxes[i].value);
  }
  console.log(selectedToyTypes);

  //if there are no genres selected if none of the check boxes are filled run function show all artist
  if (selectedToyTypes.length == 0 ) {
    showAllToys();
    // console.log("you didnt select anything");

    //show a message if they havent selected any genres
    notifications.innerHTML = `
    <div class="alert">Showing all toys</div>
    `;

  } else {
    //otherwise show the selcted genres that have been selected
    // console.log("you have selected a genre now");
    notifications.innerHTML = "";
    notifications.innerHTML = `
    <span>Showing toy types: </span>
    `;
    for (let i = 0; i < selectedToyTypes.length; i++) {
      notifications.innerHTML += `
      <span class="alert-genre">${selectedToyTypes[i]}</span>
      `
    }
    // notifications.innerHTML = `
    // <div class="alert">Showing Genres: ${selectedGenres}</div>
    // `;

//loop over the toy types that have been selected
    for (let i = 0; i < selectedToyTypes.length; i++) {

      if (selectedToyTypes[i] == "soft") {
        // console.log("we found your search for pop");
        //loop through the artists Array and compare the genre that the user chose to the genre of each artist
        for (let i = 0; i < toysArray.length; i++) {
            if (toysArray[i].toy_type == "Soft Toy") {
              generateToy(i);
              // console.log(toysArray[i]);
            } // end if statement
        } //end loop inside loop checking all artists for genre
      } //end of if statement

      if (selectedToyTypes[i] == "puppets") {
        // console.log("we found your search for pop");
        //loop through the artists Array and compare the genre that the user chose to the genre of each artist
        for (let i = 0; i < toysArray.length; i++) {
            if (toysArray[i].toy_type == "Puppet Toy") {
              generateToy(i);
              // console.log(artistArray[i].name);
            } // end if statement
        } //end loop inside loop checking all artists for genre
      } //end of if statement

      if (selectedToyTypes[i] == "games") {
        // console.log("we found your search for pop");
        //loop through the artists Array and compare the genre that the user chose to the genre of each artist
        for (let i = 0; i < toysArray.length; i++) {
            if (toysArray[i].toy_type == "Game") {
              generateToy(i);
              // console.log(artistArray[i].name);
            } // end if statement
        } //end loop inside loop checking all artists for genre
      } //end of if statement

      if (selectedToyTypes[i] == "hard") {
        // console.log("we found your search for pop");
        //loop through the artists Array and compare the genre that the user chose to the genre of each artist
        for (let i = 0; i < toysArray.length; i++) {
            if (toysArray[i].toy_type == "Hard Toy") {
              generateToy(i);
              // console.log(artistArray[i].name);
            } // end if statement
        } //end loop inside loop checking all artists for genre
      } //end of if statement
    } //end of for loop
    modalBtnsArray = document.getElementsByClassName("modal-button");
    generateButtons();
  } //end of the else statement
} //end of filter genre function
