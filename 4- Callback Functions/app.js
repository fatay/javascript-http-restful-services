/*

If we write code like this, it's sync way. So "Post Three"
will never create because server does not catch the method.

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output+= `<li>${post.title}</li>`;
    });
  }, 1000);
}

createPost({title:'Post Three', body:'This is post three'});

*/

// Callback function => providing async var
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];


function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output+= `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title:'Post Three', body:'This is post three'}, getPosts);
// now post three was successfully included in "getPosts"
