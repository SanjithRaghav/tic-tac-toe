var turn=0;
var value={
    1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2]
}
$('.box').click(function() {
    console.log(turn);
    if($(this).html()!='X' && $(this).html()!='O' && turn!=0)
    {
        if(turn==1){
            $(this).html('X');
            check();
            if(turn!=0){
                turn=2;
            }
        }
        else{
            $(this).html('O');
            check();
            if(turn!=0){
                turn=1;
            }
        }
    }
});

function check()
{
    var arr=new Array(3);
    for(var i=0;i<3;i++)
    {
        arr[i]=new Array(3);
    }
    for(var i=1;i<=9;i++)
    {
        var content=$('#'+i).html();
        if(content=='X' || content=='O')
        {
            arr[value[i][0]][value[i][1]]=content;
        }
    }
   for(var i=0;i<3;i++){
        if(arr[i][0]==arr[i][1]&&arr[i][1]==arr[i][2]&&(arr[i][0]=='X'||arr[i][0]=='O')){
            $('h1').html('Player '+turn+' wins');
            $('.footer').html('Press any key to continue');
            turn=0;
            return;
        }
    }
    for(var i=0;i<3;i++){
        if(arr[0][i]==arr[1][i]&&arr[1][i]==arr[2][i]&&(arr[0][i]=='X'||arr[0][i]=='O')){
            $('h1').html('Player '+turn+' wins');
            $('.footer').html('Press any key to continue');
            turn=0;
            return;
        }
    }
    if(arr[1][1]==arr[2][2]&&arr[2][2]==arr[0][0]&&(arr[0][0]=='X'||arr[0][0]=='O'))
    {
        $('h1').html('Player '+turn+' wins');
        $('.footer').html('Press any key to continue');
        turn=0;
        return;
    }
    if(arr[1][1]==arr[2][0]&&arr[2][0]==arr[0][2]&&(arr[0][2]=='X'||arr[0][2]=='O'))
    {
        $('h1').html('Player '+turn+' wins');
        $('.footer').html('Press any key to continue');
        turn=0;
        return;
    }
    var temp=1;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++)
        {
            if(arr[i][j]!='X'&&arr[i][j]!='O')
            {
                temp=0;
            }
        }
    }
    if(temp==1)
    {
        $('h1').html('Draw')
        turn=0;
        $('.footer').html('Press any key to continue');
    }
}

$(document).keypress(function (){
    if(turn==0){
        turn=1;
        $('.footer').html('Made by Sanjith');
        $('.header').html('TIC TAC TOE');
        for(var i=1;i<=9;i++){
            var content=$('#'+i).html(' ');
        }
    }
})




