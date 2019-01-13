'use strict';

module.exports = {

    globalValue: 5,
    secondGlobalValue: 7,

    newGlobalValues(newValue1, newValue2) {
        this.globalValue = newValue1;
        this.secondGlobalValue = newValue2;
    }
};