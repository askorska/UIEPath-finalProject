class Watermark {
 
    addWatermark(srcImg) {
        let img = new Image();
        img.src = srcImg.src;

        img.onload = () => {
            let w = img.width;
            let h = img.height;
            var canvas = Object.assign(document.createElement('canvas'), {width: w, height: h});
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.font = "48px PT Sans";
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.8;
            ctx.fillText("DEMO SHOP", canvas.width - 280, 60);
            srcImg.src = canvas.toDataURL('image/jpeg', 0.9); ;

        }

    }

}

export default Watermark;
