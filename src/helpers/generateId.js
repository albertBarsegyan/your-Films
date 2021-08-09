export default function generateId() {
  let random = Math.floor(Math.random() * 10);
  return new Date().valueOf() * random;
}
