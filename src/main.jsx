
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import StoreContextProvider from './components/ExploreMenu/context/storeContent.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StoreContextProvider>
<App />
</StoreContextProvider>

</BrowserRouter>
)
