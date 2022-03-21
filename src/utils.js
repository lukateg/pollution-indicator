import mask from "./image/mask.png";
import exercise from "./image/exercise.png";
import windows from "./image/windows.png";
import purifier from "./image/air-purifier.png";

export const recommendationCheck = (word) => {
  if (word === "exercise") {
    return exercise;
  }
  if (word === "windows") {
    return windows;
  }
  if (word === "mask") {
    return mask;
  }
  if (word === "airPurifier") {
    return purifier;
  }
};

export const handleLinkEnter = (e, route, inputValue) => {
  if (e.charCode === 13) {
    window.location.href = `${route}${inputValue}`;
  }
};

export const aqiBackground = (index) => {
  if (index < 50) {
    return "#a8e05f";
  }
  if (index < 100 && index > 50) {
    return "#fdd64b";
  }
  if (index < 150 && index > 100) {
    return "#ff9b57";
  }
  if (index < 200 && index > 150) {
    return "#fe6a69";
  }
  if (index < 500 && index > 200) {
    return "#a97abc";
  }
};

export const healthCheck = (index) => {
  if (index < 50) {
    return "Good";
  }
  if (index < 100 && index > 50) {
    return "Moderate";
  }
  if (index < 150 && index > 100) {
    return "Uhealthy for sensitive";
  }
  if (index < 200 && index > 150) {
    return "Unhealthy";
  }
  if (index < 250 && index > 200) {
    return "Very unhealthy";
  }
  if (index < 300 && index > 250) {
    return "Hazardous";
  }
};
