class AddComment {

    constructor(buttonsContainer, inputContainer, outputContainer, commentDate, usernameInput, usernameOutput) {
        this.buttonsContainer = document.querySelector(buttonsContainer);
        this.inputContainer = document.querySelector(inputContainer);
        this.outputContainer = document.querySelector(outputContainer);
        this.commentDate = document.querySelector(commentDate);
        this.usernameInput = document.querySelector(usernameInput);
        this.usernameOutput = document.querySelector(usernameOutput);
    }

    addEvents() {
        let buttons = this.buttonsContainer.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.btnOnClick(buttons[i]);
            });
        }
        this.inputContainer.addEventListener("keyup", () => {
            this.updatePreview()
        });
        this.inputContainer.addEventListener("paste", (e) => {
            e.preventDefault();
            let text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);

        });
        this.usernameInput.addEventListener('keyup', (e) => {
            this.usernameOutput.innerHTML = e.target.value;
        })

    }

    addDate() {
        let date = new Date();
        let locale = "en-us";
        date = date.toLocaleString(locale, {month: 'long', day: '2-digit', year: 'numeric'});
        this.commentDate.innerHTML = date;

    }

    updatePreview() {
        this.outputContainer.innerHTML = this.inputContainer.innerHTML;

    }


    btnOnClick(e) {

        if (e.dataset.command === 'blockquote') {
            document.execCommand('formatBlock', false, e.dataset.command);
        }

        else {
            document.execCommand(e.dataset.command, false, null);
            console.log('click');
        }

        this.updatePreview();
    }

    init() {
        this.addEvents();
        this.addDate();
    }

}
export default AddComment;
