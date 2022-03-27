import React from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { FormContainer, Button, FoodInput, Select } from "./HomeStyles";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [selectedMealType, setSelectedMealType] = useState(
    mealType[0].toLowerCase()
  );

 

  const myId = "ae0ba4fc";
  const myKey = "39548faacdda9d3da15d5f8c63746993";
  const url = ` https://api.edamam.com/search?q=${query}&app_id=${myId}&app_key=${myKey}&mealType=${selectedMealType}`;

 const getData = async () => {
   console.log(query);
   if (query) {
     const { data } = await axios.get(url);
     setrecipes(data.hits);
   } else {
     console.log("please enter your meal");
   }
 };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      {" "}
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>

        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setSelectedMealType(e.target.value)}
        >
          {mealType.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </Select>
      </FormContainer>{" "}


    </div>
  );
};

export default Home;
