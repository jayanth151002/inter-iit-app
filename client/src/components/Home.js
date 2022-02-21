import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [rollno, setRollno] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        data.append('password', password)
        axios.post('/login', { rollno: rollno, password: password })
            .then(res => console.log(res.data))
            .catch(res => console.log(res))
    }

    return (
        <div>
            Home
            <form>
                <div>
                    <label for="rollno">Roll Number</label>
                    <input type="text" onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                </div>
                <div>
                    <label for="rollno">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Home