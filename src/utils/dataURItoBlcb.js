export default function dataURItoBlob(dataURI) {
  // convert base64/URIencoded data to raw binary data help in the string
  let byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0) {
    byteString = atob(dataURI.split(",")[1]);
  } else {
    byteString = decodeURI(dataURI.split(",")[1]);
  }
  // separate out the min file
  let mimeString = dataURI.split(":")[1].split(";")[0];
  let ia = new Uint8Array(byteString.length);
  for (let i = 0; i < ia.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}
