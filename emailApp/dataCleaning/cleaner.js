// checks the email validation
function validEmail(e) {
  const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

// seperate 2 emails and comma between them
function seperateEmails(emailIDs) {
  let updatedEmail = "";
  let temporaryEmail = "";
  if (emailIDs) {
    let filteredEmailIDs = emailIDs.replace(/dot/g, ".");
    filteredEmailIDs = filteredEmailIDs.replace(/Dot/g, ".");
    emailIDs = filteredEmailIDs;
  }
  emailIDs = emailIDs.split(" ").join("").toLocaleLowerCase();

  for (let i = 0; i < emailIDs.length; i++) {
    temporaryEmail = temporaryEmail + emailIDs[i];
    if (
      emailIDs[i] === "m" &&
      emailIDs[i - 1] === "o" &&
      emailIDs[i - 2] === "c" &&
      emailIDs[i - 3] === "."
    ) {
      const checkValidity = validEmail(temporaryEmail);
      if (checkValidity) {
        if (updatedEmail.length > 0) {
          updatedEmail = updatedEmail + "," + temporaryEmail;
        } else {
          updatedEmail = updatedEmail + temporaryEmail;
        }
      }
      temporaryEmail = "";
    }
  }
  return updatedEmail;
}

export function emailDataCleaning(values) {
  const keys = Object.keys(values);
  keys.forEach((itr) => {
    if (itr === "to" || itr === "cc" || itr === "bcc") {
      const array = seperateEmails(values[itr]);
      values[itr] = array;
    }
  });
  return values;
}
