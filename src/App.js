// src/App.js
import './App.css';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import NoList from './components/NoList';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showFoodList, setShowFoodList] = useState(foods);

  const [visible, setVisible] = useState(true);

  const toggleVisibility = () =>{
    setVisible(!visible);
  }
  const addFood = (food) => {
    const foodListCopy = [...foodList, food];
    setFoodList(foodListCopy);
    setShowFoodList(foodListCopy);
  };

  const searchFood = (query) => {
    const filteredFoodList = foodList.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFoodList(filteredFoodList);
  };

  const deleteFood = (foodName) => {
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== foodName;
    })
    setFoodList(filteredFoodList)
    setShowFoodList(filteredFoodList)
  }

  // After importing the components we can render them directly:
  return (
    <div>
      {visible && <AddFoodForm addFood={addFood} />}
      <button onClick={toggleVisibility}>{visible ? 'Hide Form' : 'Add New Food'}</button>
      <Search searchFood={searchFood} />
      {showFoodList.map((food) => {
        return <FoodBox food={food} deleteFood= {deleteFood}key={food.name} />;
      })}
      {!showFoodList.length && <NoList />}
    </div>
  );
}

export default App;
