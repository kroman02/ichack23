import Terra from "terra-api";
import moment from "moment"

// AUTH BEFORE.  
// calories_data => get BMR by default.
// net_activity_calories => for that time period
export default function getTerraActivityData(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
    
    // A day will be the ideal timeframe. A whole day, gives accurate readings.
    // These should be supplied by the POST request.
    const endDate = "2023-02-05T10:26:02.066314+00:00"
    const startDate = "2023-02-04T10:56:02.066314+00:00"

    const data = {
        userId: "0f37ee8e-7ffd-45d9-98aa-acf7200034e1",
        startDate: "2023-02-04",
        endDate: "2023-02-05",
        toWebhook: false,
    }
    try {
        terra
        .getActivity(data)
        .then((response) => {
            if(response.status == "success") {
                console.log(response.data)
                return res.status(201).json("Successfully retrieved activity data.");
            }
            else {
                console.log(response.status)
            }
        })

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}