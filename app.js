function calculateCarbon() {
  const population = document.getElementById("population").value;
  const transportation = document.getElementById("transportation").value;
  const electricity = document.getElementById("electricity").value;
  const waste = document.getElementById("waste").value;

  const transportationFactor = 0.273; // metric tons CO2e per passenger vehicle mile
  const electricityFactor = 0.82; // metric tons CO2e per MWh
  const wasteFactor = 0.88; // metric tons CO2e per ton of waste

  const transportationEmissions = transportation * transportationFactor;
  const electricityEmissions = electricity * electricityFactor;
  const wasteEmissions = waste * wasteFactor;

  const totalEmissions = transportationEmissions + electricityEmissions + wasteEmissions;
  const perCapitaEmissions = totalEmissions / population;

  const results = document.getElementById("results");
  results.innerHTML = `Total Carbon Footprint: ${totalEmissions} metric tons CO2e per year<br>
    Per Capita Carbon Footprint: ${perCapitaEmissions} metric tons CO2e per year`;
    const suggestions= document.getElementById("suggestions");
    // Provide feedback to the user based on their result
  if (perCapitaEmissions < 0.2) {
    suggestions.innerText = 'Great job! Your per capita carbon footprint is below the global average. Keep up the good work!';
  } else if (perCapitaEmissions >= 0.2 && perCapitaEmissions < 0.4) {
    suggestions.innerText = 'Your per capita carbon footprint is higher than the global average. Consider reducing your carbon footprint by taking public transportation or using more energy-efficient appliances.';
  } else {
   suggestions.innerText = 'Your per capita carbon footprint is much higher than the global average. You can reduce your carbon footprint by making changes in your lifestyle, such as using renewable energy sources or reducing meat consumption.';
  }
}













// // Define variables for the form elements
// const populationInput = document.getElementById('population');
// const transportInput = document.getElementById('transport');
// const electricityInput = document.getElementById('electricity');
// const wasteInput = document.getElementById('waste');
// const calculateButton = document.getElementById('calculate-button');
// const resultSection = document.getElementById('result-section');
// const totalEmissions = document.getElementById('total-emissions');
// const perCapitaEmissions = document.getElementById('per-capita-emissions');
// const feedback = document.getElementById('feedback');

// // Add event listener for the calculate button
// calculateButton.addEventListener('click', () => {
//   // Get the input values from the form
//   const population = Number(populationInput.value);
//   const transportEmissions = Number(transportInput.value);
//   const electricityEmissions = Number(electricityInput.value);
//   const wasteEmissions = Number(wasteInput.value);

//   // Calculate the total emissions and per capita emissions
//   const total = transportEmissions + electricityEmissions + wasteEmissions;
//   const perCapita = total / population;

//   // Display the results
//   totalEmissions.innerText = `${total.toFixed(2)} metric tons CO2e per year`;
//   perCapitaEmissions.innerText = `${perCapita.toFixed(5)} metric tons CO2e per year`;

//   // Provide feedback to the user based on their result
//   if (perCapita < 0.2) {
//     feedback.innerText = 'Great job! Your per capita carbon footprint is below the global average. Keep up the good work!';
//   } else if (perCapita >= 0.2 && perCapita < 0.4) {
//     feedback.innerText = 'Your per capita carbon footprint is higher than the global average. Consider reducing your carbon footprint by taking public transportation or using more energy-efficient appliances.';
//   } else {
//     feedback.innerText = 'Your per capita carbon footprint is much higher than the global average. You can reduce your carbon footprint by making changes in your lifestyle, such as using renewable energy sources or reducing meat consumption.';
//   }
  
//   resultSection.style.display = 'block';
// });
