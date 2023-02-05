import Terra from "terra-api";

// AUTH BEFORE.  
// calories_data => get BMR by default.
// net_activity_calories => for that time period
export default function getTerraUserData(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);

    const data = {
        userId: "4bb0f073-cba8-416a-8515-92c7103218b1",
        apiKey: process.env.API_KEY,
        devId: process.env.DEV_ID,
        toWebhook: false,
    }
    
    terra
        .getUser(data)
        .then((res) => {
        if (res.status == "success") {
            console.log(res.data)
            res.status(200).json({ data: res.data })
        }
        else {
            console.log(res.status);
            res.status().json({ message: 'Something went wrong.'})
        }
      })

}