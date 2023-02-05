import { range } from "express/lib/request"

const APP_ID="04df2c97"
const APP_KEY="2e4f17903e0ba50f0592b9948a93b35e"
const activityLevelNumbers = {
  'low': 1.1,
  'slightly below average': 1.15,
  'average': 1.2,
  'slightly above average': 1.25,
  'high': 1.3
}


export default async function handler(req, res) {
    /* data from request body to be confirmed */
    const age = req.body.age
    const sex = req.body.sex
    const weight = req.body.weight_kg
    const height = req.body.height_m
    const activityMultiplier = activityLevelNumbers['high']
    console.log(activityMultiplier)

    const searchTerms = req.body.searchTerms
    const encodedSearch = encodeURIComponent(searchTerms)
    const meal_type = req.body.meal_type
    const recipes = await getRecipes(encodedSearch, meal_type, 400)
    

    res.status(200).json({ recipe: recipes })
  }



async function getRecipes(searchTerms, mealType, calories) {
/*returns an array of two recipes */
let minCalories = 0
if (calories - 50 > 0) {
  minCalories = calories - 50
}
const maxCalories = calories + 50
const rangeCalories = minCalories.toString() + "-" + maxCalories.toString()
console.log(rangeCalories)
  if (!mealType) { 
    mealType="lunch" }
  const reqURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerms}&app_id=${APP_ID}&app_key=${APP_KEY}&meal_type=${mealType}&calories=${rangeCalories}`

    let res = await fetch(reqURL)
    res = await res.json()
    const slicedRecipes = res.hits.slice(0, 2)
    const recipes = []
    slicedRecipes.forEach((element, index) => {
      recipes.push({
      label: element['recipe']['label'],
      uri: element['recipe']['uri'],
      image: element['recipe']['image']
      })
    })
    console.log(recipes)
    return recipes
}

function calculateCalories(age, sex, weight, height, activityLevel) {
  
  if (sex == "F") {
        return activityLevel * 9.247 * weight + 3.098 * height - 4.330 * age + 447.593
    } else {
        return activityLevel * 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
    }
}