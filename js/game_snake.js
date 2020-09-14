(function(){
		let game = window.game = function (){
		this.canvas = document.getElementById("canvas")
		this.draw = this.canvas.getContext("2d")
		//获取屏幕的高宽
		let w = document.documentElement.clientWidth
		let h = document.documentElement.clientHeight
		//方块的高
		this.tall = 30
		//画布的宽高
		let width = w>420?420:w
		let height = h>720?720:h
 		this.dw = width%this.tall
 		this.dh = height%this.tall
 		this.canvas.width = width
 		this.canvas.height = height

 		this.row = (width - this.dw)/this.tall
 		this.column = (height - this.dh )/this.tall
		
 		this.borderleft = this.dw/2
 		this.borderright = this.canvas.width-this.dw/2
 		this.bordertop = this.dh/2
 		this.borderbottom = this.canvas.height-this.dh/2
		
		this.touchtop = height/3*2
		this.touchleft = width/3
		this.touchright = width/3*2
		this.scene = 0

		this.border()
		this.touch()
		
		setTimeout(()=>{
			this.start()
		},3000)
}
	game.prototype.start = function(){
		//this.manage = new manage()
		this.clear()
		this.manage = new manage(this)
		this.cookie = 0
		document.Cookie = "scroe:" + this.cookie
		this.food = new food(this)
		this.snake = new snake(this)
		this.manage.enter(0)
		this.timer = setInterval(()=>{
			//this.clear()
			this.manage.update()
			//this.food.update()
			//this.food.render()
			//this.snake.update()
			//this.snake.render()
			this.border()
			this.score()
		},500)
	}
	game.prototype.clear = function(){
		this.draw.clearRect(0,0,this.canvas.width,this.canvas.height)
	}
	game.prototype.text = function(){
		this.draw.fillStyle = "red"
		this.draw.font = '30px consolas'
		this.draw.fillText("加载完成",(this.canvas.width-120)/2,250)
		this.draw.fillText("点击开始",(this.canvas.width-120)/2,300)
	}
	game.prototype.border = function(){
		this.draw.fillStyle = "black"
 		this.draw.fillRect(0,0,this.canvas.width,this.dh/2)
 		this.draw.fillRect(0,this.canvas.height-this.dh/2,this.canvas.width,this.dh/2)
 		this.draw.fillRect(0,0,this.dw/2,this.canvas.height)
 		this.draw.fillRect(this.canvas.width-this.dw/2,0,this.dw/2,this.canvas.height)
	}
	game.prototype.score = function(){
		
		let num = document.Cookie.split(":")[1]
		//$.cookie('score_snake', num , {path: '/' })
		this.draw.fillStyle = "blue"
		this.draw.font = '40px consolas'
		this.draw.fillText(num,(this.canvas.width-30)/2,120)
	}
	game.prototype.touch = function(){
		this.draw.strokeStyle = "red"
		this.draw.moveTo(0,this.touchtop)
		this.draw.lineTo(this.canvas.width,this.touchtop)
		this.draw.moveTo(this.touchleft,this.touchtop)
		this.draw.lineTo(this.touchleft,this.canvas.height)
		this.draw.moveTo(this.touchright,this.touchtop)
		this.draw.lineTo(this.touchright,this.canvas.height)
		this.draw.stroke()
		this.draw.fillStyle = "red"
		this.draw.font = '20px consolas'
		this.draw.fillText("电脑请用 WSAD 进行移动",(this.canvas.width-20*13)/2,120)
		this.draw.fillText("手机请点击这四个区域进行移动",(this.canvas.width-20*14)/2,150)
	}
})();