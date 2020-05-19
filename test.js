const string = `
.html *{margin: 0;padding: 0;box-sizing: border-box;}
.html *::after,.html *::before{margin: 0;padding: 0;box-sizing: border-box;}
body{
    background: rgb(255, 229, 0);
    position: relative;
}
.nose{
    width: 20px;
    height: 20px;
    position: fixed;
    top: 250px;
    left: 50%;
    transform: translateX(-10px);
    border-radius: 50%;
    overflow: hidden;
}
.nose::after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: black;
    transform-origin: 100% 100%;
    transform: rotate(45deg);
}
.eyes{
    position: fixed;
    width: 80px;
    height: 80px;
    border: 3px solid black;
    background: rgb(48, 48, 49);
    border-radius: 50%;
    top: 200px;
    left: 50%;
    margin-left: -40px;
}
.eyes.left{
    transform: translateX(-100px);
}
.eyes.right{
    transform: translateX(100px);
}
.eyes.left::after{
    content: '';
    display: block;/*这两步是使用伪元素的第一个步骤*/
    width: 40px;
    height: 40px;
    border: 3px solid black;
    background: white;
    border-radius: 50%;
    margin-left: 7px;
    margin-top: 3px;
}
.eyes.right::after{
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    border: 3px solid black;
    background: white;
    border-radius: 50%;
    margin-left: 7px;
    margin-top: 3px;
}
.mouth{
    width: 200px;
    height: 200px;
    position: fixed;
    left: 50%;
    top:300px;
    margin-left: -100px;
}
.mouth > .lip{
    position: relative;
    top: -15px;
}
.mouth > .lip >.left{
    z-index: 1;
    background: rgb(255, 229, 0);
    position: relative;
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-radius: 0  0 0 50px;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(-15deg);
}
.mouth > .lip >.right{
    z-index: 1;
    background: rgb(255, 229, 0);
    border: 3px solid black;
    width: 100px;
    height: 30px;
    position: absolute;
    left: 50%;
    border-radius: 0  0 50px 0;
    border-top: transparent;
    border-left: transparent;
    transform: rotate(15deg);
    top:0;
}
.down{   
    width: 100%;
    height: 230px;
    position: absolute;
    top: 0;
    overflow: hidden;
}
.down > .tongue{
    border: 3px solid black;
    width: 180px;
    height: 800px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -90px;
    border-radius: 90px/300px;
    overflow: hidden;
    background:rgb(155, 0, 10);
}
.tongue::after{
    content: '';
    display: block;
    width: 160px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    bottom: 0;
    border-radius: 300px/250px;
    background: rgb(255, 71, 96);
}
.face{
    border: 2px solid black;
    height: 120px;
    width: 120px;
    background: rgb(235, 1, 3);
    border-radius: 50%;
    position: fixed;
    top: 300px;
    left: 50%;
    margin-left: -60px;
}
.face.left{
    transform: translateX(-200px);
}
.face.right{
    transform: translateX(200px);
}
`

const player = {
    id: undefined,
    time: 100,
    n: 1,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerHTML = string.substr(0, player.n)
        player.ui.demo2.innerText = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {/*可以这样简写*/
            const value = player.events[key]/*这个值其实是字符串*/
            document.querySelector(key).onclick = player[value]/*用字符串去取元素的方法*/
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerHTML = string.substring(0, player.n)
        player.ui.demo2.innerText = string.substr(0, player.n)
        player.ui.demo2.scrollTop = demo2.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)/*这里的run等价于()=>{run()},简化的时候不能加括号，函数后面加了括号就等于了这个函数的返回值了。*/
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()
