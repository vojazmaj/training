// function is called when jquery is loaded into the DOM
(function ($) {

  // select submit button element using jquery
  $('#submitButton')
  // add click event listener that will call validateForm function
      .click(validateForm);


  // add on change event listener to country selected element
  $('#countrySelect').change(countrySelected);

  // add keyup event listener to text area
  $('#bioInput').keyup(textareaCounter);


  var countryCities = {
    usa: {
      was: "Washington",
      ny: "New York",
    },
    can: {
      ont: 'Ontario',
      van: 'Vancouver',
    },
    arg: {
      ba: 'Buenos Aires',
      co: 'Cordoba',
    },
    fr: {
      par: 'Paris',
      mar: 'Marseile',
    },
    ger: {
      ber: 'Berlin',
      mun: 'Munich',
    },
    ser: {
      bg: 'Belgrade',
      ns: 'Novi sad',
    },
    rus: {
      mos: 'Moscow',
      sp: 'Saint Petersburg',
    },
    chi: {
      bej: "Beijing",
      hk: "Hong kong",
    },
    jap: {
      tok: 'Tokyo',
      os: 'Osaka',
    },
    aus: {
      syd: 'Sydney',
      cam: 'Canberra',
    }
  };

  function validateForm(event) {


    //prevent submitting, dual logic instead
    event.preventDefault();

    // get element that is used as a container for error msgs
    var errorMessagesContainer = $('#errorMessages');

    //empty error msg container so that we can add new messages
    errorMessagesContainer.html('');

    //TODO prebaciti u objekat tako da izgleda ovako:

    var formVariables = {
      firstName: {
        field: $('#firstNameInput'),
        label: 'First Name'
      },
      lastName: {
        field: $('#lastNameInput'),
        label: 'Last name'
      },
      country: {
        field: $('#countrySelect'),
        label: 'Country'
      },
      cities: {
        field: $('#citySelect'),
        label: "City"
      },
      email: {
        field: $('#emailField'),
        label: 'E-mail'
      },
      phone: {
        field: $('#phoneInput'),
        label: 'Phone',
      },
      password: {
        field: $('#passwordInput'),
        label: 'Password',
      },
      gender: {
        field: $('input[name="genderCheckBox"]'),
        label: 'Gender',
      },
      biography: {
        field: $('#bioInput'),
        label: 'Biography',
      },
      termsAccepted: {
        field: $('#termsAndConditions'),
        label: 'Terms and conditions',
      }
    };


    // create empty array used for error messages
    var errorMessages = [];


    // First Name
    // check min length for first name
    //TODO posle upotrebe objekta za cuvanje variabli, pristupiti im ovako formVariables.firstName
    if (checkMinLength(formVariables.firstName.field.val(), 2) === false) {
      // add error message to array
      errorMessages.push('First Name minimum length should be 2 characters.');
    }

    // check max length for first name
    if (checkMaxLength(formVariables.firstName.field.val(), 20) === false) {
      // add error message to array
      errorMessages.push('First Name maximum length should be 20 characters.');
    }

    // make sure input contains letters only
    if (!letterOnlyWords(formVariables.firstName.field.val())) {

      // append new error message
      errorMessages.push('First name does not contain just letters.');
    }

    // capitalise first letter of first name
    formVariables.firstName.field.val(capitaliseFirstLetter(formVariables.firstName.field.val()));


    // Last Name
    // check min length for last name
    if (checkMinLength(formVariables.lastName.field.val(), 2) === false) {
      // add error message to array
      errorMessages.push('Last Name minimum length should be 2 characters.');
    }

    // check max length for last name
    if (checkMaxLength(formVariables.lastName.field.val(), 20) === false) {
      // add error message to array
      errorMessages.push('Last Name maximum length should be 20 characters.');
    }

    // make sure input contains letters only
    if (!letterOnlyWords(formVariables.lastName.field.val())) {

      // append new error message
      errorMessages.push('Last name does not contain just letters.');
    }

    // capitalise first letter of last name
    formVariables.lastName.field.val(capitaliseFirstLetter(formVariables.lastName.field.val()));

    // Country
    // check if option is selected
    if (!formVariables.country.field.val()) {

      // add new error message
      errorMessages.push('Country must be selected');
    }

    // Cities
    // check if city is selected
    if (!formVariables.cities.field.val()) {

      // add error message
      errorMessages.push('City is not selected.');
    }

    // Email
    // check if email is valid
    if (!validateEmailAddress(formVariables.email.field.val())) {

      //add error message
      errorMessages.push('Email address is not valid.');
    }

    // Phone number
    // check min length
    if (!checkMinLength(formVariables.phone.field.val(), 10)) {

      //add error message
      errorMessages.push('Phone number must contain minimum 10 numbers');
    }

    // make sure input contains numbers only
    if (!numberOnlyInput(formVariables.phone.field.val())) {

      // add error message
      errorMessages.push('Phone number must contain numbers only');
    }


    // Password
    // check min length for password
    if (checkMinLength(formVariables.password.field.val(), 8) === false) {
      // add error message to array
      errorMessages.push('Password minimum length should be 8 characters.');
    }


    // Gender
    // Check if gender is selected
    if (!checkIfGenderIsSelected(formVariables.gender.field)) {

      // add error message to array
      errorMessages.push('Gender must be checked.');

    }

    // Biography
    // check the length of biography text
    if (checkMaxLength(formVariables.biography.field.val(), 160) === false) {

      // add error message to array
      errorMessages.push('Your biography is too long!');
    }

// Terms and conditions
// check if terms are accepted
    if (!formVariables.termsAccepted.field[0].checked) {

      // add error message to array
      errorMessages.push('Terms and conditions must be accepted.');
    }


// make sure that there is an error message
    if (errorMessages.length > 0) {

      // create div element used as error message
      var errorAlert = $('<div>');

      //add classes to error div
      errorAlert.addClass('alert');
      errorAlert.addClass('alert-danger');

      //add role attribute to error div
      errorAlert.prop('role', 'alert');

      // go through all error messages
      for (var i = 0; i < errorMessages.length; i++) {

        //copy alert element
        var tempAlertElement = errorAlert.clone();

        //add error msg to error element
        tempAlertElement.text(errorMessages[i]);

        //add error element to container
        errorMessagesContainer.append(tempAlertElement);

      }

    }
    else {

      // get title element
      var $modalTitle = $('#exampleModalLongTitle');

      // get body element
      var $modalBody = $('#modalBody');

      // set title text
      $modalTitle.text('Congrads!');

      // get table body
      var $modalTableBody = $('#modalTableBody');

      //go trough all fields
      $.each(formVariables, function (index, fieldVariable) {

        // create table row element
        var $tableRow = $('<tr>');

        // create table column element
        var $fieldValTableColumn = $("<td>");

        // create another table column element
        var $labelTableColumn = $("<td>");

        // put field value into created column
        $fieldValTableColumn.text(fieldVariable.field.val());

        // put label into created column
        $labelTableColumn.text(fieldVariable.label);

        // put both columns into row
        $tableRow.append($labelTableColumn).append($fieldValTableColumn);

        // put row into table body
        $modalTableBody.append($tableRow);
      })

// display modal
      $('#exampleModalLong').modal('show');
    }
  }

  /**
   * Triggered when country is selected
   *
   * @param countrySelectElement
   */
  function countrySelected(countrySelectElement) {

    //get selected value
    var selectedCountry = $(countrySelectElement.currentTarget).val();

    // get container element, the one that we hide/show
    var cityDropDownContainerElement = $('#citySelectContainer');

    // get city drop down element
    var cityDropDownElement = $('#citySelect');

    // reset city drop down value
    cityDropDownElement.val('');

    // remove existing options from drop down
    cityDropDownElement.html('');

    // add hidden class
    cityDropDownContainerElement.addClass('hidden-xl-down');

    //check if selected value is valid
    if (!selectedCountry) {

      // exit function
      return;
    }

    // check if we have selected country on our country-city list
    if (!countryCities[selectedCountry]) {

      //exit function
      return;
    }

    // option element used as blueprint for other options
    var optionElementTemplate = $('<option>');

    // clone option template element
    var defaultOption = optionElementTemplate.clone();

    // set value attribute
    defaultOption.prop('value', '');

    // set as disabled
    defaultOption.prop('disabled', 'disabled');

    // set as selected
    defaultOption.prop('selected', 'selected');

    // set text
    defaultOption.text('Choose City');

    // insert default drop down element
    cityDropDownElement.append(defaultOption);


    // go trough all cities for selected country
    $.each(countryCities[selectedCountry], function (index, value) {

      // clone element
      var tempOptionElement = optionElementTemplate.clone();

      // get name of the city
      var cityName = value;

      // set city name to be option text
      tempOptionElement.text(cityName);

      //set value for option element
      tempOptionElement.prop('value', index);

      // add option to city drop down
      cityDropDownElement.append(tempOptionElement);

    });


    // remove hidden class
    cityDropDownContainerElement.removeClass('hidden-xl-down');

  }


  /**
   * Uppers the first letter in the word and returns the word
   *
   * @param word
   * @returns {*}
   */
  function capitaliseFirstLetter(word) {

    // make sure that has zero characters
    if (word.length == 0) {

      // return string
      return word;
    }

    // returns capitalized string
    return word[0].toUpperCase() + word.slice(1);
  }

  /**
   * Test if passed word contains letters only
   *
   * @param text
   * @returns {boolean}
   */
  function letterOnlyWords(text) {

    // define regular expression
    var checkStringRegex = /^[a-zA-Z]+$/;

    // make sure that test is passed
    if (checkStringRegex.test(text)) {

      // return true
      return true;
    }

    //return false
    return false;
  }

  /**
   * Test if value contains numbers only
   *
   * @param number
   * @returns {boolean}
   */
  function numberOnlyInput(number) {

    // define regular expression
    var checkNumberRegex = /^\d+$/;

    //make sure that test is passed
    if (checkNumberRegex.test(number)) {

      //return true
      return true;
    }

    //return false
    return false;
  }

  /**
   * Check if value is above minimal length
   *
   * @param value
   * @param minLength
   * @returns {boolean}
   */
  function checkMinLength(value, minLength) {

    //check if our value is less than minimal length
    if (value.length < minLength) {

      //return false if check was not passed
      return false;
    }
    //return true if check is passed
    return true;

  }

  /**
   * check if value is under maximal length
   * @param value
   * @param maxLength
   * @returns {boolean}
   */
  function checkMaxLength(value, maxLength) {

//check if our value is longer than maximal
    if (value.length > maxLength) {

      //return false if check was not passed
      return false;
    }
//return true if check is passed
    return true;

  }

  function checkForCapitalLetter(value) {

    // Shorter way
    // return value[0] === value[0].toUpperCase();

    //Longer way
    // check if first letter is uppercase version of himself
    if (value[0] === value[0].toUpperCase()) {
      // in that case return true
      return true;
    }
    else {
      // otherwise return false
      return false;
    }

  }

  /**
   * check if email address is in valid format
   * @param email
   * @returns {boolean}
   */
  function validateEmailAddress(email) {

    //create regex for email testing
    var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    // test regexp
    return regExp.test(email);

  }

  /**
   * Check if radio button is selected
   * @param genderRadioButtonElements
   * @returns {boolean}
   */
  function checkIfGenderIsSelected(genderRadioButtonElements) {

    // set flag that will be used to indicate if one of the radio buttons is selected
    var isChecked = false;


    // go trough all radio buttons
    for (var i = 0; i < genderRadioButtonElements.length; i++) {

      // current radio element
      var genderElement = genderRadioButtonElements[i];

      // check if current element is checked
      if (genderElement.checked) {

        // set flag to checked
        isChecked = true;

        // break out of current iteration
        break;
      }

    }

    // return flag
    return isChecked;
  }


  /**
   * Check how many characters is in the text area
   * @param bio
   */
  function textareaCounter(bio) {

    // get counter element
    var counter = $('#counter');

    var textareaValue = $(bio.currentTarget).val();

    // add character number to counter
    counter.html(textareaValue.length + '/160');

    // check if number of characters is over 160
    if (textareaValue.length > 160) {

      //if so, make counter red
      counter.css('color', 'red');

    }
    // if not make it black
    else counter.css('color', 'black');

  }


})
(jQuery);

