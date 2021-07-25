export default function handleAllPostsByEmail(email, localStorageData) {
  const currentEmailPosts = JSON.parse(localStorageData).find((object) => {
    return object[email] ?? [];
  });
  return currentEmailPosts[email];
}
