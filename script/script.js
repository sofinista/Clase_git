letnombre, apellido, usuario, email, address, country
function Leerdata(){
let nombre = document.getElementById ('firstName').value
let apellido = document.getElementById('lastName').value
let usuario = document.getElementById('username').value
let email = document.getElementById('email').value
let adress = document.getElementById('address').value
let country = document.getElementById('country').value
}
let formulario = document.getElementById('form')
formulario.addEventListener('submit',(e)=>{
e.preventDefault()
})

function GuardarLocalStorage (){
localStorage.setItem('Nombre',nombre)
localStorage.setItem('Apellido',apellido)
}
function GuardarInfo(){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Usuario',nombreUsuario)
    localStorage.setItem('Gmail',correo)
    localStorage.setItem('Dirección',direccion)
    localStorage.setItem('Ciudad',ciudad)
}
functionExtraerData(){
    localStorage.setItem('Nombre')
    alert('Bienvenido',)
}