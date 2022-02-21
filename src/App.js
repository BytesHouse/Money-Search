import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-FSRWT0NCWQ"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
                <Helmet>
                    <script src='https://oplata.qiwi.com/popup/v1.js'></script>
                </Helmet>
            </div>

        </div>
);
}

export default App;
