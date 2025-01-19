import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";

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

  async function fetchPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await response.json();
    setPets(data.pets || []);
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
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
