import React from 'react';
import Axios from 'axios';
import Modal from 'terra-modal';
import Button from 'terra-button';
import Control from 'terra-form/lib/Control';
import i18nSupportedLocales from 'terra-i18n/lib/i18nSupportedLocales';

class ConfigModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      dir: 'ltr',
      locale: 'en-US',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);

  }

  componentDidMount() {
    this.setState({dir: document.documentElement.getAttribute('dir')});
    this.setState({locale: document.documentElement.getAttribute('lang')});
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleDirChange(e) {
    this.setState({ dir: e.target.value });
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    // Axios({
    //   method: 'get',
    //   url: '/home/',
    //   responseType: 'json',
    //   headers: ReactOnRails.authenticityHeaders(),
    //   data: { data: this.state }
    // }).then(res => {
    //   this.setState({ isOpen: false });
    // });
  }


  render() {
    const myLocales = i18nSupportedLocales.map((locale, index) =>
      <Control
        key={index}
        type="radio"
        labelText={locale}
        name="select_locale"
        value={locale}
        onChange={this.handleLocaleChange}
        checked={this.state.locale === locale}
      />
    );

    const myDirs = ['ltr','rtl'].map((dir, index) =>
      <Control
        key={index}
        type="radio"
        labelText={dir}
        name="select_dir"
        value={dir}
        onChange={this.handleDirChange}
        checked={this.state.dir === dir}
      />
    );

    return (
      <div>
        <Modal
          ariaLabel="Config Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnOutsideClick={false}
          closeOnEsc={false}
        >
          <div dir="ltr">
            <h1>Config Modal</h1>
            <hr />
            <form onSubmit={this.handleSubmit} >
              <p>Directionality:</p>
              {myDirs}
              <br />
              <p>Locale:</p>
              {myLocales}
              <br />
              <Button type="submit" >{'Submit / Close'}</Button>
            </form>
          </div>
        </Modal>
        <Button onClick={this.handleOpenModal}>Config</Button>
      </div>
    );
  }
}

export default ConfigModal;
