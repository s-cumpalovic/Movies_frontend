import * as React from "react";
import { ISearchBar } from "@/types/movie.type";
import { useForm } from "react-hook-form";

export default function SearchBar({ term, setTerm, onSubmit,}: ISearchBar): JSX.Element {
  const { register } = useForm();
  return (
    <input
      className="search-bar"
      placeholder="Start typing to search for movies.."
      type="text"
      value={term}
      {...register("term", {
        onChange: (e: React.FormEvent<HTMLInputElement>) => {
          onSubmit(e.currentTarget.value);
          setTerm(e.currentTarget.value);
        },
      })}
    />
  );
}
