const posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date().toLocaleTimeString();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}

function printPostsAndActivityTime() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastActivityTime);
}

createPost({ title: "Post One" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    printPostsAndActivityTime();
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Updated Posts:", posts);
  })
  .catch((error) => {
    console.log(error);
  });