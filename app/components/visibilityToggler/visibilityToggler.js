export default {

    show(...elements) {
        elements.forEach(function (element) {
            element.classList.remove('u-is-hidden');

        });

    },

    hide(...elements) {
        elements.forEach(function (element) {
            element.classList.add('u-is-hidden');

        });
    },

    toggle(...elements) {
        elements.forEach(function (element) {
            if (element.classList.contains('u-is-hidden')) {
                element.classList.remove('u-is-hidden');
            }
            else {
                element.classList.add('u-is-hidden');
            }
        });

    },


};

