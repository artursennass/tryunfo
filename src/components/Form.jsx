import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
    haveSuperTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
      if (hasTrunfo) {
        return <p>Você já tem um Super Trunfo em seu baralho</p>;
      }
      return (
        <label htmlFor="isSuper">
          <input
            type="checkbox"
            name="cardTrunfo"
            id="isSuper"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            className="input"
          />
          Super Trybe Trunfo
        </label>);
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
        hasTrunfo,
        isSaveButtonDisabled,
        onInputChange,
        onSaveButtonClick,
        remainingPoints,
      } = this.props;

      return (
        <form
          action=""
          className="main-form"
        >
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="cardName"
              id="name"
              placeholder="Nome"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              className="input"
            />
          </label>

          <br />
          <label htmlFor="description">
            Descrição da carta:
            <br />
            <textarea
              name="cardDescription"
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
              className="textarea"
            />
          </label>

          <br />
          <label htmlFor="attr01">
            Mana
            <input
              type="number"
              id="attr01"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="input"
            />
          </label>

          <br />
          <label htmlFor="attr02">
            Atk
            <input
              type="number"
              id="attr02"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="input"
            />
          </label>
          <br />
          <label htmlFor="attr03">
            Def
            <input
              type="number"
              id="attr03"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="input"
            />
          </label>
          <br />
          <p>
            Pontos restantes =
            {' '}
            { remainingPoints }
          </p>
          <p>
            Cada atributo
            {' '}
            {'->'}
            {' '}
            máximo 90 pontos.
          </p>
          <br />
          <label htmlFor="image">
            Imagem (URL)
            <input
              type="text"
              name="cardImage"
              id="image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              className="input"
            />
          </label>
          <br />
          <label htmlFor="rarity">
            Raridade:
            <select
              name="cardRare"
              id="rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              className="input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <br />
          {this.haveSuperTrunfo(hasTrunfo, cardTrunfo, onInputChange)}
          <br />
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="input btn btn-secondary"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  remainingPoints: PropTypes.string.isRequired,
};
