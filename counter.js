function countNum(num, speedCount){
    $(function(){
        let start = 0;
        let end = $(num).html();
        let speed = speedCount;
    
        setInterval(function(){
            if(start<end){
                start++;
            }
            $(num).html(start);
        },speed);
    })
}

countNum(".num1", 100);
countNum(".num2",1)
countNum(".num3",300)