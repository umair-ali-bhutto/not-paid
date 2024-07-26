/**
 * @description Script to fade out the page if the due date has passed
 * 
 * @author umair-ali-bhutto
 * @originalAuthor kleampa
 * @url https://github.com/kleampa
 * 
 * 
 * @param {Date} due_date - The due date to check against (format: YYYY-MM-DD)
 * @param {Number} days_deadline - The number of days to extend the deadline
 */

window.addEventListener('load', function () {
    //EDIT THESE TWO VARIABLES ACCORDINGLY WILL CONVERT THIS CODE TO FETCH FROM JSON
    // Set the due date (July 22, 2024)
    var due_date = new Date('2024-07-29');
    // Set the number of days to extend the deadline (10 days)
    var days_deadline = 10;



    // Get the current date
    var current_date = new Date();

    // Calculate the UTC timestamps for the due date and current date
    var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
    var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());

    // Calculate the number of days between the due date and current date
    var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

    // If the due date has passed, calculate the opacity based on the number of days late
    if (days > 0) {
        var days_late = days_deadline - days;
        // Ensure the opacity value is between 0 and 1
        var opacity = (days_late * 100 / days_deadline) / 100;
        opacity = (opacity < 0) ? 0 : opacity;
        opacity = (opacity > 1) ? 1 : opacity;

        // Set the opacity of the page body
        if (opacity >= 0 && opacity <= 1) {
            document.getElementsByTagName("BODY")[0].style.opacity = opacity;
        }

    }
});
