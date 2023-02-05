import Terra from "terra-api";

// AUTH BEFORE.  
// calories_data => get BMR by default.
// net_activity_calories => for that time period
export default function getTerraUserData(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);

    const data = {
        userId: req.body.userId,
        toWebhook: false,
    }

    try {
        terra
        .getAthlete(data)
        .then((response) => {
            if(response.status == "success") {
                console.log(response.data)
                return res.status(201).json("Successfully retrieved athlete data.");
            }
            else {
                console.log(response.status)
            }
        })
        //res.status(201).json("Successfully retrieved athlete data.");

    } catch (error) {
        return res.status(409).json({message: error.message});
    }

}