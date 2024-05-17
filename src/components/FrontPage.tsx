// FrontPage.tsx
import { ChangeEvent, useState} from "react";
import { useGlobalContext } from "../contexts/hook";
import axios from "axios";
import Weather from "./Weather";

const FrontPage = () => {
  const [inputText, setInputText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const {  setInputCity, error, setError, setWeatherData, setCountry} = useGlobalContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setInputText(e.target.value);
    setCountry("");
  };

  const fetchData = async()=>{
    if (inputText.trim() !== "") {
      const cityName = inputText.trim();
      const weatherURL =`https://api.weatherapi.com/v1/current.json?key=eb9740e3a7f24c84a5074204241604&q=${cityName}&aqi=no`;

      try {
        const response = await axios.get(weatherURL);
        if (response.status === 200) {
          setInputCity(cityName);
          setCountry(response.data.location.country);
          setWeatherData(response.data);
          setModalOpen(true)
        }
      } catch (error) {
        setError(true)
      }
    } else{
      setError(true)
    }
  }

  const handleClick = () => {
    fetchData();
  };


  return (
    <div>
      <p className="wordart h1 text-center mt-5">
        Weather <span className="app">App</span>
      </p>
      
      <div
        className="d-flex justify-content-center flex-wrap align-items-center form-div"
        style={{ height: "40vh" }}
      >
        <input
          type="email"
          className="form-control full-width-input"
          aria-describedby="emailHelp"
          placeholder="Enter city"
          value={inputText}
          onChange={handleChange}
        />
        <button className="btn btn-primary mx-3" onClick={handleClick}>
          Search
        </button>
      </div>
      {error && <h1 className="text-danger text-center">Enter a valid city</h1>}
      {modalOpen && <Weather onClose={()=>setModalOpen(false)}/>}
    </div>
  );
};

export default FrontPage;
