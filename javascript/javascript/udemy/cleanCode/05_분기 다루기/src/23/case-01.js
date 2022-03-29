function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return "Fetching...";
  }
}

function fetchData() {
  return state.data || "Fetching...";
}
