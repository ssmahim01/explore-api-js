/* Usage of posts and task to display all posts */

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
    postsContainer.style.fontWeight = 'bold';
    postsContainer.style.marginTop = '1rem';

    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add("post", "capacity");
        postDiv.innerHTML = `
        <h4>User - ${post.userId}</h4>
        <h5>Post Title: ${post.title}</h5>
        <P>Post Description: ${post.body}</P>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();