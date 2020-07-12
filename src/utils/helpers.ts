import { UserData, Filters } from "./types";

const dateNumberFormatter = (n: number) => {
    if (n >= 10) {
      return n
    }
    return `0${n}`;
  }

export const dateParser = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}. ${dateNumberFormatter(month+1)}. ${dateNumberFormatter(day)}`;
}

export const filterUsers = (users: UserData[], filters: Filters) => {
  return users.filter((user) => {
    if (user.gender === "male") {
      return filters.ferfi
    }
    if (user.gender === "female") {
      return filters.no
    }
  })
}

const isPrime = (n: number) => {
  if (n <= 1) {
    return false
  }
  for (let index = 2; index <= (n / 2); index++) {
    if (n % index === 0) {
      return false;
    }
  }
  return true
}

export const postcodeChecker = (postcode: string) => {
  let primeCount = 0;
  const postcodeStr = `${postcode}`
  for (let index = 1; index <= postcodeStr.length; index++) {
    for (let j = 0; j < postcodeStr.length - index; j++) {
      const str = postcodeStr.substring(j, j + index);
      const num = parseInt(str);
      if (num >= Math.pow(10, index - 1)) {
        if (isPrime(num)) {
          primeCount++;
        }
      }
      if (primeCount >= 2) {
        return true;
      }
    }
  }
  return false;
}