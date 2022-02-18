import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import {Helmet} from 'react-helmet';

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
