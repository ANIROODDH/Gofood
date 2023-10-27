import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({  email: "", password: ""})

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/loginuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Moved outside of the headers
          body: JSON.stringify(credentials),
        });
      
        if (!response.ok) {
         // Log the response text for more details
          throw new Error('Failed to submit data. Please try again.');
        }
      
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log(err);
        // Handle other errors, for example, show an error message to the user
      }
      
    };
    
  const onchange = (event) => {
      setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
     < >
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onchange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            <Link to="/signup" className='m-3 btn btn-danger' > I'm newsuser </Link>
        </form>

    </div>
</>
)
}
