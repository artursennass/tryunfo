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

  filterSaveButtonClickArray = (event) => {
    const { value } = event.target;
    const { saveButtonClickArray } = this.state;
    const filteredSaveButtonClickArray = saveButtonClickArray
      .filter((e) => e.cardName.includes(value));

    this.setState({
      saveButtonClickArray: filteredSaveButtonClickArray,
    });
  }

  delThisCard = (thisCardName, thisCardDesc, isTrunfo) => {
    const { saveButtonClickArray } = this.state;
    const newDeletedArray = saveButtonClickArray
      .filter((e) => e.cardName !== thisCardName && e.cardDescription !== thisCardDesc);

    this.setState({
      saveButtonClickArray: newDeletedArray,
    });

    if (isTrunfo) {
      this.setState({
        hasTrunfo: false,
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
          <div>
            <label htmlFor="search">
              Filtros de busca
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Nome da carta"
                data-testid="name-filter"
                onChange={ this.filterSaveButtonClickArray }
              />
            </label>
          </div>
          <div>
            {saveButtonClickArray.map((e, i) => {
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
        </section>
      </div>
    );
  }
}

export default App;
