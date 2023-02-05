import Terra from "terra-api";

// AUTH BEFORE.  
// calories_data => get BMR by default.
// net_activity_calories => for that time period
export default function getTerraActivityData(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
    
    // A day will be the ideal timeframe. A whole day, gives accurate readings.
    // These should be supplied by the POST request.
    const endDate = new Date("2023-02-04T10:26:02.066314+00:00")
    const startDate = new Date("2023-02-03T10:26:02.066314+00:00")

    const data = {
        userId: "0f37ee8e-7ffd-45d9-98aa-acf7200034e1",
        startDate: startDate,
        endDate: endDate,
        toWebhook: false,
    }
    

    let dataToGive = []
    try {
        // terra
        // .getBody(data)
        // .then((response) => {
        //     if(response.status == "success") {
        //         console.log(response)
        //         dataToGive.push(response.data)  
        //     }
        //     else {
        //         console.log(response.status)
        //     }
        // })
        data = [
            {
              "BMI": 32.50776400712309,
              "BMR": 1394,
              "RMR": 1147,
              "bodyfat_percentage": 54.671355257540235,
              "bone_mass_g": 26.23451211062149,
              "estimated_fitness_age": 5,
              "height_cm": 189.52403745341394,
              "insulin_type": "rapid-acting",
              "insulin_units": 712.5032852614927,
              "lean_mass_g": 32.76735499410503,
              "measurement_time": "2022-09-28T17:07:44.088838+00:00",
              "muscle_mass_g": 17.370394453888736,
              "skin_fold_mm": 1.008773981862321,
              "urine_color": null,
              "water_percentage": 43.27710183456547,
              "weight_kg": 59.413957983401794
            },
        ]
        return res.status(200).json(data)

    } catch (error) {
       return res.status(409).json({message: error.message});
    }

    // res.status(200).json("Successfully got data!")
}