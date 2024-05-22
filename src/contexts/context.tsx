// context.tsx
import axios from "axios";
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface WeatherData {
  location: {
      country: string;
      localtime: string;
      name: string;
      region: string;
  };
  current: {
      condition: {
          text: string;
          icon: string;
      };
      humidity: number;
      temp_c: number;
      vis_km: number;
      wind_kph: number;
  };
}

interface AppContextProps {
  inputCity: string;
  setInputCity: Dispatch<SetStateAction<string>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  image: string
  weatherData: WeatherData | null;
  setWeatherData: Dispatch<SetStateAction<WeatherData | null>>;
  loading: boolean;
  setCountry: Dispatch<SetStateAction<string>>;
}

export const AppContext = React.createContext<AppContextProps | undefined>(
  undefined
);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");


  const fetchData = async (country: string) => {
    
    const unsplashAPI =
  `https://api.unsplash.com/photos/random?client_id=lQ1eyc4QyqmI8eIs5Gu3uRsC2ek5APyHSy00RPlyoeU&query=${country}`;

  setLoading(true);
  try {
      const response = await axios.get(unsplashAPI);
      if(response.status===200){        
        setImage(response.data.urls.full);
      }
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
    setLoading(false);
  };


  useEffect(() => {
    if(inputCity.trim()!==""){
      fetchData(country);
    }
  }, [inputCity, country]);


  return (
    <AppContext.Provider value={{ inputCity, weatherData, setWeatherData, setInputCity, error, setError, image, loading, setCountry }}>{children}</AppContext.Provider>
  );
};
