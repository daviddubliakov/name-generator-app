export default function getRandomName(namesArr) {
  return namesArr[Math.floor(Math.random() * namesArr.length)][3];
}
