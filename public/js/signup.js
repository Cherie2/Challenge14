

async function signupForm(e){
    e.preventDefault();

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const res = await fetch('/api/user', {
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
        alert('Unable to sign up!')
    }
}

document.getElementById('signup-form').addEventListener('submit', signupForm)