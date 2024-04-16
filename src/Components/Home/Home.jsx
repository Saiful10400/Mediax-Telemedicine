import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;