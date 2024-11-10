const postsContainer = document.getElementById('posts');
const adminPanel = document.getElementById('admin-panel');
const adminLoginBtn = document.getElementById('admin-login-btn');
const postForm = document.getElementById('post-form');
const adminPostsContainer = document.getElementById('admin-posts');

let isAdmin = false;

// Sample admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'password123'
};

// Function to display posts
function displayPosts() {
    postsContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <img src="${post.image}" alt="Post Image" style="max-width: 100%;">
            <p>${post.text}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
}

// Admin login
adminLoginBtn.addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    if (username === adminCredentials.username && password === adminCredentials.password) {
        isAdmin = true;
        adminPanel.style.display = 'block';
        displayAdminPosts();
    } else {
        alert('Invalid credentials');
    }
});

// Handle post submission
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const image = document.getElementById('image').files[0];
    const text = document.getElementById('text').value;

    const reader = new FileReader();
    reader.onloadend = () => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ image: reader.result, text });
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        displayAdminPosts();
        postForm.reset();
    };
    reader.readAsDataURL(image);
});

// Display admin posts
function displayAdminPosts() {
    adminPostsContainer.innerHTML = '';
    const posts = JSON
