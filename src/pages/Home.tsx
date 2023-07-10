import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TablePagination from "@mui/material/TablePagination/TablePagination";
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/banner";
import EventsCard from "../components/eventscard";
import { NewsLetter } from "../components/newsLetter";
import NewsCard from "../components/newscard";
import { Events } from "../model/events";
import { News } from "../model/news";
import { EventsService } from "../services/eventsService";
import { NewsService } from "../services/newsService";
import "../styles/event-card.scss";
import "../styles/news-card.scss";

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

  const newsService = new NewsService();
  const eventsService = new EventsService();

  const [allNews, setAllNews] = useState<News[]>([]);
  const [allEvents, setAllEvents] = useState<Events[]>([]);
  const [limit, setLimit] = useState<number>(6);
  const [offset, setOffset] = useState<number>(0);

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchAllNews();
    fetchAllEvents();
  }, [offset]);

  const fetchAllNews = async () => {
    try {
      console.log(offset);
      console.log(limit);
      const response = await newsService.getAllNews(offset, limit);
      setAllNews(response);
      console.log(allNews);
      console.log(response);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const fetchAllEvents = async () => {
    try {
      const response = await eventsService.getAllEvents();
      setAllEvents(response);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  //needs to be updated
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
    setLimit(limit);
    setOffset(limit * newPage);
    fetchAllNews();
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 6));
    setPage(0);
  };

  return (
    <div>
      <Banner
        title="Join the Desi PUBG revolution"
        description="Conquer the battleground with 'Desi Power'!"
        imageUrl="https://ik.imagekit.io/kompeteKeeda/1186797.jpg?updatedAt=1686496354756"
        redirectUrl="djksbffkb"
        // buttonText="Register Now"
        bannerSize="lg" />
      <Box className="m-t-md m-b-md" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="news-card-container" >
          {allNews.map(({ id, title, content, coverUrl, viewCount, endDate }) => (
            <NewsCard
              id={id}
              title={title}
              description={content}
              cover={coverUrl}
              onClick={() => { navigate(`/news/${id}`) }} />
          ))}
        </div>
        {/* To implement pagination on the list */}
        <div>
          <TablePagination component="div"
            count={24}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          >
          </TablePagination>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="event-card-container">
          {allEvents.map(({ id, title, description, host, venue, prizePool, timestamp, coverUrl, endDate }) => (
            <EventsCard
              id={id}
              title={title}
              description={description}
              venue={venue}
              date={timestamp}
              cover={coverUrl}
              onClick={() => { navigate(`/news/${id}`) }} />
          ))}
        </div>
      </TabPanel>
      <NewsLetter />
    </div>
  );
};

export default Home;