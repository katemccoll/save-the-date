import React, {useState} from "react";
import "./Gallery.css";



const Gallery = () => {
    const gallery = document.querySelectorAll('.image');

    function toggleOpen() {
        console.log('hello');
        this.classList.toggle('open')
    }

    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    gallery.forEach(image => image.addEventListener('click', toggleOpen));
    gallery.forEach(image => image.addEventListener('transitionend', toggleActive));


    return (
        <div className="gallery">
            <div className="image image1"></div>
            <div className="image image2"></div>
            <div className="image image3"></div>
        </div>
    )

}

export default Gallery;