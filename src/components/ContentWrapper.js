import React from 'react';
import MainContent from './MainContent';
import Footer from './Footer';



function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column container">
            <MainContent />
            <Footer />

        </div>
       
    )
}

export default ContentWrapper