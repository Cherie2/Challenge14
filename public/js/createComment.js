
async function createComment(e){
    e.preventDefault();
    
    const comment_text = document.getElementById('comment_text').value
    const post_id = document.getElementById('post_id').value
    
    const res = await fetch('/api/comment', {
        method: 'POST', 
        body: JSON.stringify({
            post_id, 
            comment_text,
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