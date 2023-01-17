async function createPost(e) {
  e.preventDefault();

  const title = document.getElementById("post-title").value;
  const post_content = document.getElementById("post_content").value;
  console.log(post_content);

  const res = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Unable to create new post!");
  }
}

document.getElementById("create-post").addEventListener("submit", createPost);
