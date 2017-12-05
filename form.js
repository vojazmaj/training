// function is called when jquery is loaded into the DOM
(function ($) {

    $.getJSON("json/person_fields.json", function (personFields) {

        $.each(personFields, function (fieldKey, fieldValue) {

            switch (fieldValue.field.type) {

                case "text":
                    // call function that will process the text input type
                    renderTextField(fieldValue);
                    break;
                case "select":
                    // call function that will process the select type
                    renderSelectField(fieldValue, personFields);
                    break;
                case "password":
                    // call function that will process the password input type
                    renderPasswordField(fieldValue);
                    break;
                case "radio":
                    // call function that will process the radio input type
                    renderRadioButtonsField(fieldValue);
                    break;
                case "textarea":
                    // call function that will process the text area input type
                    renderTextAreaField(fieldValue);
                    break;
                case "checkbox":
                    // call function that will process the checkbox input type
                    renderCheckboxField(fieldValue);
                    break;

            }

        })
    });


    /** TEXT FIELD ROW
     * <div class="row">
     <div class="col">
     <div class="form-group">
     <label for="firstNameInput">First name</label>
     <input type="text" class="form-control" id="firstNameInput" placeholder="Ex. John" name="firstNameInput">
     </div>
     </div>
     </div>
     */

    // get field column container
    var $fieldColumnContainer = $('#fieldColumnContainer');

    /**
     * Creates input type text DOM element
     * @param fieldObject
     */
    function renderTextField(fieldObject) {

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // create form group element
        var $formGroup = $('<div class="form-group">');

        // create label element
        var $labelElement = $('<label for="' + fieldObject.field.id + '">' + fieldObject.label + '</label>');

        // create input element
        var $inputElement = $('<input type="' + fieldObject.field.type + '" class="' + fieldObject.field.class + '" id="' + fieldObject.field.id + '" placeholder="' + fieldObject.field.placeholder + '">');

        // put row element into field column container
        $fieldColumnContainer.append($rowElement);

        // put column element ino row element
        $rowElement.append($colElement);

        // put form group into column element
        $colElement.append($formGroup);

        // put label and input element into form group
        $formGroup.append($labelElement).append($inputElement);
    }

    /**
     * Creates input type password DOM element
     * @param fieldObject
     */
    function renderPasswordField(fieldObject) {

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // create form group element
        var $formGroup = $('<div class="form-group">');

        // create label element
        var $labelElement = $('<label style="color:white" for="' + fieldObject.field.id + '">' + fieldObject.label + '</label>');

        // create input element
        var $inputElement = $('<input type="' + fieldObject.field.type + '" class="' + fieldObject.field.class + '" id="' + fieldObject.field.id + '" placeholder="' + fieldObject.field.placeholder + '">');

        // put row element into field column container
        $fieldColumnContainer.append($rowElement);

        // put column element ino row element
        $rowElement.append($colElement);

        // put form group into column element
        $colElement.append($formGroup);

        // put label and input element into form group
        $formGroup.append($labelElement).append($inputElement);
    }

    /**
     * Creates radio buttons DOM elements
     * @param fieldObject
     */
    function renderRadioButtonsField(fieldObject) {

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // add row element to field container
        $fieldColumnContainer.append($rowElement);

        // add column element to row
        $rowElement.append($colElement);

        // add label to column element
        $colElement.append($('<div>').text(fieldObject.label));

        // iterate trough options
        $.each(fieldObject.options, function (key, label) {

            // create div container for radio buttons
            var $radioButtonContainer = $('<div class="form-check form-check-inline">');

            // create label element
            var $label = $('<label style="color:white" class="' + fieldObject.labelClass + '">');

            // add label element to radio button container
            $radioButtonContainer.append($label);

            // create input element
            var $radioButtonElement = $('<input class="' + fieldObject.field.class + '" type="' + fieldObject.field.type + '" name="' + fieldObject.field.name + '" value="' + key + '">');

            // add input element to label
            $label.append($radioButtonElement);

            // get label from json
            $label.append(' ' + label);

            // add label to column
            $colElement.append($radioButtonContainer);

        })


    }

    /**
     * Creates input type checkbox DOM element
     * @param fieldObject
     */
    function renderCheckboxField(fieldObject) {

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // create form group element
        var $formCheck = $('<div class="form-check">');

        // create label element
        var $labelElement = $('<label style="color:white" class="' + fieldObject.labelClass + '"></label>');

        // create input element
        var $inputElement = $('<input type="' + fieldObject.field.type + '" class="' + fieldObject.field.class + '" id="' + fieldObject.field.id + '">');

        // put row element into field column container
        $fieldColumnContainer.append($rowElement);

        // put column element ino row element
        $rowElement.append($colElement);

        // put form group into column element
        $colElement.append($formCheck);

        // put label and input element into form group
        $formCheck.append($labelElement);

        // put input element into label element
        $labelElement.append($inputElement);

        // append description to label element
        $labelElement.append(' ' + fieldObject.label);
    }

    /**
     * Creates textarea DOM element
     * @param fieldObject
     */
    function renderTextAreaField(fieldObject) {

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // create label element
        var $labelElement = $('<label style="color:white" for="' + fieldObject.field.id + '">' + fieldObject.label + '</label>');

        // create row element
        var $divElement = $('<div>');

        // create text area element
        var $textareaElement = $('<textarea style="background-color:transparent" id="' + fieldObject.field.id + '" cols="' + fieldObject.field.cols + '" rows="' + fieldObject.field.rows + '">');

        // crate paragraph element
        var $paragraphElement = $('<p style="color:white" id="' + fieldObject.counterId + '">0/' + fieldObject.validation.counter + '</p>');

        // put row element into field column container
        $fieldColumnContainer.append($rowElement);

        // put column element ino row element
        $rowElement.append($colElement);

        // put label and div element into column element
        $colElement.append($labelElement).append($divElement);

        // put text area and paragraph element into div element
        $divElement.append($textareaElement).append($paragraphElement);

        // check if this field needs counter validation
        if (fieldObject.validation.counter) {
            $('#' + fieldObject.field.id).on('keyup', function (event) {

                // get context of text area
                var textAreaValue = event.currentTarget.value;

                // check if text length is longer than allowed
                if (textAreaValue.length > this.fieldObject.validation.counter) {

                    // add class that will make text red
                    this.$paragraphElement.addClass('text-danger');

                }
                else {
                    // remove class that makes text red
                    this.$paragraphElement.removeClass('text-danger');
                }

                // display current length of text in text area
                this.$paragraphElement.text(textAreaValue.length + '/' + this.fieldObject.validation.counter);

            }.bind({ fieldObject: fieldObject, $paragraphElement: $paragraphElement }))// set context of the callback to have field object and paragraph element available 
        }
    }

    /**
     * Creates select DOM element
     * @param fieldObject
     */
    function renderSelectField(fieldObject, personFields) {

        // create object that will be used as a context in change event
        var obj = { dependentFieldObjectRef: fieldObject, personFieldsRef: personFields };

        // create row element
        var $rowElement = $('<div class="row">');

        // create column element
        var $colElement = $('<div class="col">');

        // create form group element
        var $formGroup = $('<div class="form-group">');

        // create label element
        var $labelElement = $('<label style="color:white" for="' + fieldObject.field.id + '">' + fieldObject.label + '</label>');

        // create select element
        var $selectElement = $('<select class="' + fieldObject.field.class + '" id="' + fieldObject.field.id + '">');

        // flag for first iteration
        var firstIteration = true;

        // go trough all options
        $.each(fieldObject.options, function (key, label) {

            // check if it is the first iteration
            if (firstIteration) {

                // add option to select element
                $selectElement.append($('<option disabled selected>' + fieldObject.field.placeholder + '</option>'));

                // set flag to false
                firstIteration = false;
            }

            // check if field object is not depending on other field
            if (!fieldObject.dependingOn) {

                // add option to select element
                $selectElement.append($('<option value="' + key + '">' + label + '</option>'));
            }

        });

        // check if field object is depending on other field
        if (fieldObject.dependingOn) {

            // add class that hides element to row
            $rowElement.addClass('hidden-xl-down');

            // set id to row element
            $rowElement.prop('id', fieldObject.containerId);

            // get field configuration of field we are depending on
            var parentSelectElement = personFields[fieldObject.dependingOn];

            // add change event listener to parent element
            $('#' + parentSelectElement.field.id).change(function (event) {

                // get selected value
                var selectedValue = event.currentTarget.value || '';

                // clear options from dependent element
                $('#' + this.dependentFieldObjectRef.field.id).html('');

                // make sure that value is selected, or that we have options for the selected value
                if (!selectedValue || !this.dependentFieldObjectRef.options[selectedValue]) {

                    // add class that hides dependent element
                    $('#' + this.dependentFieldObjectRef.containerId).addClass('hidden-xl-down');

                    return;
                }

                // flag for first iteration
                var firstIteration = true;

                // go trough all options based on selected value
                $.each(this.dependentFieldObjectRef.options[selectedValue], function (key, label) {

                    // check if it is the first iteration
                    if (firstIteration) {

                        // add option to select element
                        $('#' + this.dependentFieldObjectRef.field.id).append($('<option disabled selected>' + this.dependentFieldObjectRef.field.placeholder + '</option>'));

                        // set flag to false
                        firstIteration = false;
                    }

                    // add option element to dependent field
                    $('#' + this.dependentFieldObjectRef.field.id).append('<option value="' + key + '">' + label + '</option>')

                }.bind(this)); // use this as context, obj in this case

                // remove class that hides dependent element
                $('#' + this.dependentFieldObjectRef.containerId).removeClass('hidden-xl-down');


            }.bind(obj)); // use obj as context

        }

        // put row element into field column container
        $fieldColumnContainer.append($rowElement);

        // put column element ino row element
        $rowElement.append($colElement);

        // put form group into column element
        $colElement.append($formGroup);

        // put label and select element into form group
        $formGroup.append($labelElement).append($selectElement);
    };

    // event listener for click on submit button
    $('#submitButton').click(function (event) {

        // prevent from submitting form
        event.preventDefault();

        // use ajax to fetch json with all fields 
        $.ajax({
            url: "json/person_fields.json",
            dataType: 'json'
        }).done(function (fields) {// called when data is fetched 

            // initialize variable that will hold all field values
            var formValues = {};

            // initialize variable that will hold all error messages
            var validationErrors = [];

            // iterate trough all fields in json
            $.each(fields, function (fieldName, fieldObject) {

                // DOHVATITI VREDNOSTI SVAKOG POLJA


                // do proper logic for each field type
                switch (fieldObject.field.type) {

                    case 'text':
                    case 'password':
                    case 'textarea':
                    case 'select':
                        // get field value by field id
                        formValues[fieldName] = $('#' + fieldObject.field.id).val();
                        break;
                    case 'checkbox':
                        // get field value by field id
                        formValues[fieldName] = $('#' + fieldObject.field.id).prop('checked');
                        break;
                    case 'radio':
                        // get field value by field name
                        formValues[fieldName] = $('input[name="' + fieldObject.field.name + '"]:checked').val() || null;
                        break;
                    default:
                        break;

                }

            });



            // iterate trough all field values
            $.each(formValues, function (fieldName, fieldValue) {

                // get definition for the field
                var fieldDef = fields[fieldName];

                // check if field has validation
                if (!fieldDef.validation) {

                    // TODO if there is no validation check for any value
                    if (!fieldValue){

                        // add error message to container
                        validationErrors.push(fieldDef.label + ' is required!');
                    }

                    return;

                }

                // iterate trough all validation rules for current field
                $.each(fieldDef.validation, function (validationRule, validationRequirement) {

                    switch (validationRule) {

                        case "min":
                            !checkMinLength(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' is not long enough!') : false;
                            break;
                        case "counter":
                        case "max":
                            !checkMaxLength(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' is too long!') : false;
                            break;

                        case "lettersOnly":
                            !letterOnlyWords(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' must be letters only!') : false;
                            break;

                        case "firstLetterCapital":
                            !firstLetterUp(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' must start with the capital!') : false;
                            break;

                        case "numbersOnly":
                            !numberOnlyInput(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' must be numbers only!') : false;
                            break;

                        case "validEmail":
                            !emailForm(fieldValue, validationRequirement) ? validationErrors.push(fieldDef.label + ' must be in right form!') : false;
                            break;



                    }


                })


            });

            // create container for error messages
            var $errorMessagesContainer = $('#errorMessages');

            // create div element used as error message
            var errorAlert = $('<div>');

            //add classes to error div
            errorAlert.addClass('alert');
            errorAlert.addClass('alert-danger');

            //add role attribute to error div
            errorAlert.prop('role', 'alert');

            for (var i = 0; i < validationErrors.length; i++) {

                //copy alert element
                var tempAlertElement = errorAlert.clone();

                //add error msg to error element
                tempAlertElement.text(validationErrors[i]);

                //add error element to container
                $errorMessagesContainer.append(tempAlertElement);
            }


        });

        /**
         * // check if we have minimal amount of characters
         * @param {*} value 
         * @param {*} minLength 
         */
        function checkMinLength(value, minLength) {

            //var conditionPassed = condition ? true : false;

            // use ternary operator to check our min length
            return value.length < minLength ? false : true;
        }


        /**
         *  check if we have reached maximal amount of characters
         * @param {*} value 
         * @param {*} maxLength 
         */
        function checkMaxLength(value, maxLength) {

            // use ternary operator to check our max length
            return value.length > maxLength ? false : true;
        }


        /**
         * check if our word contains letters only
         * @param {*} text 
         */
        function letterOnlyWords(text) {

            // define regular expression 
            var checkStringRegex = /^[a-zA-Z]+$/;

            // use ternary operator to check for letters
            return checkStringRegex.test(text) ? true : false;
        }


        /**
         * Uppers the first letter in the word
         * @param {*} word 
         */
        function firstLetterUp(word) {

            // check if first letter is capital
            if (/^[A-Z]/.test(word[0])) {

                // if so return true
                return true;
            }

            // if not return false
            return false;
        }


        /**
         * check if input contains numbers only
         * @param {*} number 
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
         * check if email input is in correct form
         * @param {*} email 
         */
        function emailForm(email) {

            //create regex for email testing
            var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            // test regexp
            return regExp.test(email);

        }



    });



})
    (jQuery);