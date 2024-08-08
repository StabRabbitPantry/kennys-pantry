import react, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password, 
        }),
      })
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('jwtToken', data.jwtToken);
        navigate('/login');
      }
      
      // .then(response => {
      //   if (response.ok) {
      //     //nav them to somewhere else
      //     console.log('Successful POST', response)
      //     navigate('/');
      //   }
      // })  
    }
    catch (error){
        alert(error);
    }
  }

const sendHome = async (e) => {
e.preventDefault();
try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: username,
          password: password, 
      }),
    })
    if (response.ok) {
      const data = await response.json();
      // setUsername(data.user);
      console.log('Successful POST', data);
      navigate('/home');
    }
   
  } catch(error){
    console.error(error);
    alert(error);
}
}

    return (
        <div>
            <form >
              <input className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-205
              bg-gray-600 border-gray-500 placeholder-gray-400 text-green" id="Username" placeholder="Username" type="text" onChange={e => setUsername(e.target.value)}></input>
              <input className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-205
              bg-gray-600 border-gray-500 placeholder-gray-400 text-green" id="Password" placeholder="Password" type="text" onChange={e => setPassword(e.target.value)}></input>
              <button type='submit' onClick={handleSubmit}>Signup</button>
              <button onClick={sendHome}>Login</button>
            </form>
        </div>
    )
}

export default Login;