import axios from "axios";

async function getData(user_id){
    const  getUsers = () => { 
        return new Promise(async(resolve,reject) => {
            const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
            resolve(data);
        })
    };
    const getPosts = () => {
        return new Promise(async(resolve,reject) => {
            const {data} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
            resolve(data)
        })
    }
    return Promise.all([getUsers(),getPosts()])
    .then(console.log)
    .then(console.log);

   
}

export default getData;