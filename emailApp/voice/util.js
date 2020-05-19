import Tts from "react-native-tts";

export function checkStatus(state) {
  const boolSend = state.sendEmail.includes("yes");
  const addMore = state.recipient.includes("yes");
  const values = [
    "Welcome to this email sending app , I can help you in sending emails .  Do you want to send emails ?",
    " Tell me the content you want to send ",
    "Now you can add subject for your mail",
    "Subject and Body are successfully added now you can tell to whom you want to send this mail",
    "You can add cc , if you want to",
    "you can add bcc here ",
    "Do you want to add more recipient",
    " you  can  add more  recipients here ",
    " Are you sure you want to send this e-mail. ? ",
    "I am glad that you visited here . Wish I could help you  somehow . Dont forget to come here when you need to send emails",
    " Are you sure you want to send this e-mail. ",
  ];

  if (!boolSend && state.index === 1) {
    state.index = 9;
  }
  if (!addMore && state.index == 7) {
    state.index = 10;
  }
  Tts.speak(values[state.index]);
}
