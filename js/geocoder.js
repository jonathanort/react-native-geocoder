import GoogleApi from "./googleApi.js";

export default {
  apiKey: null,

  fallbackToGoogle(key) {
    this.apiKey = key;
  },

  geocodePosition(position) {
    if (!position || !position.lat || !position.lng) {
      return Promise.reject(new Error("invalid position: {lat, lng} required"));
    }

    if (!this.apiKey) {
      throw err;
    }
    return GoogleApi.geocodePosition(this.apiKey, position);
  },

  geocodeAddress(address) {
    if (!address) {
      return Promise.reject(new Error("address is null"));
    }

    if (!this.apiKey) {
      throw err;
    }
    return GoogleApi.geocodeAddress(this.apiKey, address);
  }
};
