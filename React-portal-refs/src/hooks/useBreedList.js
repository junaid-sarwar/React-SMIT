// import { useState, useEffect } from "react";
// import { apiURL } from "../../config/apiURL";
// const localCache = {};
// import fetchBreedList from "../../helper/fetchBreedList";

// function useBreedList(animal) {
//     console.log("provided animal", animal)
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");
//     useEffect(() => {
//         if (!animal) {
//             setBreedList([])
//         } else if (localCache[animal]) {
//             setBreedList(localCache[animal]);
//           }
//         else {
//             requestBreedList();
//         }
//     }, [animal])

//     async function requestBreedList() {
//         setBreedList([]);
//         setStatus("loading");
//         const res = await fetch(
//             `${apiURL}/breeds?animal=${animal}`
//         );
//         const json = await res.json();
//         localCache[animal] = json.breeds || [];
//         setBreedList(localCache[animal]);
//         setStatus("loaded");
//     }

//     console.log(breedList, status)
//     return [breedList, status];
// }

// export default useBreedList

import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../../helper/fetchBreedList";
 
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
 
  return [results?.data?.breeds ?? [], results.status];
}