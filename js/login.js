const loginForm = document.querySelector('#loginform')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(User => User.email === email && User.password === password)
if(!validUser){
    return alert ('Usuario y/o contraseña incorrectos!')
}
alert('Bienvenido!')
localStorage.setItem('login_success', JSON.stringify(validUser))
window.location.href = 'administrador.html'
})