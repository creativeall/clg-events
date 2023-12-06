let is_open = null;

function expand(id, num, arr, name) {
    console.log(is_open);

    let content = '';
    for (let i = 0; i < num; i++) {
        content += `<div class="md:h-64 md:w-64 h-32 w-32 bg-white m-5 backdrop-blur-sm flex justify-center items-center">
        <span class="text-black font-bold">${arr[i]}</span>
        </div>`;
    }
    // console.log(id);
    const container = document.getElementById(`event${id}`);
    const parent_container = container.parentNode;
    // console.log(parent_container);

    if (is_open != null) {
        console.log(is_open);
        let currentlyOpenDiv = document.getElementById(`event${is_open}`);
        console.log(currentlyOpenDiv);
        const parent_currentlyOpenDiv = currentlyOpenDiv.parentNode;
        parent_currentlyOpenDiv.classList.toggle('hidden');
    }
    console.log(is_open);
    if (is_open == id) {
        is_open = null;
    } else {
        container.classList.toggle('collapse'); // Set the expanded height
        // parent_container.classList.toggle('md:h-[calc(100vh-4.50rem)]');
        parent_container.classList.toggle('w-full');
        parent_container.classList.toggle('bg-green-400');
        parent_container.classList.toggle('flex');
        parent_container.classList.toggle('p-4');
        parent_container.innerHTML = `
    <div class="h-full md:w-1/3 w-full bg-purple-400 flex flex-col justify-center items-center">
        <div class="md:h-52 md:w-52 h-32 w-32 bg-white m-5 backdrop-blur-sm flex justify-center items-center"><span class="text-black font-bold">${name}</span></div>
    </div>
    <div class="h-full md:w-2/3 w-full bg-orange-400 flex flex-wrap justify-center overflow-y-scroll p-5">
    ${content}
    </div>
    `;
        is_open = id;
        console.log(is_open);
    }

}
function collapse() {

}
function side_right() {
    const icon = document.getElementById('right-sidebar');
    icon.classList.toggle('translate-x-full');
    icon.classList.toggle('-translate-x-0');
    const logo = document.getElementById('citronic_img');
    logo.classList.toggle('hidden');
}