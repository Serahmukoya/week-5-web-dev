
// Part 1: 
let user = "Student";
let score = 75;

if (score >= 50) {
  console.log(user + " has passed.");
} else {
  console.log(user + " has failed.");
}


// Part 2: Functions

// Function 1: Update message text
function updateMessage() {
  document.getElementById("message").innerText = "The message has been updated!";
}

// Function 2: Fill the sidebar with items
function populateSidebar() {
  let fruits = ["Apple", "Banana", "Cherry"];
  let list = document.getElementById("list");

  for (let fruit of fruits) {
    let li = document.createElement("li");
    li.innerText = fruit;
    list.appendChild(li);
  }
}


// Part 3: Loops


// Loop 1: Count down from 5
for (let i = 5; i >= 1; i--) {
  console.log("Countdown: " + i);
}

// Loop 2: While loop example
let n = 1;
while (n <= 3) {
  console.log("While loop number: " + n);
  n++;
}


// Part 4: DOM Interactions

// 1. Change header color
document.getElementById("page-title").style.color = "green";

// 2. Button click updates message
document.getElementById("update-btn").addEventListener("click", updateMessage);

// 3. Populate sidebar on page load
window.onload = populateSidebar;
