import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WebPageDescription from './components/WebPageDescription';
import AppHeader from './components/common/AppHeader';
import TreatmentInput from './components/TreatmentInput';
import DrugInput from './components/DrugInput';
import TreatmentCertification from './components/TreatmentCertification';
import TreatmentResult from './components/TreatmentResult';
import DrugResult from './components/DrugResult';

function App() {
  return (
    <div className="App">
      <AppHeader title={"Medical Treatment"}></AppHeader>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WebPageDescription/>}></Route>
            <Route path="/treatment/input" element={<TreatmentInput/>}></Route>
            <Route path="/treatment/certification" element={<TreatmentCertification/>}></Route>
            <Route path="/treatment/result" element={<TreatmentResult/>}></Route>
            <Route path="/drug/input" element={<DrugInput/>}></Route>
            <Route path="/drug/result" element={<DrugResult/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
