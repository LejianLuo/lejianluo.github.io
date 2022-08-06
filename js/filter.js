const state=[['all',1],['space',0],['tech',0],['time',0],['parallel',0],['alien',0],['soon',0]];
const dropcontent=document.getElementById('dropcontent');
const allFilterLinks=dropcontent.getElementsByTagName('a');
const main=document.getElementById('maincontainer');
activate(state[0][0]);

let isOpen=false;
function filterDropbar(){
    if(isOpen==true){
        dropcontent.style.display='none';
        isOpen=false;
    }
    else{
        dropcontent.style.display='block';
        isOpen=true;
    }
}
function activeAll(){
    if(state[0][1]==0){
        for(let i=1;i<state.length;i++){
            deactivate(state[i][0]);
            state[i][1]=0;
        }
        for(let i=0;i<main.children.length;i++){
            if(i%2==0)
            main.children[i].style.display='block';
            else
            main.children[i].style.display='flex';
        }
        state[0][1]=1;
        activate(state[0][0]);
    }
    else{
        for(let i=0;i<main.children.length;i++){
            main.children[i].style.display='none';
        }
        deactivate(state[0][0]);
        state[0][1]=0;
    }
}
function activeState(){
    if(state[0][1]==1){
        for(let i=0;i<main.children.length;i++){
            main.children[i].style.display='none';
        }
        deactivate(state[0][0]);
        state[0][1]=0;
    }
   for(let i=1;i<state.length;i++){
        if(state[i][0]==event.target.id){
            if(state[i][1]==0){
                state[i][1]=1;
                activate(state[i][0]);
                document.getElementsByClassName(state[i][0])[0].style.display='block';
                document.getElementsByClassName(state[i][0])[1].style.display='flex';
                console.log('act');
            }
            else{
                state[i][1]=0;
                deactivate(state[i][0]);
                document.getElementsByClassName(state[i][0])[0].style.display='none';
                document.getElementsByClassName(state[i][0])[1].style.display='none';
                console.log('deact');
            }
        }
   }

}
function activate(id){
    document.getElementById(id).style.backgroundColor='rgb(88, 86, 86)';
    document.getElementById(id).style.color='aliceblue';

}
function deactivate(id){
    document.getElementById(id).style.backgroundColor='antiquewhite';
    document.getElementById(id).style.color='rgb(17, 17, 41)';
}

document.getElementById('filter').addEventListener("click", filterDropbar);

document.getElementById('all').addEventListener("click", activeAll);
Array.from(allFilterLinks).forEach((arr) => {
    console.log(arr.getAttribute('id'));
    let anchor=arr.getAttribute('id');
    if(anchor!='all') {
        document.getElementById(anchor).addEventListener("click", activeState);
    }
});