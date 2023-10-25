const navegacion = document.querySelector('#navegacion');

const crearNavHome = () => {
    navegacion.innerHTML = `
    <div class="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
            <p class="text-white font-bold text-xl">Restaurant App</p>
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-red-500 rounded-lg md:hidden">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

                <!--menu pc-->
                <div class="hidden md:flex " >
                    <a href="/login" class=" text-white font-bold hover:bg-red-400 py-2 px-4 rounded-lg transition ease-in-out ">Login</a>
                    <a href="/registro" class="bg-red-500 text-white hover:text-black font-bold hover:bg-red-300 py-2 px-4 rounded-lg transition ease-in-out ">Registro</a>
                </div>
        </div>
    `
}

const crearNavLogin = () => {
    navegacion.innerHTML = `
    <div class="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
            <p class="text-white font-bold text-xl">Restaurant App</p>
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-red-500 rounded-lg md:hidden">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

                <!--menu pc-->
                <div class="hidden md:flex " >
                   
                    <a href="/registro" class="bg-red-500 text-white hover:text-black font-bold hover:bg-red-300 py-2 px-4 rounded-lg transition ease-in-out ">Registro</a>
                </div>
        </div>
    `
}
const crearNavReg = () => {
    navegacion.innerHTML = `
    <div class="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
            <p class="text-white font-bold text-xl">Restaurant App</p>
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-10 h-10 text-white cursor-pointer p-2 hover:bg-red-500 rounded-lg md:hidden">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

                <!--menu pc-->
                <div class="hidden md:flex " >
                   
                    <a href="/login" class="bg-red-500 text-white hover:text-black font-bold hover:bg-red-300 py-2 px-4 rounded-lg transition ease-in-out ">Login</a>
                </div>
        </div>
    `
}

//agregar la ruta para los componentes
if(window.location.pathname === '/'){
    crearNavHome();
}else if(window.location.pathname ==='/login/'){
    crearNavLogin();
}else if(window.location.pathname ==='/registro/'){
    crearNavReg();
}
