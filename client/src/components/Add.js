import { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [rollno, setRollno] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        data.append('password', password)
        axios.post('/add', { rollno: rollno, password: password })
            .then(res => alert(res.data))
            .catch(res => console.log(res))
    }

    

    return (
        <div>
            <div className='mini-jumbotron'>
                
            </div>
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



export default Add