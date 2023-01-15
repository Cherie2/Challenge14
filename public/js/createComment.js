
async function createComment(e){
    e.preventDefault();
    
    const title = document.getElementById('comment-title').value
    const post_content = document.getElementById('comment_content').value

    const res = await fetch('/api/comment', {
        method: 'POST', 
        body: JSON.stringify({
            title, 
            post_content
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    if(res.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Unable to leave a Comment!')
    }
}

document.getElementById('create-comment').addEventListener('submit', createComment)