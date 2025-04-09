const freelancerNames = [
  "Alice",
  "Bob",
  "Carol",
  "David",
  "Annie",
  "Lila",
  "Sam",
  "Eva",
];
const freelancerOccupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Designer",
  "Marketer",
  "Consultant",
  "Analyst",
  "Artist",
];

let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

const freelancerListElement = document.querySelector("#freelancer-list");
const averagePriceElement = document.querySelector("#average-price");

function calculateAveragePrice(freelancersArray) {
  if (freelancersArray.length === 0) {
    return 0;
  }
  const sum = freelancersArray.reduce(
    (acc, freelancer) => acc + freelancer.startingPrice,
    0
  );
  return sum / freelancersArray.length;
}

function renderFreelancers() {
  freelancerListElement.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancerListElement.appendChild(listItem);
  });
}

function updateAveragePrice() {
  const averagePrice = calculateAveragePrice(freelancers);
  averagePriceElement.textContent = averagePrice.toFixed(0);
}

function generateRandomFreelancer() {
  const randomNameIndex = Math.floor(Math.random() * freelancerNames.length);
  const randomOccupationIndex = Math.floor(
    Math.random() * freelancerOccupations.length
  );
  const randomPrice = Math.floor(Math.random() * 50) + 20;
  return {
    name: freelancerNames[randomNameIndex],
    occupation: freelancerOccupations[randomOccupationIndex],
    startingPrice: randomPrice,
  };
}

function addNewFreelancer() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAveragePrice();
}

renderFreelancers();
updateAveragePrice();

setInterval(addNewFreelancer, 3000);
