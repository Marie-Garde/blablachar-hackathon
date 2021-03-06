import FrontPage from "./FrontPage";
import styled from "styled-components";

const ImageDuHaut = styled.img`
  width: 100%;
  box-shadow: 3px 5px 5px #797474;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  font-family: Cinzel decorative;
  text-align: center;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 3px 3px 3px #797474;
  background-color: #fcf6ee;
  padding-top: 2vh;
  padding-bottom: 4vh;
`;

const FlexBoxHaut = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  background-color: #fcf6ee;
  box-shadow: 3px 3px 3px #797474;
  padding-bottom: 4vh;
  padding-top: 4vh;
`;

const ZonePostATrip = styled.div`
  border-radius: 20px;
  box-shadow: 3px 5px 3px #797474;
  display: block;
  width: 30%;
  height: 40%;
  transition: 0.5s ease;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #e4b95e;
  }
`;

const PostATrip = styled.img`
  width: 30%;
  height: 20%;
  padding-left: 1vw;
`;

const ContainerTextPostATrip = styled.h2`
  transition: 0.5s ease;
  font-size: 2em;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-family: Cinzel decorative;
`;

const ChariotType = styled.img`
  width: 30%;
  height: 20%;
  padding-left: 1vw;
`;

const ContainerTextChariot = styled.h2`
  transition: 0.5s ease;
  font-size: 2em;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-family: Cinzel decorative;
`;

const ZoneChariot = styled.div`
  border-radius: 20px;
  box-shadow: 3px 5px 3px #797474;
  display: block;
  width: 30%;
  height: 40%;
  transition: 0.5s ease;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #e4b95e;
  }
`;

const ZoneSafety = styled.div`
  border-radius: 20px;
  box-shadow: 3px 5px 3px #797474;
  display: block;
  width: 30%;
  height: 40%;
  transition: 0.5s ease;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #e4b95e;
  }
`;

const Safety = styled.img`
  width: 30%;
  height: 20%;
  padding-left: 1vw;
`;

const ContainerTextSafety = styled.h2`
  transition: 0.5s ease;
  font-size: 2em;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-family: Cinzel decorative;
`;

const Fond = styled.div`
  width: 80%;
  background-color: #fcf6ee;
  height: 100%;
  width: 80%;
  padding-bottom: 5%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 3px 3px 3px #797474;
  width: 80%;
`;

const Warper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const Trait1 = styled.div`
  background-color: #e4b95e;
  height: 3px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
`;

const ListDrivers = ({ profile }) => {
  return (
    <div>
      <ImageDuHaut src="/photos/charTableau.jpg" alt="Course de char" />
      <FlexBoxHaut>
        <ZonePostATrip>
          <PostATrip src="/photos/suitcase.png" alt="Post a Trip"></PostATrip>
          <ContainerTextPostATrip>Post a trip</ContainerTextPostATrip>
        </ZonePostATrip>
        <ZoneChariot>
          <ChariotType src="/photos/cartwheel.png" alt="Char"></ChariotType>
          <ContainerTextChariot>Chariots</ContainerTextChariot>
        </ZoneChariot>
        <ZoneSafety>
          <Safety
            src="/photos/hazard-sign.png"
            alt="Safety instructions"
          ></Safety>
          <ContainerTextSafety>Safety instructions</ContainerTextSafety>
        </ZoneSafety>
      </FlexBoxHaut>
      <Trait1></Trait1>
      <H1>Availables trips</H1>
      <Trait1></Trait1>
      <Fond>
        <Warper>
          {profile.map((item) => (
            <FrontPage key={item.id} profile={item} />
          ))}
        </Warper>
      </Fond>
    </div>
  );
};

export default ListDrivers;
