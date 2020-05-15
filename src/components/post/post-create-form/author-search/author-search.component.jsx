import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUserId } from '../../../../redux/users/users.actions';
import { selectUsers } from '../../../../redux/users/users.selectors';
import Autosuggest from 'react-autosuggest';

import './author-search.styles.scss';

// AuthorSearch react-autosuggest component helps to select authors of the new post
const AuthorSearch = ({ users, value, danger, onChange, setCurrentUserId }) => {
  const [suggestions, setSuggestions] = useState(users);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return users.filter(
      (user) => user.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = (suggestion) => {
    setCurrentUserId(suggestion.id);
    return suggestion.name;
  };

  const shouldRenderSuggestions = () => true;

  const renderSuggestion = (suggestion) => (
    <div className="react-autosuggest__suggestion-wrapper">
      <img
        src={suggestion.avatarUrl}
        alt="Author"
        className="react-autosuggest__suggestion-avatar"
      />
      {suggestion.name}
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const inputProps = {
    placeholder: 'Who said?',
    value,
    onChange: onChange,
    className: `react-autosuggest__input ${
      danger ? 'react-autosuggest__input--danger' : ''
    }`,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      shouldRenderSuggestions={shouldRenderSuggestions}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserId: (userId) => dispatch(setCurrentUserId(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorSearch);
