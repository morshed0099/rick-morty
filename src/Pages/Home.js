import React from 'react';
import Bannar from '../Components/Bannar/Bannar';
import Card from '../Components/Card/Card';
import bgImage from '../media/Background.png'

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <Bannar />
                <Card />

            </div>

        </div>
    );
};

export default Home;