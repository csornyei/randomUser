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