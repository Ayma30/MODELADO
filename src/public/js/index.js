const authorInput = document.getElementById("authorInput");

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/autores');
    const autores = await response.json();
    for (const autor of autores) {
        authorInput.innerHTML += `
            <option value="${autor._id}">${autor.nombre}</option>    
        `      
    }
})