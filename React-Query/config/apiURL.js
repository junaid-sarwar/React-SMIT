export let apiURL = null;

const mode = import.meta.env.MODE;

if (mode === "development") {
  apiURL = import.meta.env.VITE_PROD_API_URL;
} else {
  apiURL = import.meta.env.VITE_PROD_API_URL;
}
