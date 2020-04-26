import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './movieRow';

class MovieList extends Component {

    componentDidMount() {
        console.log(this.context);
    }
    

    render() { 
    return ( <UserContext.Consumer>
            {userContext => <div>Movie List {userContext} <MovieRow></MovieRow></div>}
        </UserContext.Consumer> );
    }
}

MovieList.contextType = UserContext;
 
export default MovieList;