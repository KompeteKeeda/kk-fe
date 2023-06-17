import Banner from "../components/banner";
import NewsCard from "../components/newscard";
import EventsCard from "../components/eventscard";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/news-card.scss"
import "../styles/event-card.scss"
import React, { useEffect, useState } from "react";
import { NewsLetter } from "../components/newsLetter";
import { useNavigate } from "react-router-dom";
import { CommonService } from "../services/commonService";
import { News } from "../model/news";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  
  const authService = new CommonService();

  const[allNews, setAllNews] = useState<News[]>([]);

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  var date = new Date("2016-01-04");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Function to make the API call
    const fetchAllNews = async () => {
      try {
        const response = await authService.getAllNews();
        setAllNews(response);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchAllNews(); 
  }, []); 

  return (
    <div>
      <Banner
        title="Join the Desi PUBG revolution"
        description="Conquer the battleground with 'Desi Power'!"
        imageUrl="https://ik.imagekit.io/kompeteKeeda/1186797.jpg?updatedAt=1686496354756"
        redirectUrl="djksbffkb"
        buttonText="Register Now" />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div  className="news-card-container" >
        {allNews.map(({title, content, coverUrl, viewCount, endDate}) => (
          <NewsCard
          id = ""
          title = {title}
          description= {content}
          cover= {coverUrl}
          onClick={() => { navigate(`/news/`) }} />
        ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="event-card-container">
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
          <EventsCard
            title="Pubg Event"
            description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
            cover="/pubg.jpeg"
            venue="Noida"
            date={date}
          />
        </div>
      </TabPanel>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;