const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const posts = [
    {
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

function renderPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; // Clear previous posts

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.username}" class="avatar">
                <div>
                    <h2>${post.username}</h2>
                    <p>${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" alt="Post image" class="post-image">
            <div class="post-footer">
                <div class="icons">
                    <ul>
                        <li><i class="fa fa-heart"></i></li>
                        <li><i class="fa fa-comment"></i></li>
                        <li><i class="fa fa-share"></i></li>
                    </ul>
                </div>
                <p id="likes">${post.likes} likes</p>
                <p id="comment"><strong>${post.username}</strong> ${post.comment}</p>
            </div>
        `;

        container.appendChild(postElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts(posts);
});