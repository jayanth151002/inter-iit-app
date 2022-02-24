import { useState } from 'react'
import axios from 'axios'

const View = () => {
    const [rollno, setRollno] = useState("")
    const [data, setData] = useState()
    const handleView = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('rollno', rollno)
        axios.post('/view', { rollno: rollno })
            .then(res => {
                setData(res.data)
                if(!res.data)
                alert("Roll Number not found")
            })
            .catch(res => console.log(res))
    }

    const GradeTable = () => {
        if (!data)
            return (
                <div></div>
            )
        else {
            const tableRows = data.Grades.map((field, n) => {
                return (
                    <tr>
                        <th scope="row">{n + 1}</th>
                        <td>{field.Course}</td>
                        <td>{field.Credits}</td>
                        <td>{field.Grade}</td>
                    </tr>
                )
            })
            return (
                <div className='container mt-3 text-center'>
                    <div>
                        <h4>{data.Name} - {data.Rollno} - {data.Program}</h4>
                    </div>
                    <div className='mt-3 mb-3'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Credits</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <div className='mini-jumbotron text-center'>
                <h3>VIEW Grade Data</h3>
            </div>
            <form>
                <div className='col-10 offset-1 offset-sm-3 col-sm-6 text-center mt-5 mb-5'>
                    <div>
                        <label for="rollno">Roll Number</label>
                        <input type="text" className='form-control mb-3 mt-3' onChange={(e) => setRollno(e.target.value)} autoComplete="off" />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className="btn btn-primary mb-3 mt-3" onClick={handleView}>VIEW</button>
                        </div>
                        <div className='col-6'>
                            <button className="btn btn-primary mb-3 mt-3"><a style={{ textDecoration: "none", color: "white" }} href='/'>Go to Home</a></button>
                        </div>
                    </div>
                </div>
            </form>
            <GradeTable />
        </div>
    )
}

export default View