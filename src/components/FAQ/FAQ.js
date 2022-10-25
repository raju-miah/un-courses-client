import React, { useContext } from 'react';
import { AuthContext } from '../../UsserContext/UserContext';

const FAQ = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>This is FAQ</h2>
            {user.displayName}
        </div>
    );
};

export default FAQ;