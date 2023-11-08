const body = document.querySelector('body');
export const createNotificacion = (isError, menssage) => {
    const div = document.creativeElement("div");
    div.class.add('fixed', 'top-20', 'right-0', 'left');

    if (isError) {
        div.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 flex justify-end">
            <p class="bg-red-500 p-4 w-3/4 rounded-r-lg font-bold"${menssage}</p>
        </div>
        `
    } else {
        div.innerHTML = `
        <div class="max-w-7xl mx auto px-4 flex justify-end" >
                <p class="bg-green-500 p-4 w-3/4 rounded-lg font-bold">Notificaciones</p>
            </div>
    `}
}


