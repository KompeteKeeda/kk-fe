import { Box, FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField } from "@mui/material"
import "../styles/news.scss"
import "../styles/newsletter.scss"

export const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="display-4">Subscribe to our news letter</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <div className="news-letter-input">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                placeholder="Enter your email id"
                inputProps={{
                  'aria-label': 'emailID',
                }}
              />
            </FormControl>
          </div>
        </Box>
        <a className="offset secondary-btn on-dark" href="#" role="button">Subscribe</a>
      </div>
    </div>
  )
}