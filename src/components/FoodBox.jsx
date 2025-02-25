import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food, deleteFood}) {
    console.log(food)
    let totalCalories = food.calories * food.servings
    if (food) {return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  )} else {
    return (
        <div>
            <h1>Oops! There is no more content to show.</h1>
        </div>
    )
  }
}

export default FoodBox;