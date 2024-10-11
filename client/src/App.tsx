import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Officer from './components/officer/Officer';
import ServiceSelector from './components/customer/ServiceSelector';
import { BottomBar } from './components/bottombar/Bottombar';
import { NavB } from './components/navbar/Navbar';
import API from './API';

function App() {
    const getCounterInformation = async(counterId: number) => {
        API.getCounterInformation(counterId);
    }

    const markAsServed = async(counterId: Number) => {

    }

    const nextCustomer = async(counterId: number) => {
        API.nextCustomer(counterId);
    }


    return (
        <>
            <Routes>
                <Route path="/officer/:counterId" element = {
                    <div>
                        <NavB />
                        <Officer counterId={useParams()['*']?.split('/')[1]} getCounterInformation={getCounterInformation} markAsServed={markAsServed} nextCustomer={nextCustomer} />
                        <BottomBar />
                    </div>
                } />

                <Route path="/service-selection" element = {<ServiceSelector />} />
            </Routes>
        </>
    );
}

export default App;
