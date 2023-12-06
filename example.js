function toggleExpand(id) {
    const ID = document.getElementById(`image-${id}`);
    const parent = ID.parentNode;
    const grandparent = parent.parentNode;

    parent.classList.toggle('relative');
    grandparent.classList.toggle('overflow-hidden');
    const code = document.createElement('div');
    code.className = 'absolute h-screen w-full bg-gray-700 opacity-80';
    let newHTML = `
    
                
                <div id="controls-carousel" class="relative h-full w-full bg-black flex justify-center items-center" data-carousel="static">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 w-full overflow-hidden rounded-lg bg-purple-500 md:h-96">
                        <!-- Item 1 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-red-500"
                                alt="..." />
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-yellow-500"
                                alt="..." />
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-orange-500"
                                alt="..." />
                        </div>
                        <!-- Item 4 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-green-500"
                                alt="..." />
                        </div>
                        <!-- Item 5 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500"
                                alt="..." />
                        </div>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                        class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none bg-blue-300"
                        data-carousel-prev>
                        <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                            <svg class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none bg-blue-300"
                        data-carousel-next>
                        <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                            <svg class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            
    `;
    code.innerHTML=newHTML;
    parent.insertBefore(code, ID);
    

}
{/* <div class="absolute h-screen w-full bg-gray-700 opacity-80">
                
                <div id="controls-carousel" class="relative h-full w-full bg-black flex justify-center items-center" data-carousel="static" onclick="collapse()">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 w-full overflow-hidden rounded-lg bg-purple-500 md:h-96">
                        <!-- Item 1 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-red-500"
                                alt="..." />
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-yellow-500"
                                alt="..." />
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-orange-500"
                                alt="..." />
                        </div>
                        <!-- Item 4 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-green-500"
                                alt="..." />
                        </div>
                        <!-- Item 5 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/"
                                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 bg-blue-500"
                                alt="..." />
                        </div>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                        class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none bg-blue-300"
                        data-carousel-prev>
                        <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                            <svg class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                        class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none bg-blue-300"
                        data-carousel-next>
                        <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                            <svg class="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div> */}