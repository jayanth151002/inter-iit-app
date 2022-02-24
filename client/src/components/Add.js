import { useState } from 'react'
import axios from 'axios'

const Add = () => {

    const [rollno, setRollno] = useState("")
    const [password, setPassword] = useState("")
    const [waitmsg, setmsg] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        data.append('password', password)
        setmsg("Please wait...your request is being processed. ")
        axios.post('/add', { rollno: rollno, password: password })
            .then(res => { alert(res.data); setmsg("") })
            .catch(res => console.log(res))
    }



    return (
        <div>
            <div className='mini-jumbotron text-center'>
                <h3>ADD Grade Data</h3>
            </div>
            <form>
                <div className='col-10 offset-1 offset-sm-3 col-sm-6 text-center mt-5'>
                    <div className='mb-3'>
                        <h6>{waitmsg}</h6>
                    </div>
                    <div>
                        <label for="rollno">Roll Number</label>
                        <input type="text" className='form-control mb-3 mt-3' onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                    </div>
                    <div>
                        <label for="rollno">Password</label>
                        <input type="password" className='form-control mb-3 mt-3' onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className="btn btn-primary mb-3 mt-3" onClick={handleSubmit}>ADD</button>
                        </div>
                        <div className='col-6'>
                            <button className="btn btn-primary mb-3 mt-3"><a style={{ textDecoration: "none", color: "white" }} href='/'>Go to Home</a></button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}



export default Add