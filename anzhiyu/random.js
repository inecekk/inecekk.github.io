var posts=["2024/11/30/hello-world/","2024/11/30/測試/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };