// method to convert text message to base64
export function base64Encode(message) {
  return Buffer.from(message).toString("base64");
}
