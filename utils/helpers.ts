import { IGenre } from "@/types/movie.type";

export function getItem(keyName: string) {
  try {
    const localStorageValue = localStorage.getItem(keyName);
    return localStorageValue ? JSON.parse(localStorageValue) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function setItem(keyName: string, value: unknown) {
  localStorage.setItem(keyName, JSON.stringify(value));
}

export function removeItem(keyName: string) {
  localStorage.removeItem(keyName);
}

export default function descriptionHandler(
  isNotSingleMovie: boolean,
  title: string,
  description: string,
  genres: IGenre[]
) {
  if (isNotSingleMovie) {
    if (description.length > 70 || title.length > 15) {
      return `${description.substring(0, 80)}..`;
    } else {
      return description;
    }
  } else {
    if (genres) {
      return genres.map((genre: IGenre) => `${genre.name}, `);
    }
    return undefined;
  }
}
