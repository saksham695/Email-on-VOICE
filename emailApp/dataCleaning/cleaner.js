// checks the email validation
function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

// method will remove the noises from emails address and check validy to emails and then create an array of emails.
function fillArray(myString) {
  let array = [];
  let temp = "";
  const length = myString.length;
  if (myString) {
    let newString = myString.replace(/dot/g, ".");
    newString = newString.replace(/Dot/g, ".");
    myString = newString;
  }
  myString = myString.split(" ").join("").toLocaleLowerCase();

  for (let i = 0; i < length; i++) {
    temp = temp + myString[i];
    if (
      myString[i] === "m" &&
      myString[i - 1] === "o" &&
      myString[i - 2] === "c" &&
      myString[i - 3] === "."
    ) {
      const checkValidity = validEmail(temp);
      if (checkValidity) {
        array.push(temp);
      }
      temp = "";
    }
  }
  return array;
}

//method used to clean the emails addresses
export function emailDataCleaning(values) {
  const keys = Object.keys(values);
  keys.forEach((itr) => {
    if (itr === "to" || itr === "cc" || itr === "bcc") {
      const array = fillArray(values[itr]);
      values[itr] = array;
    }
  });
  return values;
}
