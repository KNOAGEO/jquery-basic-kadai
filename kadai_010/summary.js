// １ボタンを押すと文字色が変わる
$(()=>{
    $('#change-color').on('click', ()=>{
        $('#target').css('color', 'skyblue');
    });
});

// 2　ボタンを押すと文字が切り替わる
$(()=>{
    $('#change-text').on('click', ()=>{
        $('#target').text('もう夕方です');
    });

// 3 ボタンを押すと、フェードアウトする
$(()=>{
    $('#fade-out').on('click', ()=>{
        $('#target').fadeOut();
    });

// 4 ボタンを押すと、フェードインする
$(()=>{
    $('#fade-in').on('click', ()=>{
        $('#target').fadeIn();
    });
});
});
});
