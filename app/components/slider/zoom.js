class Zoom {
    constructor(srcImg, lensSize, zoomContainer) {
        this.img = srcImg;
        this.container = zoomContainer;
        this.lensSize = lensSize;
    }

    init() {
        this.createLens(this.lensSize);
        this.zoomImg();
    }

    createLens(lensSize) {
        this.lens = document.createElement("div");
        this.lens.setAttribute("class", "zoom__lens");
        this.container.classList.add("zoom__container");
        this.container.append(this.lens);
        this.lens.style.width = `${lensSize}px`;
        this.lens.style.height = `${lensSize}px`;
        this.result = document.createElement("div");
        this.result.setAttribute("class", "zoom__result");
        this.container.appendChild(this.result);
    }

    moveLens(e, el) {
        let a = el.getBoundingClientRect();
        let x = e.pageX - a.left;
        let y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        if (x > this.img.offsetWidth - this.lens.offsetWidth / 2) {
            x = this.img.offsetWidth - this.lens.offsetWidth / 2;
        }
        if (x < this.lens.offsetWidth / 2) {
            x = this.lens.offsetWidth / 2;
        }
        if (y > this.img.height - this.lens.offsetHeight / 2) {
            y = this.img.height - this.lens.offsetHeight / 2;
        }
        if (y < this.lens.offsetWidth / 2) {
            y = this.lens.offsetWidth / 2;
        }
        this.lens.style.left = `${x - this.lens.offsetWidth / 2}px`;
        this.lens.style.top = `${y - this.lens.offsetHeight / 2}px`;
        this.result.style.backgroundPosition = `-${((x - this.lens.offsetWidth / 2) * this.cx)}px -${((y - this.lens.offsetWidth / 2) * this.cy)}px`;
    }

    zoomImg() {
        this.result.style.backgroundImage = `url('${this.img.src}')`;
        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;
        this.result.style.backgroundSize = `${(this.container.offsetWidth * this.cx)}px ${(this.container.offsetHeight * this.cy)}px`;
        this.img.addEventListener('mousemove', (e) => {
            this.moveLens(e, this.img);
        });
    }

    updateImg(img) {
        this.img = img;
        this.zoomImg();
    }
}

export default Zoom;
