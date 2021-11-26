


const FindIdMovieReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'FIND_ID_MOVIE': {
            const newIdMovie = action.payload;
            // newIdMovie.shift();
            return newIdMovie;
        }
        
        default:
            return state;
    }
}

export default FindIdMovieReducer;