import React, { useState, useEffect } from "react";
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

const Card = styled.div`
  background-color: #D3D3D3;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const EpisodeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const EpisodeHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const EpisodeParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Container>
      <h1>Your Favorite Episodes</h1>
      {favorites.length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        favorites.map((episode, index) => (
          <Card key={index}>
            <EpisodeHeading>
              {episode.episode} : {episode.title}
            </EpisodeHeading>
            <EpisodeParagraph>{episode.description}</EpisodeParagraph>

            <audio controls>
              <source src={episode.file} type="audio/mpeg" />
            </audio>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Favourites;
