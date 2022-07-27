import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  render() {
    const { onInputChange,
      searchByName,
      searchByRarity,
      searchSuper } = this.props;

    return (
      <form>
        Filtros de busca
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
          />
        </label>
        <br />
        <label htmlFor="searchByRarity">
          <select
            name="searchByRarity"
            id="searchByRarity"
            data-testid="rare-filter"
            // defaultValue="todas"
            value={ searchByRarity }
            onChange={ onInputChange }
            disabled={ searchSuper }
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
          />
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
