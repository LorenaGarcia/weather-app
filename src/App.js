import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { DaysContainer, Wheater } from "./components/Layout/Layout.styles";
import { Layout } from "./components/Layout";
import { Days } from "./components/Days";
import { Hightlights } from "./components/Hightlights";
import { Spinner } from "./components/Spinner";

import c from "../src/images/clear.png";
import lr from "../src/images/lightRain.png";
import sn from "../src/images/snow.png";
import sl from "../src/images/sleet.png";
import h from "../src/images/hail.png";
import t from "../src/images/thunderstorm.png";
import hr from "../src/images/heavyRain.png";
import s from "../src/images/shower.png";
import hc from "../src/images/heavyCloud.png";
import lc from "../src/images/lightCloud.png";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [coordsLocation, setCoordsLocation] = useState(null);
  const [dataLocation, setDataLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [today, setToday] = useState(null);
  const [farenheit, setFarenheit] = useState(false);
  const [city, setCity] = useState(null);
  const [resultsSearch, setResultsSearch] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      funcionSiTodoVaBien,
      errorGeolocation
    );
  }, []);

  useEffect(() => {
    if (coordsLocation) {
      getLocation();
    }
  }, [coordsLocation]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  }, [message]);

  useEffect(() => {
    if (dataLocation.time) {
      var fecha = new window.Date(dataLocation.time);
      var options = {
        weekday: "short",
        day: "numeric",
        month: "short",
      };

      setToday(fecha.toLocaleDateString("en-EN", options));
    }
  }, [dataLocation]);

  const funcionSiTodoVaBien = (pos) => {
    setIsLoading(true);
    setCoordsLocation(pos.coords.latitude + "," + pos.coords.longitude);
    setIsLoading(false);
  };

  const errorGeolocation = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setCoordsLocation("19.431900,-99.132851");
        setMessage("Location permission was denied");
        // El usuario denegó el permiso para la Geolocalización.
        break;
      case error.POSITION_UNAVAILABLE:
        setMessage("Location is not available");
        // La ubicación no está disponible.
        break;
      case error.TIMEOUT:
        setMessage("An error occurred");
        // Se ha excedido el tiempo para obtener la ubicación.
        break;
      case error.UNKNOWN_ERROR:
        setMessage("An error occurred");
        // Un error desconocido.
        break;
    }
  };

  const getLocation = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${coordsLocation}`
      );
      currentLocation(data[0].woeid);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const currentLocation = async (woeid) => {
    setIsLoading(true);
    setShowSearch(false);
    setCity("");
    try {
      const { data } = await axios.get(
        `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woeid}/`
      );
      setDataLocation(data);
      setResultsSearch({});
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const imagesWeather = (weatherState) => {
    if (weatherState === "c") {
      return c;
    } else if (weatherState === "lr") {
      return lr;
    } else if (weatherState === "sn") {
      return sn;
    } else if (weatherState === "sl") {
      return sl;
    } else if (weatherState === "h") {
      return h;
    } else if (weatherState === "t") {
      return t;
    } else if (weatherState === "hr") {
      return hr;
    } else if (weatherState === "s") {
      return s;
    } else if (weatherState === "hc") {
      return hc;
    } else if (weatherState === "lc") {
      return lc;
    } else {
      return c;
    }
  };

  const conversion = (celsius) => {
    setIsLoading(true);
    var farenheit = (celsius * 9) / 5 + 32;
    setIsLoading(false);
    return farenheit;
  };

  const searchCity = async () => {
    if (city) {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${city}`
        );
        setResultsSearch(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    } else {
      setMessage("Enter a city");
    }
  };

  return (
    <Layout
      showSearch={showSearch}
      setShowSearch={setShowSearch}
      dataLocation={dataLocation}
      isLoading={isLoading}
      imagesWeather={imagesWeather}
      today={today}
      getLocation={getLocation}
      farenheit={farenheit}
      conversion={conversion}
      searchCity={searchCity}
      city={city}
      setCity={setCity}
      resultsSearch={resultsSearch}
      currentLocation={currentLocation}
      message={message}
    >
      {isLoading ? (
        <>
          <DaysContainer>
            <Spinner />
          </DaysContainer>
          <Wheater></Wheater>
        </>
      ) : (
        <>
          <DaysContainer>
            <Days
              setFarenheit={setFarenheit}
              farenheit={farenheit}
              conversion={conversion}
              isLoading={isLoading}
              data={dataLocation}
              imagesWeather={imagesWeather}
            />
          </DaysContainer>
          <Wheater>
            <Hightlights isLoading={isLoading} data={dataLocation} />
          </Wheater>
        </>
      )}
    </Layout>
  );
}

export default App;
