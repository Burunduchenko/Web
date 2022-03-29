function GetPosts() {
    const xhr = new XMLHttpRequest();
    const parrent = document.getElementById('posts');
    parrent.innerHTML = '';
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send();
    const posts = JSON.parse(xhr.responseText);
    for (const element of posts) {
        const h2 = document.createElement('h2');
        const divParent = document.createElement('div');
        const h3 = document.createElement('h3');
        const hr = document.createElement('hr');
        const parent = document.getElementById('posts');
        h2.className = 'title';
        divParent.className = 'post';
        h3.className = 'post_body';
        h2.innerHTML = element.title;
        h3.innerHTML = element.body;
        divParent.appendChild(h2);
        divParent.appendChild(h3);
        divParent.appendChild(hr);
        parent.appendChild(divParent);
    }
}
