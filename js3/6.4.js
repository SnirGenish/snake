let populations = [100, 330, 4999];
function populationPercentages(population) {
  let percentages = [];
  for (let i = 0; i < population.length; i++) {
    const element = population[i];
    function percentageofworld1(population) {
      let world = 7900;
      let qui = (population / world) * 100;
      return qui;
    }
    percentages.push(percentageofworld1(element));
  }
  return percentages;
}
console.log(populationPercentages(populations));
