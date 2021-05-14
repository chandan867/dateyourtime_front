import axios from 'axios';
const instance=axios.create(
    {
        baseURL:"https://dateyourtime.herokuapp.com/"
    }
)
export default instance;