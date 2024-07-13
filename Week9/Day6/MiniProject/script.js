/*
Instructions:
PART I : The Website
1. The webpage displays Cards of Robots with their respective image and information.
2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.

PART II : The Filter
1. When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write "nic" in the search box, you will display the robot which name contains "nic", which means only one robot: "Nicholas".
2. Display the cards in the DOM, using DOM elements and selectors, and `filter` them with the search box.

PART II : The Style
1. You can use your own images or use this website to generate a new Robot Image.
2. Check out those links to generate the correct font
   * cdnfonts
   * dafont

Additional instructions:
- Use the website robohash to generate images based on the name
- Use a background image with name background.jpg
- The robot card is a standard card with the image of the robot at the top in a circle (using border-radius), below that is the name in bold, and below that is the email
- The page should have a header with the name of the site RoboFriends in some interesting font linked from Google fonts
*/

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const robotContainer = document.getElementById("robotContainer");
const searchBox = document.getElementById("searchBox");

function createRobotCard(robot) {
  const card = document.createElement("div");
  card.className = "robot-card";

  const img = document.createElement("img");
  img.src = `https://robohash.org/${robot.id}?size=150x150`;
  img.alt = robot.name;
  img.className = "robot-image";

  const name = document.createElement("p");
  name.className = "robot-name";
  name.textContent = robot.name;

  const email = document.createElement("p");
  email.textContent = robot.email;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(email);

  return card;
}

function displayRobots(robotsToDisplay) {
  robotContainer.innerHTML = "";
  robotsToDisplay.forEach((robot) => {
    robotContainer.appendChild(createRobotCard(robot));
  });
}

function filterRobots() {
  const searchTerm = searchBox.value.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm)
  );
  displayRobots(filteredRobots);
}

searchBox.addEventListener("input", filterRobots);

// Initial display of all robots
displayRobots(robots);
