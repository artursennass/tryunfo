import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  render() {
    const { onInputChange,
      searchByName,
      searchByRarity,
      searchSuper } = this.props;

    return (
      <form className="search-form">
        Encontre sua carta:
        <br />
        <label htmlFor="searchByName">
          <input
            type="text"
            name="searchByName"
            id="searchByName"
            placeholder="Nome da carta"
            data-testid="name-filter"
            value={ searchByName }
            onChange={ onInputChange }
            disabled={ searchSuper }
            className="search-by-name"
          />
        </label>
        <br />
        <label htmlFor="searchByRarity">
          <select
            name="searchByRarity"
            id="searchByRarity"
            data-testid="rare-filter"
            value={ searchByRarity }
            onChange={ onInputChange }
            disabled={ searchSuper }
            className="search-by-rarity"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="searchSuper">
          <input
            type="checkbox"
            name="searchSuper"
            id="searchSuper"
            data-testid="trunfo-filter"
            value={ searchSuper }
            onChange={ onInputChange }
            // className="input"
          />
          {' '}
          Super Trybe Trunfo
        </label>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  searchByName: PropTypes.string.isRequired,
  searchByRarity: PropTypes.string.isRequired,
  searchSuper: PropTypes.bool.isRequired,
};
