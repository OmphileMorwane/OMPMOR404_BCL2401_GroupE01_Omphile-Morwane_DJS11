import React, { useEffect, useState } from "react"; //Imports React and necessary hooks from the react library
import styled from "styled-components"; //Imports styled components for creating styled react components
import { Link } from "react-router-dom"; // Imports Link components for creating styled react components
import FavoriteIcon from "@mui/icons-material/Favorite"; //Import Favorite Icon from Material UI icons
import { PlayArrow } from "@mui/icons-material"; //Imports Playarroe icon from Material UI icons

// Defines a styled div for the play icon
const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;
// Defines a styled div for the card component
const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card || "#fff"};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  &:hover ${PlayIcon} {
    display: flex;
  }
`;
// Defines a styled div for the top section of the card
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
// Defines a styled IconButton for the favorite icon
const Favourite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) =>
    theme.text_secondary + 95 || "#33395"} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;
// Defines a styled img for the card image
const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

// Defines a styled div for the card information
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
// Defines a styled div for the main information section of the card
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
// Defines a styled div for the title section of the card
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary || "#000"};
`;
// Define a styled div for the description section of the card
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  font-size: 12px;
`;

// Defines a styled div for the seasons info section of the card
const SeasonsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;
// Defines a styled div for the season section of the card
const Season = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
// Defines a styled div for the season number section of the card
const SeasonNumber = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary || "#666"};
`;
// Defines a styled div for the updated section of the card
const Updated = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  width: max-content;
`;
// Defines a styled div for the main dashboard layout
const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
// Defines a styled div for the filter container
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg || "#f5f5f5"};
  border-radius: 10px;
  padding: 20px 30px;
`;
// Defines a styled div for the topic section
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary || "#000"};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
// Defines a styled div for the span element
const Span = styled.div`
  color: ${({ theme }) => theme.primary || "#007bff"};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
// Defines a styled div for the podcasts section
const Podcasts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
// Defines the DisplayPodcast component
const DisplayPodcast = ({ podcast }) => (
  <Card>
    <div>
      <Top>
        <Favourite>
          <FavoriteIcon style={{ width: "16px", height: "16px" }} />
        </Favourite>
        <CardImage src={podcast.image} alt="podcast-image" />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>{podcast.title}</Title>
          <Description>{podcast.description}</Description>
          <SeasonsInfo>
            <Season>
              <SeasonNumber>Seasons: {podcast.seasons}</SeasonNumber>
            </Season>
            <Updated>
              Updated: {new Date(podcast.updated).toLocaleDateString()}
            </Updated>
          </SeasonsInfo>
        </MainInfo>
      </CardInformation>
    </div>
    <PlayIcon>
      <PlayArrow style={{ width: "28px", height: "28px" }} />
    </PlayIcon>
  </Card>
);
// Function to get a random subset of podcasts
const getRandomPodcasts = (podcasts, count) => {
  const shuffled = podcasts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
// Define the Dashboard component
export const Dashboard = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  // useEffect hook to fetch podcast data on component mount
  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        // Sort podcasts alphabetically by title
        const sortedPodcasts = data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setPodcasts(data.slice(0, 4));
        setRecommended(getRandomPodcasts(data, 4));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    // Main container for the dashboard
    <DashboardMain>
      {/* Container for the "Podcasts" section */}
      <FilterContainer>
        {/* Header for the "Podcasts" section */}
        <Topic>
          Podcasts
          {/* Link to view all podcasts */}
          <Link
            to={`/showpodcasts/podcasts`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        {/* Container for displaying podcast cards */}
        <Podcasts>
          {/* Map over the podcasts array and display each podcast */}
          {podcasts.map((podcast) => (
            <DisplayPodcast key={podcast.id} podcast={podcast} />
          ))}
        </Podcasts>
      </FilterContainer>

      {/* Container for the "Recommended" section */}
      <FilterContainer>
        <Topic>
          Recommended
          <Link
            to={`/showpodcasts/recommended`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        {/* Container for displaying recommended podcast cards */}
        <Podcasts>
          {/* Map over the recommended array and display each podcast */}
          {recommended.map((podcast) => (
            <DisplayPodcast key={podcast.id} podcast={podcast} />
          ))}
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};
