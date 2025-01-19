import { useState } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
// import { apiURL } from "../../config/apiURL";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../../helper/fetchSearch";

const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [animal, setAnimal] = useState(ANIMALS[0]);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [breeds] = useBreedList(animal);

  const results = useQuery([requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(formData.get("animal"));
          
          const obj = {
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj)
          console.log(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animalOption, index) => (
              <option key={index} value={animalOption}>
                {animalOption}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={!breeds.length}>
            {breeds.map((breedOption, index) => (
              <option key={index} value={breedOption}>
                {breedOption}
              </option>
            ))}
          </select>
        </label>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      {results.isError && <div>Error: {results.error.message}</div>}
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
