import React from 'react';
import RowTotalProd from './RowTotalProd';
import RowTotalProdCats from './RowTotalProdCats';
import RowSumaCats from './RowSumaCats';
import RowLastProd from './RowLastProd';
import RowFullProd from './RowFullProd';
import RowFullUsers from './RowFullUsers';



function MainContent() {
    return (
        <div id="content main-content">
            {/* <TopBar />
            <PageContent /> */}
            <RowTotalProd />
            <RowSumaCats />
            <RowTotalProdCats />
            <RowLastProd />
            <RowFullProd />
            <RowFullUsers />
        


        </div>
       
    )
}

export default MainContent