export default function checkPasswordAndEmail(localData, formObject) {
  const usersList = localData ? JSON.parse(localData) : [];
  return usersList.find(
    (userObject) =>
      userObject.password === formObject.password &&
      userObject.email === formObject.email
  );
}
