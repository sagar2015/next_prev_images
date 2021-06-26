function img_screen(path) {
    document.querySelector('#img_window_size').src = path.src;
    document.querySelector('#img_window').classList.add('display_img');
    // document.querySelector('#img_window').classList.toggle('display_img');

}

function next() {

    let all_imgs = document.images;
    let img_path = document.querySelector('#img_window_size');
    for (let index = 1; index < all_imgs.length; index++) {
        if (img_path.src == all_imgs[index].src) {

            if (index <= all_imgs.length) {
                img_path.src = all_imgs[++index].src;
                document.querySelector('.no_of_images').innerHTML = " Image " + index + " of " + [all_imgs.length - 1];
                break;
            }
        }
    }

}



function previous() {
    let all_imgs = document.images;

    let img_path = document.querySelector('#img_window_size');

    for (let index = 1; index < all_imgs.length; index++) {
        if (img_path.src == all_imgs[index].src) {
            if (index >= 1) {
                img_path.src = all_imgs[--index].src;
                document.querySelector('.no_of_images').innerHTML = " Image " + index + " of " + [all_imgs.length - 1];
                break;
            }
        }
    }
}

function window_close() {
    // document.querySelector('#img_window').classList.remove('display_img');

    document.querySelector('#img_window').classList.toggle('display_img');
}