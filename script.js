// List of character names in the same order as 1.png → 59.png
// 👇 Replace these placeholders with your actual names
const characterNames = [
  "Nefer", "Flins", "Lauma", "Ineffa", "Skirk",
  "Escoffier", "Varesa", "Mizuki", "Mavuika", "Citlali",
  "Chasca", "Xilonen", "Kinich", "Mualani", "Emilie",
  "Sigewinne", "Clorinde", "Arlecchino", "Chiori", "Xianyun",
  "Navia", "Furina", "Wriothesley", "Neuvillette", "Lyney",
  "Baizhu", "Dehya", "Alhaitham", "Kunikuzushi", "Nahida",
  "Nilou", "Cyno", "Tighnari", "Yelan", "Ayato",
  "Yae Miko", "Shenhe", "Itto", "Kokomi", "Ei",
  "Yoimiya", "Ayaka", "Kazuha", "Eula", "Hu Tao",
  "Xiao", "Ganyu", "Albedo", "Zhongli", "Ajax",
  "Qiqi", "Keqing", "Mona", "Jean", "Diluc",
  "Klee", "Venti", "Aether", "Lumine"
];

const characters = characterNames.map((name, index) => ({
  name: name,
  img: `images/${index + 1}.png` // matches 1.png → 59.png
}));

const selectionScreen = document.getElementById("selection-screen");
const gameScreen = document.getElementById("game-screen");
const characterGrid = document.getElementById("character-grid");
const gameGrid = document.getElementById("game-grid");
const chosenCharacterDiv = document.getElementById("chosen-character");
const doneBtn = document.getElementById("done-btn");
const restartBtn = document.getElementById("restart-btn");

let chosenCharacter = null;

// Build selection grid
characters.forEach((char) => {
  const div = document.createElement("div");
  div.classList.add("character");
  div.innerHTML = `<img src="${char.img}" alt="${char.name}"><p>${char.name}</p>`;
  div.addEventListener("click", () => {
    chosenCharacter = char;
    startGame();
  });
  characterGrid.appendChild(div);
});

// Start game
function startGame() {
  selectionScreen.style.display = "none";
  gameScreen.style.display = "block";

  chosenCharacterDiv.innerHTML = `
    <img src="${chosenCharacter.img}" width="100" alt="${chosenCharacter.name}">
    <p>${chosenCharacter.name}</p>
  `;

  gameGrid.innerHTML = "";
  characters.forEach((char) => {
    const div = document.createElement("div");
    div.classList.add("character");
    div.innerHTML = `<img src="${char.img}" alt="${char.name}"><p>${char.name}</p>`;
    div.addEventListener("click", () => {
      div.classList.toggle("crossed");
    });
    gameGrid.appendChild(div);
  });
}

// Done button
doneBtn.addEventListener("click", () => {
  alert("Round finished!");
});

// Restart button
restartBtn.addEventListener("click", () => {
  chosenCharacter = null;
  gameScreen.style.display = "none";
  selectionScreen.style.display = "block";
});
