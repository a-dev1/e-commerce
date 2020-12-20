import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.sass';

const HomePage = (props) => {
    console.log('props from homepage:', props);
    return (
        <div className="homepage">
            {/* <Link to="/hatspage">HatsPage</Link> */}
            <Directory />
        </div>
    )
}

export default HomePage;