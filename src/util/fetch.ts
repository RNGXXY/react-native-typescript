import config from '../config'

const Fetch = (url:string,options?:any)=>{
    return new Promise(resolve=>{
        fetch(config.apihost+url,options)
            .then(response=>response.json())
            .then(res=>resolve(res))
    })
}

export default Fetch
