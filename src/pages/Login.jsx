import AddButton from "./AddButton";
import Users from "./Users";

function Login (props) {
  return (
    <div className='main-wrapper login'>
      <section className='login-section'>
        <h2>Choose your user!</h2>
        <ul>
          {props.users.map(user => <Users key={user.id}
                                          user={user}
                                          setCurrentUser={props.setCurrentUser} />)}


          <AddButton setModal={props.setModal}/>
        </ul>
      </section>
    </div>
  )
}

export default Login
