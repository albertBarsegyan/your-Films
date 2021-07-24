export default function handleBlurPost(e, stateList) {
  const inputValue = e.target.value;
  if (inputValue.length > 0) {
    this.setState((prevState) => [...prevState[stateList], inputValue]);
    console.log(this.state[stateList]);
    return;
  }
}
