
/*const now = new Date();

const currentDateTime = now.getTime();
console.log(currentDateTime);


function updateTime() {
    let currentTime = new Date();
    let currentTimeMillis = currentTime.getTime();
    let currentUTCTime = currentTime.toUTCString();
 
    console.log("Current time in milliseconds: " + currentTimeMillis);
    document.getElementById(showdate).innerHTML = currentTime;
 }
 
 setInterval(updateTime, 1000); // Run updateTime() every second


 function currentDate() {

    document.getElementById(showDate).innerHTML = Date();
 };*/


 
      // create a function to update the date and time
      function updateDateTime() {
        // create a new `Date` object
        const now = new Date();

        // get the current date and time as a string
        const currentDateTime = now.toLocaleString();

        // update the `textContent` property of the `span` element with the `id` of `datetime`
        document.querySelector('currentUTCTime').innerHTML = currentDateTime;
      }

      // call the `updateDateTime` function every second
      setInterval(updateDateTime, 1000);
    