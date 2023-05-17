(async function() {
    const posts = [];
    let lastActivityTime = null;
  
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    async function createPost(post) {
      await delay(1000);
      posts.push(post);
    }
  
    async function updateLastUserActivityTime() {
      await delay(1000);
      lastActivityTime = new Date().toLocaleTimeString();
    }
  
    async function deleteLastPost() {
      await delay(1000);
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        return deletedPost;
      } else {
        throw new Error("ERROR: No posts to delete");
      }
    }
  
    function printPostsAndActivityTime() {
      console.log("Posts:", posts);
      console.log("Last Activity Time:", lastActivityTime);
    }
  
    try {
      await createPost({ title: "Post One" });
      await updateLastUserActivityTime();
      printPostsAndActivityTime();
      
      const deletedPost = await deleteLastPost();
      console.log("Deleted Post:", deletedPost);
      console.log("Updated Posts:", posts);
    } catch (error) {
      console.log(error);
    }
  })();