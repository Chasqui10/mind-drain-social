const username = [
  'lernantino',
  'billythekid',
  'rusty-ryan',
  'danny-ocean',
  'linus-caldwell',
  'ruben-tishkoff',
  'frank-catton',
  'saul-bloom',
  'virgil-malloy',
  'turk-malloy',
  'livingston-dell',
  'basher-tarr',
  'tess-ocean'
];

const reactionsTypes = [
  'love',
  'dislike',
  'funny',
  'interesting',
  'sad',
  'angry'
];


const getRandomArrItem = (arr) => {
   arr[Math.floor(Math.random() * arr.length)];
};

const getRandomUserName = () => `${ 
  getRandomArrItem(username)
}`;

const getRandomReaction = () => `${
  getRandomArrItem(reactionsTypes)
}`;

module.exports = { getRandomUserName, getRandomReaction };