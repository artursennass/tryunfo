import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {

    }
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
    } = this.props;
    return (
      <form action="">
        <label htmlFor="name">Nome: </label>
        <input
            type="text"
            name='name'
            id='name'
            placeholder='Nome'
            data-testid="name-input"
            value = { cardName }
            onChange = { onInputChange }
        />
        <br />
        <label htmlFor="description">Descrição: </label>
        <br />
        <textarea
            name="description"
            id="description"
            cols="30"
            rows="10" 
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
        ></textarea>
        <br />
        <label htmlFor="attr01">Attr01</label>
        <input
            type="number"
            id='attr01'
            name='attr01'
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
        />
        <br />
        <label htmlFor="attr02">Attr02</label>
        <input
            type="number"
            id='attr02'
            name='attr02'
            data-testid="attr2-input"    
            value={ cardAttr2 }
            onChange={ onInputChange }
        />
        <br />
        <label htmlFor="attr03">Attr03</label>
        <input
            type="number"
            id='attr03' name='attr03'
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
        />
        <br />
        <p>Pontos restantes = </p>
        <br />
        <label htmlFor="image">Imagem</label>
        <input
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
        />
        <br />
        <label htmlFor="rarity">Raridade:</label>
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
        <br />
        <input
            type="checkbox"
            name="isSuper"
            id="isSuper"
            ata-testid="trunfo-input"
            value={ cardTrunfo }
            onChange={ onInputChange }
        />
        <label htmlFor="isSuper">Super Trybe Trunfo</label>
        <br />
        <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
        >Salvar</button>
      </form>
    );
  }
}
