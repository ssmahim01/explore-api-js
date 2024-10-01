// Usage of Photos of JSON placeholder

const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}

const displayPhotos = (data) => {
    const ul = document.querySelector('#photos-container');
    for(const user of data){
       const li = document.createElement('li');
       li.classList.add('container-styles');
       li.style.fontWeight = 'bold';
       li.style.listStyle = 'none';
       li.innerHTML = `
       <h2>Photo Content</h2>
       <p>Album ID: ${user.albumId}</p>
       <p>ID: ${user.id}</p>
       <p>Title: ${user.title}</p>
       <p>Link: ${user.url}</p>
       <p>Thumbnail Link: ${user.thumbnailUrl}</p>
       `
       ul.appendChild(li);
    }
}