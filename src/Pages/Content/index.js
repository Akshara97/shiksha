import React from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../Filter/FilterIcons';
import ItemList from '../ItemList';
import List from '../../images/list.svg';
import Grid from '../../images/grid.svg';

class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isGridView: false
    };
  }

  gridView = () => {
    this.setState({
      isGridView: true
    });
  };

  listView = () => {
    this.setState({
      isGridView: false
    });
  };

  render() {
    const { className, children } = this.props;
    const { isGridView } = this.state;

    return (
      <div>
        <h3 className="heading">Home</h3>
        <p>
          When you star items,they'll show up here for easy access.
          <a href="#">Learn more</a>
        </p>

        <FilterIcon
          isGridView={isGridView}
          gridView={this.gridView}
          listView={this.listView}
          {...this.props}
        />

        <div
          className={`upload-list ${isGridView ? 'isGridView' : 'isListView'}`}
        >
          <ItemList />
          <ItemList />
          <ItemList />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
