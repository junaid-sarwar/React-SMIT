import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import { apiURL } from "../../config/apiURL";
// import Button from 'react-bootstrap/Button';
import * as React from 'react';
import Button from '@mui/material/Button';

const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []); // Runs once when the component mounts

  console.log("API URL:", apiURL);

  async function fetchPets() {
    try {
      const response = await fetch(
        `${apiURL}/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      const data = await response.json();
      setPets(data.pets || []);
    } catch (error) {
      console.error("Failed to fetch pets:", error);
    }
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animalOption, index) => (
              <option key={index} value={animalOption}>
                {animalOption}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          {breeds.length ? "Breed" : "Breed"}
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            {breeds.map((breedOption, index) => (
              <option key={index} value={breedOption}>
                {breedOption}
              </option>
            ))}
          </select>
        </label>
        {/* <button type="submit">Submit</button> */}
        {/* <Button variant="danger" className="px-3">Danger</Button> */}
        <Button variant="contained">Submit</Button>;
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
