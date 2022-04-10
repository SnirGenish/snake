function countryToLiveIn(language, isIsland, population, country) {
  if (language === "english" && isIsland === false && population < 50000000) {
    console.log(country + " good");
  } else {
    console.log("not good");
  }
}
countryToLiveIn("english", false, 400, "usa");
