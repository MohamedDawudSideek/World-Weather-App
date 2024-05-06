// Weather.tsx
import { MoonLoader } from "react-spinners";
import { useGlobalContext } from "../contexts/hook";
import { Link } from "react-router-dom";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};



const Weather = () => {
  const context = useGlobalContext();

  const { image, loading, weatherData } = context;

  if (!weatherData) {
    return (
      <div className="mt-5">
        <MoonLoader color="#36d7b7" loading={loading} cssOverride={override} />
      </div>
    );
  }

  const {location, current} = weatherData  
  

  return (
    <>
    <div className="full-screen-container d-flex">
      <img src={image} alt="city" className="full-screen-image" />
      <div className="side-content">
        <img src={current.condition.icon} alt="condition" className="img-fluid weather-icon"/>
        <h1 className="weather-text mb-4" style={{wordWrap: "break-word"}}>{current.condition.text}</h1>
        <div className="d-flex current-data justify-content-between align-items-center flex-wrap">
            <p className="temp-text">Temperature</p>
            <p>{current.temp_c}°C</p>
        </div>
        <div className="rule my-2"></div>
        <div className="d-flex current-data justify-content-between align-items-center flex-wrap">
          <p>Humidity</p>
          <p>{current.humidity} %</p>
        </div>
        <div className="rule my-2"></div>
        <div className="d-flex current-data justify-content-between align-items-center flex-wrap">
          <p>Visibility</p>
          <p>{current.vis_km} km</p>
        </div>
        <div className="rule my-2"></div>
        <div className="d-flex current-data justify-content-between align-items-center flex-wrap">
          <p>Wind Speed</p>
          <p>{current.wind_kph} km/h</p>
        </div>
        <h3 className="my-5 location-data" style={{wordWrap: "break-word"}}>{location.name}, {location.country}</h3>
        <h1>{location.localtime}</h1>
        <Link to="/weather-app"><button className="btn btn-primary mt-3">Search City</button></Link>
      </div>
    </div>
    </>
  )
}

export default Weather