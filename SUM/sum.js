(()=>{

    /計算結果/

    caliculate=(obj)=>{
        for(let index = 1;index <= 10;index++){
            index + obj;
            window.alert(index+'足した結果は'　+　[index + obj]+ 'です。');
    
        };
    
    };

    /ボタンを押したら計算する/

    const $button = document.getElementsByTagName('button');

   $button[0].addEventListener('click', ()=>{
        caliculate(0);

    });

   $button[1].addEventListener('click', ()=>{
        caliculate(1);

    });

   $button[2].addEventListener('click', ()=>{
        caliculate(2);

    });

   $button[3].addEventListener('click', ()=>{
        caliculate(3);

    });

   $button[4].addEventListener('click', ()=>{
        caliculate(4);

    });

   $button[5].addEventListener('click', ()=>{
        caliculate(5);

    });

   $button[6].addEventListener('click', ()=>{
        caliculate(6);

    });

   $button[7].addEventListener('click', ()=>{
        caliculate(7);

    });

   $button[8].addEventListener('click', ()=>{
        caliculate(8);

    });

   $button[9].addEventListener('click', ()=>{
        caliculate(9);

    });

   $button[10].addEventListener('click', ()=>{
        caliculate(10);

    });
   
    
})()