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
    const userData = ""
    //let userData = await fetch('./api/terraUserData')
    //userData = await userData.json()
    const age = userData.age ? userData.age : 35
    const sex = userData.gender ? userData.gender : "M"
    const weight = userData.weight ? userData.weight : 75
    const height = userData.height ? userData.height : 1.75
    let activityLevel = req.body.activityLevel
    if (!activityLevel) {activityLevel = "average"}
    const activityMultiplier = activityLevelNumbers[activityLevel]

    let searchTerms = "any"
    if (req.body.searchTerms) {
      searchTerms = encodeURIComponent(req.body.searchTerms)
    }

    const meal_type = req.body.meal_type
    let calories = calculateCalories(age, sex, weight, height, activityMultiplier) * 0.33
    if (!calories) {calories = 600}
    const healthConditions = req.body.healthConditions ? req.body.healthConditions : ""
    const cuisineType = req.body.cuisineType ? req.body.cuisineType : ""
    const recipes = await getRecipes(searchTerms, meal_type, calories, healthConditions, cuisineType)
    res.status(200).json({ recipe: recipes })
  }



async function getRecipes(searchTerms, mealType, calories, healthConditions, cuisineType) {
/*returns an array of 10 recipes */
let minCalories = 0
if (calories - 50 > 0) {
  minCalories = calories - 50
}
const maxCalories = calories + 50
const rangeCalories = minCalories.toString() + "-" + maxCalories.toString()
if (!mealType) { 
    mealType="any" }
  console.log(`Search Params: ${mealType}, ${rangeCalories}, ${searchTerms}`)
  let reqURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerms}&app_id=${APP_ID}&app_key=${APP_KEY}&meal_type=${mealType}&calories=${rangeCalories}`
  if (healthConditions) {
    reqURL += `&health=${healthConditions}&random=true`
  }

  if (cuisineType) {
    reqURL += `&cuisineType=${cuisineType}`
  }
    let res = await fetch(reqURL)
    res = await res.json()
    const shuffled = res.hits.sort(() => 0.5 - Math.random())
    const slicedRecipes = shuffled.slice(0, 6)
    const recipes = []
    slicedRecipes.forEach((element, index) => {
      recipes.push({
      name: element['recipe']['label'],
      id: element['recipe']['uri'],
      img: element['recipe']['image'],
      ingredient_num: element['recipe']['ingredients'].length,
      time: element['recipe']['totalTime']
      })
    })
    return recipes
}

function calculateCalories(age, sex, weight, height, activityLevel) {
  
  if (sex == "F") {
        return activityLevel * 9.247 * weight + 3.098 * height - 4.330 * age + 447.593
    } else {
        return activityLevel * 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
    }
}