// Weather.tsx
import { MoonLoader } from "react-spinners";
import { useGlobalContext } from "../contexts/hook";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};



const Weather = ({onClose}:{onClose: ()=>void}) => {
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
  
  
  const addingZeros = ()=>{
    const date = (location.localtime.split(" ")[0])
    const time = (location.localtime.split(" ")[1])
    let changedTime;

    if(time.length===4){
      changedTime = "0" + time;
    } else{
      changedTime = time; 
    }

    const newTime = date + " " + changedTime;
    return newTime;
  }
  

  return (
    <>
    <div className="white-background">
      <div className="full-screen-container d-flex">
        <div className="country-label">{location.country}</div>
        <img src={image} alt="country" className="full-screen-image" />
        <div className="side-content">
          <img src={current.condition.icon} alt="condition" className="img-fluid weather-icon"/>
          <h1 className="weather-text mb-4" style={{wordWrap: "break-word",color: "#fff"}}>{current.condition.text}</h1>
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
          <h3 className="my-5 location-data" style={{wordWrap: "break-word", color: "#fff"}} >{location.name}, {location.country}</h3>
          <h1 style={{color: "#fff"}}>{addingZeros()}</h1>
          <button className="btn btn-primary mt-3" onClick={onClose}>Search City</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Weather