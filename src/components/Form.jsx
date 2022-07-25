import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <label htmlFor="description">
          Descrição:
          <br />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <label htmlFor="attr01">
          Attr01
          <input
            type="number"
            id="attr01"
            name="attr01"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <label htmlFor="attr02">
          Attr02
          <input
            type="number"
            id="attr02"
            name="attr02"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr03">
          Attr03
          <input
            type="number"
            id="attr03"
            name="attr03"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <p>Pontos restantes = </p>
        <br />
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rarity">
          Raridade:
          <select
            name="rarity"
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito-raro">Muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="isSuper">
          <input
            type="checkbox"
            name="isSuper"
            id="isSuper"
            ata-testid="trunfo-input"
            value={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <br />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
