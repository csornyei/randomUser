import { UserData, Filters } from "./types";
import configureStore from 'redux-mock-store';
import { ReactWrapper } from "enzyme";

const dateNumberFormatter = (n: number) => {
    if (n >= 10) {
      return n
    }
    return `0${n}`;
  }

const dateParser = (date: Date) => {
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

const postcodeChecker = (postcode: string) => {
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

export const getUsers = async (userCount: number) => {
  const response = await fetch(`https://randomuser.me/api/?results=${userCount}`);
  const data = await response.json();
  return data.results.filter((user: any) => postcodeChecker(user.location.postcode)).map((user: any) => {
      const name = `${user.name.first} ${user.name.last}`;
      const pictures = {
          thumbnail: user.picture.thumbnail,
          normal: user.picture.medium
      };
      const address = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}, ${user.location.postcode}`;

      const dateOfBirth = dateParser(new Date(Date.parse(user.dob.date)));

      return {
          name,
          pictures,
          gender: user.gender,
          email: user.email,
          cell: user.cell,
          postcode: user.location.postcode,
          address,
          dateOfBirth,
          age: user.dob.age
      }
  });
}

export const findByTestAttr = (component: ReactWrapper, attr: string) => {
  return component.find(`[data-test='${attr}']`);
}

export const getMockStore = (initialState: any = {}) => {
  const mockStore = configureStore([]);
  return mockStore(initialState);
}