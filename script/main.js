function Main() {
    Object.defineProperties(this, {
        elem: {
            value: $('<main>')
        }
    });

    var $rightDynamic = $('<div>', {'class': 'rightDynamic'}),
        $playButtonSpan = $('<span>', {'class': 'playButtonSpan', 'text': 'PLAY!'}),
        $horizontalLine = $('<hr>', {'class': 'horizontal'}),
        $verticalLine = $('<hr>', {'class': 'vertical'}),
        $keySpanBottom = $('<span>', {'class': 'keySpanBottom', 'text': 'YOUR KEYBOARD:'}),
        $keySpanTop = $('<span>', {'class': 'keySpanTop', 'text': 'PRESS A KEY'}),
        $keyDiv = $('<div>', {'class': 'keyDiv'}).append($keySpanBottom, $keySpanTop),
        $helpButton = $('<a>', {'class': 'helpButton',
            'text': '?',
            'href': 'https://virtualpiano.net/music-sheets/how-to-play/',
            'target': '_blank'}),

        $playDiv = $('<div>', {'class': 'playDiv'}).append($playButtonSpan),
        $frontDiv = $('<div>', {'class': 'frontDiv'}).append($verticalLine, $playDiv, $keyDiv),
        $musicSheet = $('<a>', {
            'class': 'musicSheet',
            'text': 'MUSIC SHEET',
            'href': 'https://virtualpiano.net/category/music-sheets/',
            'target': '_blank'
        }),
        $keyAssist = $('<div>', {'class': 'keyAssist', 'text': 'KEY ASSIST OFF'}),
        $styles = $('<div>', {'class': 'styles', 'text': 'STYLES'}),
        $about = $('<a>', {
            'class': 'about',
            'text': 'ABOUT',
            'href': 'https://virtualpiano.net/about-virtual-piano-2/',
            'target': '_blank'
        }),
        $backDiv = $('<div>', {'class': 'backDiv hidden'}).append($musicSheet, $keyAssist, $styles, $about),
        $menuButton = $('<button>', {'class': 'btn', 'text': 'MENU'}),
        $tabPiano = $('<div>', {'class': ' tabPiano'}).append($menuButton, $helpButton),
        $headerDiv = $('<div>', {'class': 'headerDiv'}).prependTo(this.elem),
        $bas = $('<span>', {'class': 'bas'}),
        $leftDynamic = $('<div>', {'class': 'leftDynamic'}),
        $logoRightDiv = $('<div>', {'class': 'logoRight'}),
        $logoLeftDiv = $('<div>', {'class': 'logoLeft'}),
        $menuBar = $('<div>', {'class': 'menuBar'}).append($horizontalLine, $frontDiv, $backDiv, $tabPiano);
    $headerDiv.append($leftDynamic, $menuBar, $rightDynamic, $bas);
    $rightDynamic.after($logoRightDiv);
    $leftDynamic.after($logoLeftDiv);

    for (let i in pianoArray) {
        this.elem.append(new Octave(pianoArray[i]).elem);
    }
    $bas.click(function () {
        $('.keyNameWhite').toggleClass('WhiteBas');
        $('.keyNameBlack').toggleClass('BlackBas');
    });
}