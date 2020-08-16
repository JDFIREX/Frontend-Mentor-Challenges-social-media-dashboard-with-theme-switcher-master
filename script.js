let darkmodeBtn = document.querySelector('.darkmode_btn');
let mode = "light"; //light mode onload 

darkmodeBtn.addEventListener('click', (e) => darkmode(e))

function darkmode(e){
    mode == 'light' ? ChangeToDarkMode() : ChangeToLightMode();
}
function ChangeToDarkMode(){
    let DarkBG = 'hsl(230, 17%, 14%)'; 
    let DarkBGPattern = 'hsl(232, 19%, 15%)';
    let DarkHeader = 'hsl(0, 0%, 100%)';
    let DarkP = 'hsl(228, 34%, 66%)';
    let DarkCard = 'hsl(228, 28%, 20%)';
    let DarkGradient = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
    let DarkBTN = 'hsl(230, 17%, 14%)';
    let buttonPostion = 'calc(100% - 20px)';
    let CSSVarDark = 'hsl(232, 19%, 15%)';
    ChangeColor(DarkBG,DarkBGPattern,DarkHeader,DarkP,DarkCard,DarkGradient,DarkBTN, buttonPostion,  CSSVarDark)
    mode = 'Dark'

}
function ChangeToLightMode(){
    let LightBG = 'hsl(0, 0%, 100%)'; 
    let LightBGPattern = 'hsl(225, 100%, 98%)';
    let LightHeader = 'hsl(230, 17%, 14%)';
    let LightP = 'hsl(228, 12%, 44%)';
    let LightCard = "hsl(227, 47%, 96%)"
    let LightGradient = 'hsl(230, 22%, 74%)'
    let LightBTN = 'hsl(0, 0%, 100%)';
    let buttonPostion = '0';
    let CSSVarDark = 'hsl(230, 22%, 74%)';
    ChangeColor(LightBG,LightBGPattern,LightHeader,LightP,LightCard,LightGradient,LightBTN, buttonPostion, CSSVarDark)
    mode = "light";
}

function ChangeColor(BG, BGPattern, Header, P, Card, Gradient, BTN, Flex, CSS) {
    document.querySelector('.main').style.backgroundColor = BG;
    document.querySelector('.bg').style.backgroundColor = BGPattern;
    document.querySelectorAll('.H').forEach( i => i.style.color = Header);
    document.querySelectorAll('.P').forEach( i => i.style.color = P);
    document.querySelectorAll('.main_media_item').forEach( i => i.style.backgroundColor = Card);
    document.querySelectorAll('.overview_item').forEach( i => i.style.backgroundColor = Card);
    document.querySelector('.darkmode_bg').style.background = Gradient;
    document.querySelector('.darkmode_btn').style.left = Flex;
    document.querySelector('.darkmode_btn').style.backgroundColor = BTN;
    document.querySelectorAll('.overview_item').forEach( i => i.addEventListener('mouseover', () => {
        i.style.backgroundColor = CSS;
    }));
    document.querySelectorAll('.overview_item').forEach( i => i.addEventListener('mouseleave', () => {
        i.style.backgroundColor = Card;
    }));
    document.querySelectorAll('.main_media_item').forEach( i => i.addEventListener('mouseover', () => {
        i.style.backgroundColor = CSS;
    }));
    document.querySelectorAll('.main_media_item').forEach( i => i.addEventListener('mouseleave', () => {
        i.style.backgroundColor = Card;
    }));
}