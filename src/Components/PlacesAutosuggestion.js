import React from "react";
import { getByArea } from "../CityData/FullPlaces";
import Areas from "../CityData/Areas";
import Autosuggest from "react-autosuggest";
import { LogEngagementEvent } from "../Logging";
import { AddNewPlaceModal } from "./AddNewPlaceModal";

export class PlaceAutosuggestion extends React.Component {
  maxSuggestions = 8;
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showAddModal: false,
      suggestions: []
    };
  }

  sanitizeInput = input => {
    return input
      .trim()
      .toLowerCase()
      .replace("é", "e");
  };
  getSuggestions = value => {
    const inputValue = this.sanitizeInput(value);
    const inputLength = inputValue.length;
    if (inputLength < 3) {
      return [];
    }
    const results = getByArea(this.props.currentArea)
      .filter(
        place => this.sanitizeInput(place.name).indexOf(inputValue) !== -1
      )
      .slice(0, this.maxSuggestions);
    if (results.length === 0) {
      LogEngagementEvent("user-roadblock", "no-results");
    }
    results.push({ special: "letUsKnowRow" });
    return results;
  };
  getSuggestionValue = suggestion => suggestion.name || "";
  renderSuggestion = suggestion => {
    if (suggestion.special) {
      return (
        <div>
          <div>No encontrás tu local favorio?</div>
          <div>
            <a
              href="mailto:localesdetubarrio@gmail.com"
              className="primary-link"
            >
              Mandanos un mail
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{suggestion.name}</div>
          <div className="autosuggest-address">{suggestion.address}</div>
        </div>
      );
    }
  };
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.onSearchChanged(newValue);
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  renderInputComponent = inputProps => (
    <div className="react-autosuggest__wrapper">
      <div className="react-autosuggest__left-icon">🍽</div>
      <input {...inputProps} />
    </div>
  );

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder:
        "‍Encontra tu local favorito en " + Areas[this.props.currentArea],
      value,
      onChange: this.onChange,
      onFocus: event => {
        LogEngagementEvent("user-action", "search-entered");
      }
    };
    return (
      <div className="autosuggest-outer">
        <AddNewPlaceModal
          shouldShow={this.state.showAddModal}
          onClose={() => this.setState({ showAddModal: false })}
        />
        <Autosuggest
          suggestions={suggestions}
          focusInputOnSuggestionClick={false}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          highlightFirstSuggestion={true}
          renderInputComponent={this.renderInputComponent}
          onSuggestionSelected={(event, data) => {
            if (data.suggestion.special) {
              LogEngagementEvent(
                "user-click",
                "tell-us-missing-place",
                this.state.value
              );
              this.setState({ showAddModal: true });
            } else {
              this.props.onPlaceSelected(data.suggestion);
            }
          }}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
