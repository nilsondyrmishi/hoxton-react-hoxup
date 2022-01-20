import {useEffect, useState} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import CreateUser from "./pages/CreateUser";

export default function App () {
  const [modal, setModal] = useState('')
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)


  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`)
        .then(res => res.json())
        .then(userInServer => setUsers(userInServer))
  }
  useEffect(getUsersFromServer, [])

  return (
    <div className='app'>
      {modal === 'add' && <CreateUser setModal={setModal}
                                   users={users}
                                   setUsers={setUsers} />}

      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<Login setModal={setModal} users={users} setCurrentUser={setCurrentUser}/>} />
        <Route path='/logged-in' element={<Main currentUser={currentUser}/>} />
        <Route path='/logged-in/:conversationId' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/*{modal === 'new-user' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>New user modal</h1>
          </div>
        </div>
      ) : null}

      {modal === 'something-else' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>Something else</h1>
          </div>
        </div>
      ) : null}*/}
    </div>
  )
}
