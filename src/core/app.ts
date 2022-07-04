
function showLoader() {
    const loader = document.getElementById('loader');
    if(!loader) return console.error('Loader el #loader not found');
    loader.style.display = 'flex';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if(!loader) return console.error('Loader el #loader not found');
    loader.style.display = 'none';
}

const TOAST_DURATION_MS = 3000;
function showToast(message: string, type: 'info' | 'success' | 'error' = 'info') {
    const toast = document.getElementById('toast');
    if(!toast) return console.error('Toast el #toast not found');
    toast.innerHTML = message;
    toast.classList.add(type);
    toast.style.display = 'flex';
    toast.style.opacity = "1";
    setTimeout(() => {
        toast.style.opacity = "0";
    }, TOAST_DURATION_MS);
    setTimeout(() => {
        toast.style.display = 'none';
        toast.classList.remove(type);
    }, TOAST_DURATION_MS + 200);
}


export const app = {
    showLoader,
    hideLoader,
    showToast
}