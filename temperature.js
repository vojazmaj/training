// function is called when jquery is loaded into the DOM
(function ($) {


    // add function on click 
    $('#submitButton').click(function (event) {


        // prevent from doing default
        event.preventDefault();

        // make object that will contain days of the week
        var daysOfWeek = { mon: "Monday", tue: "Tuesday", wen: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };

        // create empty object
        var daysObj = {};

        // go trough our list of fields
        $.each(daysOfWeek, function (key, label) {

            // add necessary data to object
            daysObj[key] = { label: label, max: parseInt($('#' + key + 'MaxTemp').val()), min: parseInt($('#' + key + 'MinTemp').val()) }

        });

        // create empty object for minimal temp
        var minTemp = {}, firstIteration = true;

        // iterate trough days
        $.each(daysObj, function (key, value) {

            // check if it is first iteration
            if (firstIteration) {

                // set value of minimal temperature
                minTemp.temperature = value.min;

                // set the day 
                minTemp.day = value.label;

                firstIteration = false;

                return;
            }


            // check if value is smaller than minimal
            if (value.min < minTemp.temperature) {

                // set new minimal temp
                minTemp.temperature = value.min;

                // set the day of minimal temperature
                minTemp.day = value.label;
            }

        });

        // add text message to alert
        $("#min-desc").text("The coldest day of the week was " + minTemp.day + " with " + minTemp.temperature);


        // create empty object for max temp
        var maxTemp = {}, firstIteration = true;

        // iterate trough days
        $.each(daysObj, function (key, value) {

            // check if it is first iteration
            if (firstIteration) {

                // set value of max temp
                maxTemp.temperature = value.max;

                // set day of max temp
                maxTemp.day = value.label;

                firstIteration = false;

                return;
            }


            // check if value is bigger then current max
            if (value.max > maxTemp.temperature) {

                // set new max temp
                maxTemp.temperature = value.max;

                // set max temp day
                maxTemp.day = value.label;
            }

        });


        // add message to alert
        $("#max-desc").text("The hottest day of the week was " + maxTemp.day + " with " + maxTemp.temperature);

        // create empty object for sum temperature
        var tempSum = 0;

        // iterate trough days
        $.each(daysObj, function (key, object) {
            

            // add sum of min and max to tempSum
            tempSum += object.min + object.max;

        })

        // divide temp sum and add to avg temp
        var avgTemp = tempSum/14;

        // add message to alert
        $("#avg-desc").text("Average temperature for this week was " + avgTemp.toFixed(2));

    })


})
    (jQuery);    