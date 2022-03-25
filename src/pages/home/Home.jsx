import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const myId = "ae0ba4fc";
  const myKey = "39548faacdda9d3da15d5f8c63746993";
  const url = ` https://api.edamam.com/search?q=${query}&app_id=${myId}&app_key=${myKey}&&health=alcohol-free`;

  const getRecipes = async () => {
    const result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div>
      {/* <Recipe recipe={recipes}/> */}
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }} onSubmit={submitHandle}>
          <OutlinedInput
            placeholder="Please enter ingridient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" label="Submit" onClick={getRecipes}>
          Search
        </Button>
        <Button variant="contained">Contained</Button>
      </Box>
      <p onClick={navigate("/recipe")}  > </p>
    </div>
  );
};

export default Home;
