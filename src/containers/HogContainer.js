import React from 'react';
import HogTile from '../components/HogTile';

class HogContainer extends React.Component {
  state = {
    filter: false,
    sort: 'name',
    hogs: this.props.hogs
  };

  displayHogs = () => {
    let filterHogs = this.state.hogs.filter(
      hog => hog.greased === this.state.filter
    );

    return filterHogs.map(hog => {
      return <HogTile key={hog.name} hog={hog} />;
    });
  };
  handleClick = () => {
    this.setState({ ...this.state, filter: !this.state.filter });
  };
  handleClickName = () => {
    let sortName = this.state.sort;
    let copyHogs = this.state.hogs;

    let sortHogs = copyHogs.sort((a, b) => {
      return a[sortName] > b[sortName] ? 1 : -1;
    });

    this.state.sort === 'name' ? (sortName = 'weight') : (sortName = 'name');
    console.log(sortHogs);
    this.setState({ ...this.state.filter, sort: sortName, hogs: sortHogs });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.filter ? 'Click for not Greased' : 'Click for Greased'}
        </button>
        <button onClick={this.handleClickName}>
          Sort By {this.state.sort}
        </button>
        <div className='ui grid container'>{this.displayHogs()}</div>
      </div>
    );
  }
}
export default HogContainer;
