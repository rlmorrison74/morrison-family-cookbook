import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Recipes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

//For displaying all recipes on the homepage
export const getRecipes = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

//For displaying a single recipe by id 
export const getRecipe = async (id) => {
  const res = await axios.get(`${URL}/${id}`, config);
  return res.data.fields;
};

//For updating a single recipe by id
export const setRecipe = async (id, fields) => {
  // eslint-disable-next-line
  const res = await axios.put(`${URL}/${id}`, { fields }, config);
};

export const newRecipe = async (fields) => {
    const res = await axios.post(`${URL}`, { fields }, config)
    console.log("success!", res)
}

//For deleting a single recipe by id
export const deleteRecipe = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data.fields;
};