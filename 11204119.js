
function A1() {
	document.getElementById("col").style.display='block';
	document.getElementById("title").style.display='none';
	document.getElementById("col1").innerHTML="歡迎來到?遊戲世界";
	document.getElementById("butt1").style.display='block'
}
function A2() {
	document.getElementById("col").style.display='block';
	document.getElementById("title").style.display='none';
	document.getElementById("col1").innerHTML="你好";
	document.getElementById("butt1").style.display='block';
}
function A3() {
	document.getElementById("title").style.display='block';
	document.getElementById("col").style.display='none';
}
function A4() {
	document.getElementById("col2").style.display='block';
	document.getElementById("col").style.display='none';
	document.getElementById("col1").style.display='none';
	document.getElementById("butt1").style.display='none';
	document.getElementById("Canvas").style.display='block';

	
}

//查詢chat
const canvas = document.getElementById("Canvas");
canvas.width = 150; // 調整寬度至小恐龍遊戲的比例
canvas.height = 150; // 調整高度至小恐龍遊戲的比例
const ctx = canvas.getContext("2d");

// 繪製背景
function drawBackground() {
    ctx.fillStyle = "#70c5ce"; // 白色背景
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 繪製雲朵和特效
function drawClouds() {
    function drawBlob(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // 左側雲朵（藍色）
    drawBlob(40, 60, 20, "#1E90FF");
    drawBlob(30, 70, 15, "#4169E1");
    drawBlob(50, 70, 15, "#00BFFF");

    // 右側雲朵（藍色）
    drawBlob(110, 60, 20, "#1E90FF");
    drawBlob(100, 70, 15, "#4169E1");
    drawBlob(120, 70, 15, "#00BFFF");
}

// 繪製科斯莫古主體
function drawCosmogBody() {
    // 主體（紫色圓形）
    const gradient = ctx.createRadialGradient(75, 75, 10, 75, 75, 50);
    gradient.addColorStop(0, "#8A2BE2");
    gradient.addColorStop(1, "#4B0082");
    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // 添加煙霧效果
    ctx.beginPath();
    ctx.arc(75, 45, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#A020F0";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75, 105, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#A020F0";
    ctx.fill();
}

// 繪製臉部細節
function drawFace() {
    // 臉部圓形
    ctx.beginPath();
    ctx.arc(75, 75, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();

    // 左臉頰（藍色圓點）
    ctx.beginPath();
    ctx.arc(65, 80, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#1E90FF";
    ctx.fill();

    // 右臉頰（藍色圓點）
    ctx.beginPath();
    ctx.arc(85, 80, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#1E90FF";
    ctx.fill();

    // 眼睛（黃色小圓）
    ctx.beginPath();
    ctx.arc(70, 70, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFF00";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(80, 70, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFF00";
    ctx.fill();

    // 嘴巴（粉紅色小圓）
    ctx.beginPath();
    ctx.arc(75, 85, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#FF69B4";
    ctx.fill();
}

// 繪製星光效果
function drawStars() {
    function drawStar(x, y, size, color) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    drawStar(50, 30, 2, "#FFFFFF");
    drawStar(100, 30, 2, "#FFFFFF");
    drawStar(75, 15, 3, "#FFFFFF");
}

// 主程式
function drawCosmog() {
    drawBackground();  // 畫背景
    drawClouds();      // 畫雲朵
    drawCosmogBody();  // 畫主體
    drawFace();        // 畫臉部
    drawStars();       // 畫星光
}

// 繪製科斯莫古
drawCosmog();




let area=document.querySelector("body");
let gravity=5;
let maxTop=580;
let maxLeft=1170;
let targetX = 0;
let targetY = 0;

// 更新角色位置
function updatePlayerPosition(x, y) {
    const elem = document.getElementById("Canvas");
    elem.style.left = `${x}px`;
    elem.style.top = `${y}px`;
}

function win(x,y) {
    if (
        Math.abs(x - targetX) < 10 && // 判斷 X 軸接近
        Math.abs(y - targetY) < 10 // 判斷 Y 軸接近
    ) {
    	document.getElementById("col1").style.display="block";
        document.getElementById("wingame").style.display = "block"; // 顯示勝利訊息

    	document.getElementById("col2").style.display="none";
    }
}
area.addEventListener("keydown",function(event){
	let elem=document.getElementById("Canvas");
	let x=elem.offsetLeft||0;
	let y=elem.offsetTop||0;

	switch(event.key){
		case"ArrowUp":
			if (y-10>=0){
				elem.style.top=(y-10)+'px';
				
                y -= 10;
                updatePlayerPosition(x, y);
            
			}
		break;
		case"ArrowDown":
			if (y+10<=maxTop){
				elem.style.top=(y+10)+'px';
				y += 10;
                updatePlayerPosition(x, y);
			}
			break;
		case"ArrowLeft":
			if (x-10>=0){
				elem.style.left=(x-10)+'px';
				x -= 10;
                updatePlayerPosition(x, y);
		}
			break;
		case"ArrowRight":
			if (x+10<=maxLeft){
				elem.style.left=(x+10)+'px';
				x += 10;
                updatePlayerPosition(x, y);
			}
			break;

	}
	win(x,y); // 每次移動後檢查是否勝利
});



