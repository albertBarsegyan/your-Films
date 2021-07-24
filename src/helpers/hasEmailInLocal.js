export default function hasEmailInLocal(local, inputValue) {
  const parseLocalData = local ? JSON.parse(local) : [];
  return parseLocalData.some((object) => object.email === inputValue);
}
