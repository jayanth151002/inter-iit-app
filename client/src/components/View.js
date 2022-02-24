import { useState } from 'react'
import axios from 'axios'

const View = () => {
    const [rollno, setRollno] = useState("")
    const handleView = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        console.log(rollno)
        axios.post('/view', { rollno: rollno})
            .then(res => console.log(res.data))
            .catch(res => console.log(res))
    }
    return (
        <div>
            <form>
                <div>
                    <label for="rollno">Roll Number</label>
                    <input type="text" onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                </div>
                <button onClick={handleView}>View</button>
            </form>
        </div>
    )
}

export default View