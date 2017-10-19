(() => {
    'use strict';

    var piano = new Piano(),
    bgColors = [ 'style0', 'style1', 'style2', 'style3', 'style4', 'style5', 'style6'];

    $('.styles').click(function() {

        var color = bgColors.shift();

        bgColors.push(color);
        $('main, main > .headerDiv > span')
            .removeClass()
            .addClass(color);
    });

    $('.btn').click(function(){
        let $this = $(this);

        $('.frontDiv, .backDiv').toggleClass('hidden');
        $this.text($this.text() == 'BACK' ? 'MENU' : 'BACK');
    });

    $('.keyAssist').click(function() {
        let $this = $(this);

        $this.text('KEY ASSIST ' + ($this.text() == 'KEY ASSIST ON' ? 'OFF' : 'ON') );
        $('whiteKey').toggleClass('hoverWhite');
        $('blackKey').toggleClass('hoverBlack');
        // $('').toggleClass('anim');
        $('.keyboardKeyWhite, .keyboardKeyBlack, .arrowSign').toggleClass('anim');
    });

})();


