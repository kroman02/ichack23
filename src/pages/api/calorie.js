export default function handler(req, res) {
    console.log(req.body)
    const age = req.body.age
    const sex = req.body.sex
    const weight = req.body.weight_kg
    const height = req.body.height_m
    const activityLevel = req.body.activityLevel
    
    let calcCalories = calculateCalories(age, sex, weight, height, activityLevel)
    const calories = calcCalories ? calcCalories : 2000
    
    res.status(200).json({ calories: calories })
  }


function calculateCalories(age, sex, weight, height, activityLevel) {
    if (sex == "F") {
        return activityLevel * 9.247 * weight + 3.098 * height - 4.330 * age + 447.593
    } else {
        return activityLevel * 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
    }
}