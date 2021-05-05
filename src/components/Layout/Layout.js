import React from "react";
import { Container, LocationContainer, Footer } from "./Layout.styles";
import { Location } from "../Location";
import { Search } from "../Search";

const Layout = ({
  children,
  setShowSearch,
  showSearch,
  dataLocation,
  isLoading,
  imagesWeather,
  today,
  getLocation,
}) => {
  return (
    <Container>
      <LocationContainer>
        {showSearch ? (
          <Search setShowSearch={setShowSearch} />
        ) : (
          <Location
            setShowSearch={setShowSearch}
            data={dataLocation}
            isLoading={isLoading}
            imagesWeather={imagesWeather}
            today={today}
            getLocation={getLocation}
          />
        )}
      </LocationContainer>
      {children}
      <Footer>created by Lorraine </Footer>
    </Container>
  );
};

export { Layout };
