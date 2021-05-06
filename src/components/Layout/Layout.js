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
  farenheit,
  conversion,
  searchCity,
  city,
  setCity,
  resultsSearch,
  currentLocation,
  message,
}) => {
  return (
    <Container>
      <LocationContainer>
        {showSearch ? (
          <Search
            setShowSearch={setShowSearch}
            searchCity={searchCity}
            city={city}
            setCity={setCity}
            resultsSearch={resultsSearch}
            currentLocation={currentLocation}
            message={message}
          />
        ) : (
          <Location
            setShowSearch={setShowSearch}
            data={dataLocation}
            isLoading={isLoading}
            imagesWeather={imagesWeather}
            today={today}
            getLocation={getLocation}
            farenheit={farenheit}
            conversion={conversion}
            message={message}
          />
        )}
      </LocationContainer>
      {children}
      <Footer>created by Lorraine </Footer>
    </Container>
  );
};

export { Layout };
