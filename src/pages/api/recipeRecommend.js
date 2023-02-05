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
    console.log(req.body)
    const age = req.body.age
    const sex = req.body.sex
    const weight = req.body.weight_kg
    const height = req.body.height_m
    const activityMultiplier = activityLevelNumbers['high']
    console.log(activityMultiplier)
    
    // let calcCalories = calculateCalories(age, sex, weight, height, activityLevel)
    // const calories = calcCalories ? calcCalories : 2000
    getRecipes("chicken%20orange")
    

    res.status(200).json({ recipe: "called" })
  }



async function getRecipes(searchTerms) {
"returns an array of two recipes"
  searchTerms = searchTerms ? searchTerms : "chicken%20orange"
  const meal_type = ""

    const reqURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerms}&app_id=${APP_ID}&app_key=${APP_KEY}&meal_type=${meal_type}`

    let res = await fetch(reqURL)
    res = await res.json()
    const slicedRecipes = res.hits.slice(0, 2)
    const recipes = []
    slicedRecipes.forEach((element, index) => {
      const r = {
      label: element['recipe']['label'],
      uri: element['recipe']['uri'],
      image: element['recipe']['image']
      }
      recipes.push(r)
    })
    return recipes
}

function numerateActivityLevel(activityLevel) {

}

function calculateCalories(age, sex, weight, height, activityLevel) {
  
  if (sex == "F") {
        return activityLevel * 9.247 * weight + 3.098 * height - 4.330 * age + 447.593
    } else {
        return activityLevel * 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
    }
}