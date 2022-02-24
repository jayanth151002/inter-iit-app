import { useState } from 'react'
import axios from 'axios'

const Delete = () => {
    const [rollno, setRollno] = useState("")
    const handleDel = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        axios.post('/delete', { rollno: rollno })
            .then(res => alert(res.data))
            .catch(res => console.log(res))
    }
    return (
        <div>
            <div className='mini-jumbotron text-center'>
                <h3>DELETE Grade Data</h3>
            </div>
            <form>
                <div className='col-10 offset-1 offset-sm-3 col-sm-6 text-center mt-5'>
                    <div>
                        <label for="rollno">Roll Number</label>
                        <input type="text" className='form-control mb-3 mt-3' onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className="btn btn-primary mb-3 mt-3" onClick={handleDel}>DELETE</button>
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

export default Delete