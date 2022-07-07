import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Navbar } from "../../components/Navbar";
import { Cards } from "../../components/Cards";

import * as S from "./HomePage.Style";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

import { Featured } from "../../components/Featured";

import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

import antImg from "../../assets/ant.png";
import hotBadge from "../../assets/hot-badge.png";

export const HomePage = () => {
  const { user, loading, error } = useAuth();
  //const [featured, setFeatured] = useState([]);
  const [airing, setAiring] = useState({});
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const fetchAnime = async () => {
    const currentAiring = axios.get("https://api.jikan.moe/v4/seasons/now");
    //const genres = axios.get("https://api.jikan.moe/v4/genres/anime");

    Promise.all([currentAiring])
      .then((results) => {
        const data = results[0].data.data;

        const airingData = data;

        console.log(airingData);
        //const genresData = data[1].data;

        setAiring(airingData);

        //setGenres(genresData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    //fetchAnime();

    return () => {
      console.log("desmontou");
    };
  }, [user, loading]);

  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <S.Featured></S.Featured>
        {/*<Featured airing={airing} />*/}

        <S.Section>
          <S.Title>Current airing</S.Title>
          <S.CurrentAiring>
            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>

            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>

            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>
          </S.CurrentAiring>
        </S.Section>

        {/*<S.Main>
          <S.Title>Continue Watching</S.Title>
          <S.CurrentAiring>
            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>
            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>
            <S.CurrentAiringCard>
              <img src={antImg} alt="" />
              <S.CurrentAiringBody>
                <h3>Title aqui</h3>
              </S.CurrentAiringBody>
            </S.CurrentAiringCard>
          </S.CurrentAiring>
        </S.Main>*/}
      </S.Content>
      <S.RightColumn>
        <S.Profile>
          <FiSearch size={25} />
          <S.UnreadMessages>
            <FaBell size={25} />
            <span>3</span>
          </S.UnreadMessages>

          <S.ProfileImage>
            <img src={antImg} alt="" />
          </S.ProfileImage>
        </S.Profile>
        <S.RightColumnDivider>
          <h1>Popular</h1>
          <p>View All</p>
        </S.RightColumnDivider>
        <S.RightColumnCards>
          <S.RightColumnCard>
            <img src={antImg} alt="" />
            <S.CardBody>
              <h3>Title aqui</h3>
            </S.CardBody>
          </S.RightColumnCard>

          <S.RightColumnCard>
            <img src={antImg} alt="" />
            <S.CardBody>
              <h3>Title aqui</h3>
            </S.CardBody>
          </S.RightColumnCard>

          <S.RightColumnDivider>
            <h1>Watchlist</h1>
            <p>View All</p>
          </S.RightColumnDivider>

          <S.RightColumnCard>
            <img src={antImg} alt="" />
            <S.CardBody>
              <h3>Title aqui</h3>
              <p>Rating: 5</p>
            </S.CardBody>
          </S.RightColumnCard>
        </S.RightColumnCards>
      </S.RightColumn>
      {/*<Cards />*/}
    </S.Container>
  );
};
