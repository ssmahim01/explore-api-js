/* Usage of Comments and async + await with Try and error */

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happened', error))
}

const loadComments2 = async() => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }

    catch(error){
        console.error('Data load error');
    }
}