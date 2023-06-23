import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AtributesMagicCard from './AtributesMagicCard';
import '../index.css';

export default class MagicCard extends Component {
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
    } = this.props;

    return (
      <div className="card-container">

        <div className="card-background" id={ cardRare }>

          <div className="card-frame">

            <div className="frame-header">
              <h1 data-testid="name-card" className="name">{ cardName }</h1>
            </div>

            <div className="centerImage">
              <img
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
                className="frame-art"
              />
            </div>

            <div className="frame-type-line">
              <h1 data-testid="rare-card" className="type">{ cardRare.toUpperCase() }</h1>
              {cardTrunfo
              && <h1
                data-testid="trunfo-card"
                className="type superTrunfo"
              >
                Super Trunfo
                 </h1>}
            </div>

            <div className="frame-text-box">
              <p
                className="description"
                data-testid="description-card"
              >
                { cardDescription }

              </p>

              <p
                className="flavour-text"
              >
                "Para a todos conquistar."
              </p>

            </div>

            <AtributesMagicCard
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
            />

          </div>

        </div>

      </div>
    );
  }
}

MagicCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
