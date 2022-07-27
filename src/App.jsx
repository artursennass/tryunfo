import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SearchForm from './components/SearchForm';
import DeckCompiler from './components/DeckCompiler';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MagicCard from './components/MagicCard';
// import './index.css';

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
      searchByName: '',
      searchByRarity: '',
      searchSuper: false,
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
    } = this.state;

    const atributeTotalMax = 210;
    const atributeMax = 90;

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
      trunfoFilter: false,
    }));

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
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
    const { saveButtonClickArray,
      searchByName,
      searchByRarity,
      searchSuper } = this.state;

    const filteredSaveButtonClickArray = saveButtonClickArray
      .filter((e) => (searchSuper
        ? e.cardTrunfo === true : true))
      .filter((e) => (searchByName.length === 0
        ? true : e.cardName.includes(searchByName)))
      .filter((e) => (searchByRarity === 'todas' || searchByRarity === ''
        ? true : e.cardRare === searchByRarity));
    // ajuda de guydoo e hugo leonardo

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
          <SearchForm
            onInputChange={ this.onInputChange }
            searchByName={ searchByName }
            searchByRarity={ searchByRarity }
            searchSuper={ searchSuper }
          />
          <DeckCompiler
            filteredSaveButtonClickArray={ filteredSaveButtonClickArray }
            delThisCard={ this.delThisCard }
          />
        </section>
        {/* <section>
          <MagicCard
            cardName="Atanarón Formen"
            cardDescription="Um cara Muito legal"
            cardAttr1="90"
            cardAttr2="30"
            cardAttr3="55"
            cardImage="https://c4.wallpaperflare.com/wallpaper/125/323/619/art-artwork-fantasy-mage-wallpaper-preview.jpg"
            cardRare="muito raro"
            cardTrunfo
          />
        </section> */}
      </div>
    );
  }
}

export default App;

// https://cdn.discordapp.com/attachments/540615561751822346/578995697987092482/goliath20.png
