import config from '../config'

const Fetch = (url:string)=>{
    return new Promise(resolve=>{
        fetch(config.apihost+url)
            .then(response=>response.json())
            .then(res=>resolve(res))
    })
}

export default Fetch
