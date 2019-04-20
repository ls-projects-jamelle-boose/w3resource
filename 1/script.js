console.log(`Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday. 
Current time is : 10 PM : 30 : 38`)

// Create a Date instance representing a single moment in time: Fri Apr 19 2019 13:46:36 GMT-0700 (Pacific Daylight Time)
const today = new Date()

// Return day of the week (5)
const day = today.getDay()

// Array of days
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Confirm everything is working so far
console.log(`Today is: ${daylist[day]}.`)

// Grab the hour of the day in UTC
let hour = today.getHours() 

// Gets the minutes of a Date object
let minute = today.getMinutes()

// Gets the seconds of a Date object
let second = today.getSeconds()

// Conditional (ternary, if) operator: `condition ? exprT : exprF`
let prepand = (hour >= 12) ? "PM" : "AM"

// Set the hour in standard format (1-12)
hour = (hour >= 12) ? hour - 12 : hour 

if (hour === 0 && prepand === 'PM'){  // if hour = 0 & its PM
  if (minute === 0 && second === 0){  // and if minute = 0 & second = 0
    hour = 12   // then hour = 12
    prepand = ` Noon`   // and prepand noon (its exactly noon)
  } else {
    hour = 12   // else its 12 pm and some minutes
    prepand = ' PM'
  }
}

if (hour === 0 && prepand === ' AM'){   // if hour = 0 & its AM
  if (minute === 0 && second === 0){    // and if minute = 0 & second = 0
    hour = 12   // then hour = 12
    prepand = ' Midnight'   // and prepand midnight (its exactly midnight)
  } else {
    hour = 12   // else its 12 am and some minutes
    prepand = ' AM'
  }
}

console.log(`Current Time is : ${hour} ${prepand} : ${minute} : ${second}`)

/* 

Declaring a JavaScript date : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. You can declare a date in the following ways :

new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

The getHours() method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23.

The getMinutes() method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.

The getSeconds() method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.

AM and PM : AM stands for 'ante meridiem', which means 'before noon' in Latin, while PM stands for 'post meridiem', which means 'after noon' in Latin.
12-Hour Periods : Nowadays most clocks are 12-hour clocks â€“ they divide the 24 hours in a day into two 12-hour periods. 
Ante meridiem: Before noon - Between midnight (0:00) & noon (12:00)
Post meridiem: After noon Between noon (12:00) & midnight (0:00) 

*/