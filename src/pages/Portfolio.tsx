import '../app/styles/_pages-basic.scss'
import Navbar from "../shared/navbar/Navbar.tsx";
import TitlePage from "../shared/titlePage/TitlePage.tsx";
import WebsiteList from "../widgets/websiteList/WebsiteList.tsx";

const Portfolio = () => {
    return (
        <div className={"main-container"}>
            <Navbar/>
            <TitlePage title={"Portfolio"}/>
            <WebsiteList/>
        </div>
    );
};

export default Portfolio;