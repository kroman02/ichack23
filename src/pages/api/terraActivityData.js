import Terra from "terra-api";

// AUTH BEFORE.  
// calories_data => get BMR by default.
// net_activity_calories => for that time period
export default function getTerraActivityData(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
    
    // A day will be the ideal timeframe. A whole day, gives accurate readings.
    // These should be supplied by the POST request.
    const startDate = new Date("2023-02-02T00:00:00.00Z");
    const endDate = new Date("2023-02-02T00:23:59.59Z");

    // header https://widget.tryterra.co/session/bd2f4fbb-6917-43c2-8ca4-b8d89ffb6b8a/success?user_id=4bb0f073-cba8-416a-8515-92c7103218b1&resource=FITBIT&reference_id=1&lan=en#_=_
    const data = {
        userId: "4bb0f073-cba8-416a-8515-92c7103218b1",
        startDate: startDate,
        endDate: endDate,
        toWebhook: false,
    }
    
    terra
        .getActivity(data)
        .then((res) => {
        if(res.status == "success") {
            console.log(res.data.calories_data)
            res.status(200).json({ data: res.data.calories_data })
        }
        else {
            console.log(res.status);
            return res.status().json({ message: 'Something went wrong.'})
        }
      })

}