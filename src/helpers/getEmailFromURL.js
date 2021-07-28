export default function getEmailFromURL(url) {
  const emailFromURL = url.substring(url.lastIndexOf('/') + 1);
  let userEmail;
  if (process.browser) {
    userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
  }
  return emailFromURL === 'user' ? userEmail : emailFromURL;
}
