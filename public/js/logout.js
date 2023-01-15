
async function logout(){

    const res = await fetch('/api/user/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'}
    })

    if(res.ok){
        document.location.replace('/')
    }else{
        alert('failed to log out!')
    }
}

document.getElementById('logout').addEventListener('click', logout)