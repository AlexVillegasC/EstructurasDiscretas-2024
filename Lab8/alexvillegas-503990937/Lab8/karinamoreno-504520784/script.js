let write = document.getElementById('ingresar');
let show = document.getElementById('mostrar');
write.addEventListener('input',function(){
    show.textContent = write.value
})