import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;
    return (
        <div id={id} className='movie card'>
            <div className='card-image'>
                {poster === 'N/A' ? (
                    <img
                        src={`https://via.placeholder.com/300x400.png?text=poster+not+found`}
                        alt='Poster not found'
                    />
                ) : (
                    <img src={poster} alt='Poster not found' />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title'>{title}</span>
                <p>
                    {year} <span className='right'>{type}</span>{' '}
                </p>
            </div>
        </div>
    );
}

export { Movie };
