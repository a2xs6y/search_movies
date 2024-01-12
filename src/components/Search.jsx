import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.state.search
                ? this.props.searchMovies(this.state.search, this.state.type)
                : alert('Enter the title!');
        }
    };

    handleFilter = (event) => {
        this.state.search
            ? this.setState(
                  () => ({ type: event.target.dataset.type }),
                  () => {
                      this.props.searchMovies(
                          this.state.search,
                          this.state.type
                      );
                  }
              )
            : alert('Enter the title!');
    };

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field'>
                        <input
                            className='validate'
                            placeholder='enter the title'
                            type='search'
                            value={this.state.search}
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn search-btn'
                            onClick={() =>
                                this.state.search
                                    ? this.props.searchMovies(
                                          this.state.search,
                                          this.state.type
                                      )
                                    : alert('Enter the title!')
                            }
                        >
                            Search
                        </button>
                        <div>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='all'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'all'}
                                />
                                <span>All</span>
                            </label>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='movie'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'movie'}
                                />
                                <span>Movies olnly</span>
                            </label>
                            <label>
                                <input
                                    className='with-gap'
                                    name='type'
                                    type='radio'
                                    data-type='series'
                                    onChange={this.handleFilter}
                                    checked={this.state.type === 'series'}
                                />
                                <span>Series only</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
