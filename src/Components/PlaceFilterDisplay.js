import React from "react";
import { NearbySpots } from "./NearbySpots";
import { PlaceResultMain } from "./PlaceResultMain";
import { PlaceAutosuggestion } from "./PlacesAutosuggestion";
import { find } from "lodash";
import Areas from "../CityData/Areas";

export class PlaceFilterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasFetched: false,
      place: null,
      suggestedPlaces: null
    };
    this.elementRef = React.createRef();
  }

  updateAreaFromPlace = place => {
    if (Areas[place.area]) {
      this.props.updateArea(place.area);
    }
  };

  fetchPlaceInfo = (scrollElementRef, place) => {
    this.updateAreaFromPlace(place);
    let suggestions = this.state.suggestedPlaces || [];
    const placeInSuggestions = find(
      this.state.suggestedPlaces,
      p => p.key === place.key
    );
    if (!placeInSuggestions) {
      suggestions = [place, ...suggestions];
    }
    this.setState((state, props) => {
      return { place: place, suggestedPlaces: suggestions };
    });
  };
  render() {
    return (
      <div ref={this.elementRef}>
        <PlaceAutosuggestion
          onPlaceSelected={place => {
            this.fetchPlaceInfo(this.elementRef, place);
          }}
          onSearchChanged={newValue => {
            if (newValue.length === 0) {
              this.setState({ place: null, suggestedPlaces: null });
            }
          }}
          currentArea={this.props.currentArea}
        />
        <div style={{ textAlign: "left" }}>
          <PlaceResultMain place={this.state.place} />
          {this.state.suggestedPlaces &&
            false &&
            this.state.suggestedPlaces.length > 0 && (
              <NearbySpots suggestedPlaces={this.state.suggestedPlaces} />
            )}
        </div>
      </div>
    );
  }
}

export default PlaceFilterDisplay;
