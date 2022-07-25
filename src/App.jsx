import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveButtonClickArray: [],
    };
  }

  enableSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      // cardRare,
    } = this.state;

    const atributeTotalMax = 210;
    const atributeMax = 90;

    console.log(Number(cardAttr1) < 0);
    // console.log(Number(cardAttr2));
    // console.log(Number(cardAttr3));
    // console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));

    if (
      cardName.length !== 0
        && cardDescription.length !== 0
        && cardImage.length !== 0
        && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= atributeTotalMax
        && Number(cardAttr1) <= atributeMax
        && Number(cardAttr2) <= atributeMax
        && Number(cardAttr3) <= atributeMax
        && (Math.sign(Number(cardAttr1)) === 1 || Math.sign(Number(cardAttr1)) === 0)
        && (Math.sign(Number(cardAttr2)) === 1 || Math.sign(Number(cardAttr2)) === 0)
        && (Math.sign(Number(cardAttr3)) === 1 || Math.sign(Number(cardAttr3)) === 0)
        // && Number(cardAttr1) > 0
        // && Number(cardAttr2) > 0
        // && Number(cardAttr3) > 0
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.enableSaveButton());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const currentCardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      saveButtonClickArray: [...prevState.saveButtonClickArray, currentCardObj],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  render() {
    const { saveButtonClickArray } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <h2>Cartas do baralho:</h2>
          <Card { ...this.state } />
        </section>
        <section>
          <h2>Baralho Atual:</h2>
          {saveButtonClickArray.map((e, i) => <Card { ...e } key={ e.cardName + i } />) }
        </section>
      </div>
    );
  }
}

export default App;
