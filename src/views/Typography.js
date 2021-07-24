import React, { useState,useEffect } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from "@material-ui/core";

const data = [
  {
    categoryId: 20
  },
  {
    categoryId: 21
  },
  {
    categoryId: 28
  },
  {
    categoryId: 16
  },
  {
    categoryId: 10
  }
];

const Demo01 = () => {
  const [categoryId, setCategoryId] = useState([]);
  

  

  const handleCategory = (e, value) => {
    if (e.target.checked) {
      setCategoryId([...categoryId, e.target.value]);
    } else {
      setCategoryId(categoryId.filter((id) => id !== e.target.value));
      
     }
     console.log(categoryId)
    
    
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">categoryId: {categoryId.join()}</FormLabel>

      <FormGroup row>
        {data.map((xxx) => (
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={xxx.categoryId}
                onChange={handleCategory}
              />
            }
            label={xxx.categoryId}
            labelPlacement="end"
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Demo01;
