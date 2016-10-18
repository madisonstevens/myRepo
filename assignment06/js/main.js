

var index = 1;
var pix = ["photo1.jpg", "IMG_8676.jpg", "IMG_8340.jpg", "IMG_8225.jpg"];
var main_image = document.getElementById("nature_image");


function pic_change(s) {
    "use strict";
    if (s == 'next') {
    if (index < pix.length) {
        main_image.src = 'images/' + pix[index];
        index += 1;
    } else {
        index = 0;
        main_image.src = 'images/' + pix[index];
        index += 1;
    }
    } else if (s == 'previous') {
        if (index == -1) {
            index = pix.length-1;
            main_image.src = 'images/' +pix[index];
            index -=1;
        } else {
            main_image.src = 'images/' + pix[index];
            index -=1;
        }
    }
}

window.onload = function date_and_season() {
    "use strict";
    // variables
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get pieces of date
        full_date = new Date(),
        this_month_text = monthNames[full_date.getMonth()],
        // this_month_text = "March",
        today = full_date.getDate(),
        this_year = full_date.getFullYear(),
        // set information up for insertion into DOM tree
        new_span = document.createElement('span'),
        new_text = document.createTextNode(today + ' ' + this_month_text + ' ' + this_year),
        position = document.getElementsByTagName('footer')[0];
    // append date to footer
    new_span.appendChild(new_text);
    position.appendChild(new_span);
};

//Date code adapted from lecture code provided by Steve Paling//