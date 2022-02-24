import { useState } from 'react'
import axios from 'axios'

const Delete = () => {
    const [rollno, setRollno] = useState("")
    const handleDel = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        axios.post('/delete', { rollno: rollno})
            .then(res => alert(res.data))
            .catch(res => console.log(res))
    }
    return (
        <div>
            <form>
                <div>
                    <label for="rollno">Roll Number</label>
                    <input type="text" onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                </div>
                <button onClick={handleDel}>Delete</button>
            </form>
        </div>
    )
}

export default Delete