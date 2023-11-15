const body = document.querySelector('body');
const createNotificacion = (isError, menssage) => {
    const div = document.createElement("div");
    div.classList.add('fixed', 'top-20', 'right-0', 'left-0');


    if (isError) {
        div.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 flex justify-center">
            <p class="bg-red-500 p-4 w-3/4 rounded-lg font-bold text-center">${menssage}</p>
        </div>
        `
        setTimeout(() => {
            div.remove()
        }, 3000)
    } else {
        div.innerHTML = `
        <div class="max-w-7xl mx auto px-4 flex justify-center" >
                <p class="bg-green-500 p-4 w-3/4 rounded-lg font-bold text-center">${menssage}</p>
            </div>
    `}
    body.appendChild(div)
}


