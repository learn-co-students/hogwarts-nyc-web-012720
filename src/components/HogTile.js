import React, { Component } from 'react';

export default class HogTile extends Component {
  state = {
    displayDetails: false,
    hide: true
  };

  renderImage = () => {
    let splitWord = this.props.hog.name
      .toLowerCase()
      .split(' ')
      .join('_');

    let url = require(`../hog-imgs/${splitWord}.jpg`);
    return url;
  };

  handleClick = () => {
    this.setState({
      displayDetails: !this.state.displayDetails,
      ...this.state.hide
    });
  };
  handeHide = () => {
    this.setState({ ...this.state.displayDetails, hide: !this.state.hide });
  };
  displayDetailsHog = () => {
    return (
      <div class='description'>
        <h3>Name: {this.props.hog.name}</h3>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
      </div>
    );
  };

  normalDisplay = () => {
    return (
      <div className='ui card'>
        <div className='image'>
          <img src={this.renderImage()} alt='' onClick={this.handleClick} />
        </div>
        <div className='content'>
          <a className='header'>{this.props.hog.name}</a>
        </div>
        {this.state.displayDetails ? this.displayDetailsHog() : null}
      </div>
    );
  };

  render() {
    return (
      <div className='ui eight wide column'>
        <button onClick={this.handeHide}>
          {this.state.hide ? 'Hide me?' : 'Unhide me'}
        </button>
        {this.state.hide ? this.normalDisplay() : null}
      </div>
    );
  }
}
