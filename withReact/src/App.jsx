import React, { Component } from 'react';

import snowdenDecrypt from './utils/decoder';
import './App.css';

class App extends Component {
  state = {
    initialText: '',
    decodedText: ''
  };

  decodeTextHandler = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      decodedText: snowdenDecrypt(prevState.initialText)
    }));
  };

  changeInitialTextHandler = evt => {
    this.setState({
      initialText: evt.target.value
    });
  };

  render() {
    const { initialText, decodedText } = this.state;
    return (
      <section className="task">
        <h1 className="task__title">Showden`s decryptor</h1>
        <form onSubmit={this.decodeTextHandler} className="task__form">
          <textarea
            name="initialText"
            id="initialText"
            value={initialText}
            className="task__crypted-data"
            onChange={this.changeInitialTextHandler}
            placeholder="Type your encrypted message..."
            maxLength={100000}
          />
          <button type="submit" onClick={this.decodeTextHandler} className="task__decrypt-button">
            Decrypt that!
          </button>
        </form>
        <p className="task__decrypted-data">{decodedText}</p>
      </section>
    );
  }
}

export default App;
