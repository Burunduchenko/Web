class Post {
    constructor(title, titleBody) {
        this.title = title;
        this.titleBody = titleBody;
    }
}

const form = document.getElementById('postForm');

form.onsubmit = function postPost(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    const post = new Post(
        document.getElementById('title').value,
        document.getElementById('body').value,
    );

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', false);
    xhr.send(post);
};
