export default function handleDataByEmail(email, localStorageData) {
  const currentEmailPosts = JSON.parse(localStorageData).find((object) => {
    return object[email] ?? [];
  });
  return currentEmailPosts[email];
}
