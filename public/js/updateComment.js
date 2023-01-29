async function updateComment(e) {
    e.preventDefault();
  
    const id = document.getElementById("comment_id").value;
    const comment_text = document.getElementById("comment_text").value;
  
    const res = await fetch(`/api/comment/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        comment_text,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(id);
    if (res.ok) {
      document.location.replace("/existingBlogPost");
    } else {
      alert("Unable to update comment!");
    }
  }
  
  async function deleteComment(e) {
    e.preventDefault();
  
    const id = document.getElementById("comment_id").value;
  
    const res = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (res.ok) {
      document.location.replace("/existingBlogPost");
    } else {
      alert("Unable to delete comment!");
    }
  }
  
  document.getElementById("update-comment").addEventListener("submit", updateComment);
  document.getElementById("delete-comment-btn").addEventListener("click", deleteComment);