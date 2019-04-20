console.log(`Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy`)

// Enable basic storage and retrieval of date and time
const today = new Date()

// Get the day-of-the-month, using local time from today object
const dd = today.getDate()

//Get the year, using local time
const yyyy = today.getFullYear()

if (dd < 10) 