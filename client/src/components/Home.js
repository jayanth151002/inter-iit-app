import axios from 'axios'

const Home = () => {

    axios.get('/trial')
        .then((res) => console.log(res.data))
        .catch((res) => console.log(res))

    return (
        <div>
            Home
            
        </div>
    )
}

export default Home