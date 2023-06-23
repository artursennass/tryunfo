import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AtributesMagicCard extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.props;
    return (
      <div className="frame-bottom-info inner-margin">
        <div className="fbi-left">
          <p>Projeto Tryunfo</p>
        </div>

        <div className="fbi-center">
          Mana
          <br />
          { cardAttr1 }
        </div>
        <div className="fbi-center">
          Atk
          <br />
          { cardAttr2 }
        </div>
        <div className="fbi-center">
          Def
          <br />
          { cardAttr3 }
        </div>

        <div className="fbi-right">
          Produzido por Artur Senna
        </div>
      </div>
    );
  }
}

AtributesMagicCard.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};
