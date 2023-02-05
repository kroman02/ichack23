// Login into fitbit
// only if user not connected

import Terra from "terra-api";

export default function generateWidgetAuth(req, res) {

    const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);

    const data = {
        referenceID: 1,
        providers: [
        "Google",
        "Garmin",
        "Fitbit",
        "Oura",
        "Polar",
        "Withings",
        "Suunto",
      ],
      showDisconnect: true,
      language: "EN",
      authSuccessRedirectUrl: "", // homepage
      authFailureRedirectUrl: "" // current page
    };

    terra
        .generateWidgetSession(data)
        .then((res) => {
            if(res.status == "success") {
                console.log(res.url);
                return res.status(200).json({ data: res.url })
            } else {
                console.log(res.status);
                return res.status().json({ message: 'Failure getting widget session' })
            }
        });
}
  