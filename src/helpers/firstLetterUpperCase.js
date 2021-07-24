export default function firstLetterUpperCase(string) {
  return string[0].toUpperCase() + string.substr(1, string.length);
}
