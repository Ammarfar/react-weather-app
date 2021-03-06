import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">City</p>
                    <p className="weather-description">Description</p>
                </div>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons/01d.png`}
                />
            </div>
            <div className="bottom">
                <p className="temperature">24°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">25°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">100 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">30%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">30 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;