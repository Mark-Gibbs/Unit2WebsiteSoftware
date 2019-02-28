var acc = document.getElementsByClassName("accordion"); // Create a variable called acc
var i; // Create a variable called i

for (i = 0; i < acc.length; i++) { // For loop that loops through all the numbers from 0, to the value of the length of the object, referenced by the variable acc
  acc[i].addEventListener("click", 
  
  function() { // Set the function that is run when the click event is triggered
    // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
  });
}