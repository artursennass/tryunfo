import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';
import MagicCard from './MagicCard';

export default class DeckCompiler extends Component {
  render() {
    const { filteredSaveButtonClickArray,
      delThisCard } = this.props;

    return (
      <div className="deck-compiler">
        {filteredSaveButtonClickArray.map((e, i) => {
          const thisCardId = e.cardName + i;
          return (
            <div key={ thisCardId } className="deck-card-div">
              <MagicCard { ...e } id={ thisCardId } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={
                  () => delThisCard(e.cardName, e.cardDescription, e.cardTrunfo)
                }
                className="btn btn-danger exclude"
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
  delThisCard: PropTypes.func.isRequired,
};
