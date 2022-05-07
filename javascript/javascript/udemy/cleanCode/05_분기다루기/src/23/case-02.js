function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = someDog;
  } else {
    favoriteDog = "냐옹";
  }

  return favoriteDog;
}

function favoriteDog(someDog) {
  return someDog || "냐옹";
}

favoriteDog(); // '냐옹'
favoriteDog("포메"); // '포메'
