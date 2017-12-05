/**
 * Ucitati persons.json file i za svaku osobu u fajlu ispisati njene podatke.
 */
$.getJSON("json/persons.json", function (persons) {
  //TODO go trough

  // person counter: var personCounter = 0;
  //example of for : for(var i=0;i<persons.length;i++){ personCounter++; var currentPersonObject = persons[i]; currentPersonObject.image }

  // create person counter
  var personCounter = 0;

  // create row element
  var rowElement = $('<div class="row"></div>');

  // create container
  var container = $('.container');

  // iterate trough every object in json
  $.each(persons, function (index, person) {

    //check if counter reached 3
    if (personCounter === 3) {


      // append rowElement to container
      container.append(rowElement);

      // when current row element is appended create new rowElement
      rowElement = $('<div class="row"></div>');

      //reset counter
      personCounter = 0;
    }

    // create column for cards
    var $column = $('<div class="col-sm-4">');

    // create new person card based on provided html
    var $personCard = $('<div class="card">');

    // create image div
    var $personImage = $('<img>');

    // create card block div
    var $cardBlock = $('<div class="card-block">');

    // create card title
    var $cardTitle = $('<h4 class="card-title">');

    // create div for card text
    var $cardText = $('<div class="card-text">');

    // create email paragraph
    var $email = $('<p>');

    // create gender paragraph
    var $gender = $('<p>');

    // create ip address paragraph
    var $ipAddress = $('<p>');

    // add person card to column
    $column.append($personCard);

    // add card block and person image to person card
    $personCard.append($personImage).append($cardBlock);

    // add card title and card text to card block
    $cardBlock.append($cardTitle).append($cardText);

    // add email, gender and ip address to card text
    $cardText.append($email).append($gender).append($ipAddress);

    // get image from json
    $personImage.prop('src', person.image);

    // get first and last name from json
    $cardTitle.text(person.first_name + ' ' + person.last_name);

    // get email from json
    $email.text(person.email);

    // get gender from json
    $gender.text(person.gender);

    // get ip address from json
    $ipAddress.text(person.ip_address);

    // add that card to rowElement
    rowElement.append($column);

    // increment person counter by 1
    personCounter++;
  })

  // check if there are elements in row
  if (rowElement.has('div')) {

    // if it has append that row to container
    container.append(rowElement);
  }

  // person counter: var personCounter = 0;
  // var rowElement = $('<div class="row"></div>');
  //example of each : $.each(persons, function(index, person){
  //
  // // current person
  // var currentPersonObject = person;
  //
  // //returns image
  // currentPersonObject.image
  //
  // //check if counter reached 3
  // if(counter == 3){
  // // append rowElement to container
  // // when current row element is appended create new rowElement
  // rowElement = $('<div class="row"></div>');
  // }
  //
  // // create new person card based on provided html
  // // add that card to rowElement
  //
  //counter++
  // })
  // // check if there are elements in row
  // rowElement.has('div')
  // // if it has append that row to container

});