
import {store} from './store/store';
import {Provider} from 'react-redux'
import './scss/_App.scss'
import Home from './components/home/Home'
import Modal from './components/UI/modal/Modal'
function App() {


  return (
<Provider store={store}>
  <Modal/>
   <Home/>
   </Provider>
  )
}

export default App
