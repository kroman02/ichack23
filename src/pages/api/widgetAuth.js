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
      authSuccessRedirectUrl: "/", // homepage
      authFailureRedirectUrl: "/login" // current page
    };

    terra
        .generateWidgetSession(data)
        .then((s) => {
            // use the various response elements
              if(s.status == "success") {
                console.log(s.url);
                // redirect the the provided url
                window.location = s.url
              }
              else
              console.log(s.status);
          })
        .catch((error) => console.log("error:", error))
}
  