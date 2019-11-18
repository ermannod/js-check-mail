// get email
var email = prompt("Enter you e-mail address");
console.log(email);
// Registered emails
var elist = [ "email0@email.com" , "email1@email.com" , "email2@email.com" , "email3@email.com" , "email4@email.com" , "email5@email.com" , "email6@email.com" , "email7@email.com" , "email8@email.com" ];
console.log(elist);

var find = false;

for (var i = 0; i < elist.length; i++) {
  console.log(i);
  var  currentEmail = elist[i];
  console.log(currentEmail);
  if ( currentEmail == email) {
    console.log("Your email is correct");
    find = true;
  }
}

console.log("Is email in list? " + find);

// Email checker

if (find == true ){
  console.log("your email is in");
} else {
  console.log("Please check your email");
}
