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
               
        
        <!--menu movil-->
         <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center gap-4 hidden">
                  <a href="/login" class=" text-white font-bold hover:bg-red-400 py-2 px-4 rounded-lg transition ease-in-out ">Login</a>
                    <a href="/registro" class="bg-red-500 text-white hover:text-black font-bold hover:bg-red-300 py-2 px-4 rounded-lg transition ease-in-out ">Registro</a>
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
                  <!--menu movil-->
         <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center gap-4 hidden">
                  <a href="/login" class=" text-white font-bold hover:bg-red-400 py-2 px-4 rounded-lg transition ease-in-out ">Login</a>
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
                <!--menu movil-->
         <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center gap-4 hidden">
                  <a href="/login" class=" text-white font-bold hover:bg-red-400 py-2 px-4 rounded-lg transition ease-in-out ">Login</a>
                    <a href="/registro" class="bg-red-500 text-white hover:text-black font-bold hover:bg-red-300 py-2 px-4 rounded-lg transition ease-in-out ">Registro</a>
              </div>
        </div>
         
    `
}

//agregar la ruta para los componentes
if (window.location.pathname === '/') {
    crearNavHome();
} else if (window.location.pathname === '/login/') {
    crearNavLogin();
} else if (window.location.pathname === '/registro/') {
    crearNavReg();
}

const navBtn = navegacion.children[0].children[1];
//console.log(navBtn);

navBtn.addEventListener('click', e => {
    const menuMobil = navegacion.children[0].children[3]
    //console.log(menuMobil);
    if (!navBtn.classList.contains('active')) {
        //menu movil esta cerrado y vamos a mostrar el despliegue
        navBtn.classList.add('active')
        navBtn.innerHTML = '<path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M18 6l-12 12" /><path d="M6 6l12 12" />'

        menuMobil.classList.remove('hidden')
        menuMobil.classList.add('flex')
    } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = ' <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
        menuMobil.classList.remove('flex');
        menuMobil.classList.add('hidden');

    }
})
