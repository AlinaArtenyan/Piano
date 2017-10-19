function BlackKey(key) {
    Object.defineProperties(this, {
        elem:{
            value: $('<blackKey data-key=' + key.keyCode + ' data-file=' + key.fileName +'>')
        },
        key: {
            value: key
        }
    });

    let elem = this.elem,
        symbol={};
    Object.defineProperties(symbol, {
        ARROW_SIGN: {
            value: ' + \u21E7 '
        },
        ARROW_NOTE: {
            value: ''
        }
    });
    this.elem.mousedown(function () {
        let audio= new Audio(PATH + `${key.fileName}`);
        audio.play();
    });
    elem.append($('<span class="keyboardKeyBlack anim">').text(key.keyboardKey));
    this.elem.append($('<div class="arrowSign anim">').text(symbol.ARROW_SIGN));
    elem.append($('<span class="keyNameBlack">').text(key.keyName));
}