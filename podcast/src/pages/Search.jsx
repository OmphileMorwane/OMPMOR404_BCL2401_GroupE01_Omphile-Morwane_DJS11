import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Category } from "../utils/Data";
import { DefaultCard } from "../components/DefaultCard";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Searchmain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding; 20px 9px;
  }
`;
const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Categories = styled.div`
  margin: 20px 10px;
`;
const Heading = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  margin: 10px 14px;
`;
const BrowseAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const OtherResults = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 6px;
  padding: 4px 4px;
  @media (max-width: 768px) {
    height: 100%;
    padding: 4px 0px;
  }
`;

export const Search = () => {
  const [searched, setSearched] = useState("");
  const [searchedPodcasts, setSearchedPodcasts] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setSearched(e.target.value);
    setLoading(true);
  };

  return (
    <Searchmain>
      <div className="searchBarContainer">
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }} />
          <input
            type="text"
            placeholder="Search Artist/Podcasts"
            className="searchInput"
            value={searched}
            onChange={(e) => handleChange(e)}
          />
        </SearchBar>
      </div>
      {searched === "" ? (
        <Categories>
          <Heading>Browse All</Heading>
          <BrowseAll>
            {Category.map((category) => (
              <Link
                to={`/showpodcasts/${category.name.toLowerCase}`}
                className="podcastLink"
              >
                <DefaultCard category={category} />
              </Link>
            ))}
          </BrowseAll>
        </Categories>
      ) : (
        <>
          {loading ? (
            <Loader>
              <CircularProgress />
            </Loader>
          ) : (
            <>
              {searchedPodcasts.length === 0 ? (
                <>No Podcasts Found</>
              ) : (
                <>
                  <TopResult />
                  <OtherResults>
                    {searchedPodcasts.map((podcasts) => (
                      <MoreResult podcasts={podcasts} />
                    ))}
                  </OtherResults>
                </>
              )}
            </>
          )}
        </>
      )}
    </Searchmain>
  );
};
