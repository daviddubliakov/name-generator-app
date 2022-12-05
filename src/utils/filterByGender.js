export default function filterByGender(names, currentGender) {
  let resultArr = [];

  names.forEach((nameInfoArr) => {
    const gender = nameInfoArr[1];

    if (gender === currentGender) {
      resultArr.push(nameInfoArr);
    }
  });

  return resultArr;
};
