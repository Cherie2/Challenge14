async function updatePost(e) {
  e.preventDefault();

  const title = document.getElementById("post-title").value;
  const post_content = document.getElementById("post_content").value;

  const res = await fetch("/api/post/:id", {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Unable to update post!");
  }
}

async function deletePost(e) {
  e.preventDefault();

  const res = await fetch("/api/post/:id", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Unable to delete post!");
  }
}

document.getElementById("update-post").addEventListener("Submit", updatePost);
document.getElementById("delete-post").addEventListener("click", deletePost);
