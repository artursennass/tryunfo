import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class DeckCompiler extends Component {
  render() {
    const { filteredSaveButtonClickArray } = this.props;

    return (
      <div>
        {filteredSaveButtonClickArray.map((e, i) => {
          const thisCardId = e.cardName + i;
          return (
            <div key={ thisCardId }>
              <Card { ...e } id={ thisCardId } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={
                  () => this.delThisCard(e.cardName, e.cardDescription, e.cardTrunfo)
                }
              // essa estrutura de usar uma função anonima dentro do onClick eu peguei em: https://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
              >
                Excluir
              </button>
            </div>
          );
        }) }
      </div>
    );
  }
}

DeckCompiler.propTypes = {
  filteredSaveButtonClickArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
