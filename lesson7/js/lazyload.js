let imagesLoading = document.querySelectorAll('img[data-src]');
const imgOptions={
    threshold:0,
    rootMargin:"0px 0px 100px 0px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesLoading.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesLoading.forEach((img) => {
        loadImages(img);
    });
  
}