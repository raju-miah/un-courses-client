import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

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