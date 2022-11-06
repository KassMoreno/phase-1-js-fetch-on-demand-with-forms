


const init = () => {
    const inputForm= document.querySelector('form')
    inputForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const input = document.querySelector('input#searchByID')
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp =>resp.json()) 
        .then(movies => {
            console.log(movies)
        })
    })
}
document.addEventListener('DOMContentLoaded', init)

