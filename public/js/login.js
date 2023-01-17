
async function loginForm(e){
    e.preventDefault();
    
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const res = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username, 
            password
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    if(res.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Unable to login!')
    }
}

document.getElementById('login-form').addEventListener('submit', loginForm)