import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import store from '../../Store';
import Chat from '../Chat';
import ChatList from '../ChatList';
import Profile from '../Profile';

const Home = () => <h2>Home</h2>

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <Link to="/chats">Chats</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/chats'>
                        <Route index element={<ChatList />} />
                        <Route path=':id' element={<Chat />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}

export default Router;