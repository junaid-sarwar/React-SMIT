import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Pet from "./Pet";
const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];
// const breeds = ["", "Buldoog", "husky"];
// const breedsData = [
//   {
//     animal: 0,
//     breedName: "Select an Option",
//   },
//   {
//     animal: 1,
//     breedName: "german sheperd",
//   },
//   {
//     animal: 1,
//     breedName: "Havanese",
//   },
//   {
//     animal: 2,
//     breedName: "Persian",
//   },
//   {
//     animal: 2,
//     breedName: "russian",
//   },
//   {
//     animal: 3,
//     breedName: "paramount",
//   },
// ];
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  // const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [breeds, status] = useBreedList(animal)
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  //   let location = "Seattle, WA";

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const data = await response.json();
    setPets(data.pets);
    console.log(data);
  }

  const handleChange = (e) => {
    console.log("e", e);
    setLocation(e.target.value);
  };
  const handleAnimalChange = (e) => {
    console.log("e", e);
    let value = e.target.value;
    setAnimal(value);

    // if (value === "dog") {
    //   let filterData = breedsData.filter((item) => item.animal === 1);
    //   setSelectedBreeds(filterData);
    // } else if (value === "cat") {
    //   let filterData = breedsData.filter((item) => item.animal === 2);
    //   setSelectedBreeds(filterData);
    // } else {
    //   setSelectedBreeds([]);
    // }
  };
  console.log("location", location);
  console.log("animal", animal);
  console.log("breed", breed);
  console.log("pets", pets);
  console.log("breeds" , breeds)
  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault();
        fetchPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleChange}
            value={location}
            type="text"
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            {ANIMALS.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
            {/* <option value="bird">Bird</option>
            <option value="cat">Cat</option> */}
          </select>
          <label htmlFor="breed">
            {
              status === 'loading' ? "Loading...": "Breed"
            }
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
            >
              {breeds.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
              {/* <option value="german">German</option> */}
            </select>
          </label>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="search">
      {
        pets.map((data,index) => {
          return(
            <Pet item={data}/>
          )
         
        })
      }
     
      </div>
    </div>
  );
}

export default SearchParams;