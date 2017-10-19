function WhiteKey(key) {
    Object.defineProperties(this, {
        elem:{
            value: $('<whiteKey data-key=' + key.keyCode + ' data-file=' + key.fileName + '>')
        },
        key: {
            value: key
        }
    });
    let elem = this.elem;
    elem.mousedown(function () {
        let audio= new Audio(PATH + `${key.fileName}`);
        audio.play();
    });

    elem.append($('<span class="keyNameWhite">').text(key.keyName));
    elem.append($('<span class="keyboardKeyWhite anim">').text(key.keyboardKey));
}