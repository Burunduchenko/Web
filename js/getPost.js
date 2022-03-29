function GetPost() {
    const xhr = new XMLHttpRequest();
    const parrent = document.getElementById('posts');
    parrent.innerHTML = '';
    const id = document.getElementById('findPostsID').value;
    if (id.length === 0) {
        return;
    }
    xhr.open('GET', `${'https://jsonplaceholder.typicode.com/posts/'}${id}`, false);
    xhr.send();
    const element = JSON.parse(xhr.responseText);
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
