import React, { useContext } from 'react';
import UserContext from './userContext';

function MovieRow() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const currentUser = useContext(UserContext);
    return (
        <div>
            Movie Row {currentUser}
        </div>
    );
}

export default MovieRow;