import { Box, FormControl, OutlinedInput } from "@mui/material"
import "../styles/news.scss"
import "../styles/newsletter.scss"
import React from "react";
import { CommonService } from "../services/commonService";

export const NewsLetter = () => {
  const [email, setEmail] = React.useState("");
  const commonService = new CommonService();

  function isValidEmail(email : any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleInput = (event : any) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event : any) => {
    event.preventDefault();
    if(email !== "" && isValidEmail(email)) {
      commonService.createSubscriptionEmail(email);
      console.log("Thanks Bro!");
    } else {
      alert("MF input correct email!");
    }
  };

  return (
    <div className="newsletter-container">
      <h1 className="display-4">Subscribe to our news letter</h1>
      <div className="news-letter-input">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput onInput={handleInput}
                id="outlined-adornment-weight"
                placeholder="Enter your email id"
                inputProps={{
                  'aria-label': 'emailID',
                }}
              />
            </FormControl>
          </div>
        </Box>
        <a className="offset secondary-btn on-dark" href=":;javascript" role="button" onClick={handleSubmit}>Subscribe</a>
      </div>
    </div>
  )
}