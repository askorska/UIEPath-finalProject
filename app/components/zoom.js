class Zoom {
    constructor (srcImg, resultContainer, lensSize) {
        this.img = document.querySelector(srcImg);
        this.result = document.querySelector(resultContainer);
        this.lensSize = lensSize;


    }

    createLens(lensSize) {
        this.lens = document.createElement("div");
        this.lens.setAttribute("class", "img-zoom-lens");
        this.img.parentElement.insertBefore(this.lens, this.img);
        this.lens.style.width = lensSize + 'px';
        this.lens.style.height = lensSize + 'px';
    }
    getPosition(e, el) {
        let a = el.getBoundingClientRect();
        let x = e.pageX - a.left;
        let y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;


        if (x > this.img.width - this.lens.offsetWidth/2) {
            x = this.img.width - this.lens.offsetWidth/2;
        }

        if (x < this.lens.offsetWidth/2) {
            x = this.lens.offsetWidth/2;
        }
        if (y > this.img.height - this.lens.offsetHeight/2) {
            y = this.img.height - this.lens.offsetHeight/2;
        }
        if (y < this.lens.offsetWidth/2) {
            y = this.lens.offsetWidth/2;
        }
        this.lens.style.left = x - this.lens.offsetWidth/2 + "px";
        this.lens.style.top = y - this.lens.offsetHeight/2 + "px";
        this.result.style.backgroundPosition = "-" + ((x - this.lens.offsetWidth/2) * this.cx)  + "px -" + ((y- this.lens.offsetWidth/2) * this.cy) + "px";

        //this.result.style.backgroundPosition = "0, 0"
    }

    zoomImg() {


        this.result.style.backgroundImage = "url('" + this.img.src + "')";
        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;

        this.result.style.backgroundSize = (this.img.width * this.cx) + "px " + (this.img.height * this.cy) + "px";

        this.img.addEventListener('mousemove', (e) => {this.getPosition(e, this.img)});


    }




    init() {
        this.createLens(this.lensSize);

        this.zoomImg();
    }


    // imageZoom(imgID, resultID) {
    //     var img, lens, result, cx, cy;
    //     img = document.getElementById(imgID);
    //     result = document.getElementById(resultID);
    //     /*create lens:*/
    //     this.lens = document.createElement("DIV");
    //     this.lens.setAttribute("class", "img-zoom-lens");
    //     /*insert lens:*/
    //     this.img.parentElement.insertBefore(this.lens, this.img);
    //     /*calculate the ratio between result DIV and lens:*/
    //     cx = result.offsetWidth / this.lens.offsetWidth;
    //     cy = result.offsetHeight / this.lens.offsetHeight;
    //     /*set background properties for the result DIV*/
    //     result.style.backgroundImage = "url('" + img.src + "')";
    //     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    //     /*execute a function when someone moves the cursor over the image, or the lens:*/
    //     this.lens.addEventListener("mousemove", () => {this.moveLens(img)});
    //     img.addEventListener("mousemove", () => {this.moveLens(img)});
    //     /*and also for touch screens:*/
    //     img.addEventListener("touchmove", () => {this.moveLens(img)});
    // }
    //
    // getCursorPos(e) {
    //     var a, x = 0, y = 0;
    //     e = e || window.event;
    //     /*get the x and y positions of the image:*/
    //     a = this.img.getBoundingClientRect();
    //     /*calculate the cursor's x and y coordinates, relative to the image:*/
    //     x = e.pageX - a.left;
    //     y = e.pageY - a.top;
    //     /*consider any page scrolling:*/
    //     x = x - window.pageXOffset;
    //     y = y - window.pageYOffset;
    //     return {x: x, y: y};
    // }
    //
    //

    // moveLens(e) {
    //     console.log(this);
    //     var pos, x, y;
    //     /*prevent any other actions that may occur when moving over the image*/
    //     //e.preventDefault();
    //     /*get the cursor's x and y positions:*/
    //     pos = this.getCursorPos();
    //     /*calculate the position of the lens:*/
    //     x = pos.x - (lens.offsetWidth / 2);
    //     y = pos.y - (lens.offsetHeight / 2);
    //     /*prevent the lens from being positioned outside the image:*/
    //
    //     /*set the position of the lens:*/
    //     lens.style.left = x + "px";
    //     lens.style.top = y + "px";
    //     /*display what the lens "sees":*/
    //
    // }




}


export default Zoom;
