// JAVASCRIPT FEATURE #1 - ENTRY MODAL WINDOW

// As soon as the page loads, display the entry modal window
window.addEventListener('load', function() {
  let meb = document.querySelector('.modal_entry_back');
  meb.style.display = "block";
});

// When the user clicks on the "I agree" button, close the modal window
let agree = document.querySelector('#close_modal');
agree.addEventListener('click', function(e) {
  e.preventDefault();
  let meb = document.querySelector('.modal_entry_back');
  meb.style.display = "none";
});

// JAVASCRIPT FEATURE #2 - SEARCH

// handle search section

/*
   Define function that alters CSS properties that affect
   how the search results are displayed
*/
function displayResults(height1, height2, htmlData) {
  // show the search results <div>
  document.querySelector('.search_btm').style.display = "block";
  // adjust CSS height property of HTML elements
  // where the results will be displayed
  document.querySelector('.search').style.height = `${height1}`;
  document.querySelector('.search_btm').style.height = `${height2}`;
  document.querySelector('.results').style.height = `${height2}`;
  // HTML containing the search results to be displayed
  document.querySelector('.results').innerHTML = `${htmlData}`;
}

// add form element as event object
let search = document.querySelector('.form1');

// Add an event listener to the form element
// the following function is called when the user
// searches for a term and then clicks the submit button
search.addEventListener('submit', function(e) {
  e.preventDefault();
  // store user-entered value into variable
  let terms = document.querySelector('.input1').value;
  // did the user submit an empty form?
  if (terms == '') {
    let text = 'Your search was empty.<br>Please try again!';
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == 'Super Mario RPG' || terms == 'super mario rpg') {
    let text = `${terms} is available!<br><a href="#modalWindow1" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == "Yoshi's Island" || terms == "yoshi's island") {
    let text = `${terms} is available!<br><a href="#modalWindow2" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == 'Donkey Kong Country' || terms == 'donkey kong country') {
    let text = `${terms} is available!<br><a href="#modalWindow3" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == "Luigi's Mansion" || terms == "luigi's mansion") {
    let text = `${terms} is available!<br><a href="#modalWindow4" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == 'Super Smash Bros: Melee' || terms == 'super smash bros: melee') {
    let text = `${terms} is available!<br><a href="#modalWindow5" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // there's a match from the search
  else if (terms == 'Super Mario Sunshine' || terms == 'super mario sunshine') {
    let text = `${terms} is available!<br><a href="#modalWindow6" style="color:black;text-decoration:none">ADD TO CART</a>`;
    displayResults('100px', '50px', text);
  }
  // search doesn't match any of our products
  else {
    let text = `${terms} cannot be found! <br>
                        Please try searching for one of the following products:<br><br>
                        Super Mario RPG<br>
                        Yoshi's Island<br>
                        Donkey Kong Country<br>
                        Luigi's Mansion<br>
                        Super Smash Bros: Melee<br>
                        Super Mario Sunshine`;
    displayResults('250px', '200px', text);
  }
});
