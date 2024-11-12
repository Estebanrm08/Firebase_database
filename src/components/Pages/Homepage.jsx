import React from 'react'
import AboutUs from '../PageContent/AboutUS'
import FinancialCulture from '../PageContent/FinancialCulture'
import Objectives from '../PageContent/Objectives'
import Footer from '../PageContent/Footer'
import Comments from '../PageContent/Comments'
import Expertos from '../PageContent/Expertos'
const Homepage = () => {
    return (
        <div>
            <AboutUs />
            <Objectives />
            <FinancialCulture />
            <Footer />
            <Comments />
            <Expertos />
        </div>
    )
}
export default Homepage