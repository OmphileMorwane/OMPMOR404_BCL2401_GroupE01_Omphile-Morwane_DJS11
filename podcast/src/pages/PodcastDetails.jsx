import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg || "#f5f5f5"};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: calc(100vh - 100px);
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text_primary || "#000"};
  font-size: 24px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary || "#666"};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SeasonsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  gap: 20px;
`;

const SeasonCard = styled.div`
  flex: 0 0 200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

const SeasonImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const SeasonTitle = styled.h2`
  color: black;
  font-size: 20px;
  margin-bottom: 8px;
`;

const SeasonDescription = styled.p`
  color: ${({ theme }) => theme.text_secondary || "#666"};
  font-size: 14px;
  line-height: 1.5;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary || "#000"};
  text-align: center;
  margin-top: 20px;
`;

const PodcastDetails = () => {
  const { id } = useParams();
  const [podcastShow, setPodcastShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching podcast data...");
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response data:", data);
        setTimeout(() => {
          setPodcastShow(data);
          setLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [id]);

  const handleSelectedSeason = (seasonIndex) => {
    console.log("Selected season index:", seasonIndex);
    setSelectedSeason(podcastShow.seasons[seasonIndex]);
  };

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (!podcastShow) {
    return <LoadingMessage>Error loading podcast details</LoadingMessage>;
  }

  return (
    <Container>
      <HeaderSection>
        <Image src={podcastShow.image} alt="Podcast cover" />
        <div>
          <Title>{podcastShow.title}</Title>
          <Description>{podcastShow.description}</Description>
        </div>
      </HeaderSection>
      <SeasonsContainer>
        {podcastShow.seasons.map((season, index) => (
          <SeasonCard key={season.season}>
            <SeasonImage
              src={season.image}
              alt={`Season ${season.season} cover`}
            />
            <SeasonTitle>{season.title}</SeasonTitle>
            <SeasonDescription>{season.description}</SeasonDescription>
            <button onClick={() => handleSelectedSeason(index)} className="episodeBtn">
              Open Episodes
            </button>
          </SeasonCard>
        ))}
      </SeasonsContainer>
      {selectedSeason && (
        <div>
          {selectedSeason.episodes.map((episode, index) => (
            <div key={index}>
              <h2 className="episodeHeading">
                {episode.episode} : {episode.title}
              </h2>
              <p className="episodeParagraph">{episode.description}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default PodcastDetails;