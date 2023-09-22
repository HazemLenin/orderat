import './index.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Map from './Pages/Map';
import { createContext, useState } from 'react';

export const AddressContext=createContext([
  {
    lat: 31.25214048726485,
	  lng:  30.009838471967534,
    isMap: true
  },
  () => {}
]);



function App() {
const [address , setAddress] = useState({
  lat: 31.25214048726485,
	lng:  30.009838471967534,
  isMap: true
});

	return (
		<AddressContext.Provider value={ [address , setAddress]}>
<BrowserRouter>
<Routes>
  <Route path="/address" element={<Map/>} />
</Routes>
</BrowserRouter>

</AddressContext.Provider>
 	);
 }

export default App;
