// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8BmAlLmijWm0isvs3Wq9wtEACyMriYts",
    authDomain: "profile-ceee2.firebaseapp.com",
    databaseURL: "https://profile-ceee2.firebaseio.com",
    projectId: "profile-ceee2",
    storageBucket: "profile-ceee2.appspot.com",
    messagingSenderId: "133361829167"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  // 2. Button for adding Employees
$("#sendInput").on("click", function(event) {
  event.preventDefault();
  // Grabs user input
  var contactName = $("#name").val().trim();
  var contactEmail = $("#email").val().trim();
  var contactMessage = $("#message").val().trim();
  // Creates local "temporary" object for holding employee data
  var newContact = {
    name: contactName,
    email: contactEmail,
    message: contactMessage,
  };
  // Uploads employee data to the database
  firebase.database().ref("newContact").push({
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  });
  // Logs everything to console
  console.log(newContact.name);
  console.log(newContact.email);
  console.log(newContact.message);

  // Alert
  alert("Contact information successfully sent");
  // Clears all of the text-boxes
  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
});

