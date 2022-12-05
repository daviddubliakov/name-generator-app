const sortByPopularity = (nameInfoA, nameInfoB) => nameInfoB[4] - nameInfoA[4];

export default function getPopularNames(namesArr) {
  return namesArr.sort(sortByPopularity).slice(0, 5);
}
