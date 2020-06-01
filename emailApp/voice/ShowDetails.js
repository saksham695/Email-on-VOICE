import React from "react";
import { Text, StyleSheet, View } from "react-native";

import MailInput from "../mailAPI/MailInput";

import { emailDataCleaning } from "../dataCleaning/cleaner";
import { CONSTANTS } from "../constants/constants";

export default function ShowDetails({ input }) {
  const emailAttributes = emailDataCleaning(input);
  const sendEmail = emailAttributes.confirm.includes(CONSTANTS.YES);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          To:{"\n"}
          {emailAttributes.to}
        </Text>
        <Text style={styles.text}>
          Cc:{"\n"}
          {emailAttributes.cc}
        </Text>
        <Text style={styles.text}>
          Bcc:{"\n"}
          {emailAttributes.bcc}
        </Text>
        <Text style={styles.text}>
          Subject:{"\n"}
          {emailAttributes.subject}
        </Text>
        <Text style={styles.text}>
          Body:{"\n"}
          {emailAttributes.body}
        </Text>
      </View>
      {sendEmail ? <MailInput details={emailAttributes} /> : null}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "90%",
    paddingLeft: 5,
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    marginTop: 15,
  },
});
