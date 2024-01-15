import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:6700/api/createuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', // Move this line outside of the headers
            body: JSON.stringify(credentials),
          });
      
          if (!response.ok) {
            console.error('Fetch error:', response.status, response.statusText);
            throw new Error('Failed to submit data. Please try again.');
          }
      
          const json = await response.json();
          console.log(json);
          // Do something with the successful response, if needed
        } catch (error) {
          console.error('Error during fetch:', error.message);
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
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onchange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputgeolocation" name='geolocation' value={credentials.geolocation} onChange={onchange} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/Login" className='m-3 btn btn-danger' > Already a user </Link>
                </form>

            </div>
        </>
    )
    }
