(function(){
	let snake = window.snake = function(gamethis){
		let game = gamethis

		this.length = 3
        this.snakey = 3*game.tall+game.dh/2
        this.snakex = 4*game.tall+game.dw/2
        this.snakedie = false
        this.body = [
        	{ x:this.snakex,y:this.snakey},
        	{ x:this.snakex+game.tall,y:this.snakey},
        	{ x:this.snakex+2*game.tall,y:this.snakey}
        ]
	}
	snake.prototype.update = function(){
		if (this.length>=4){
		for (let i in this.body){
			if (this.snakey==this.body[i].y&&this.snakex==this.body[i].x)
			{
	        	this.snakedie = true
	        	document.getElementById("die").load()
				document.getElementById("die").play()
	        	game.manage.enter(2)
				//clearInterval(game.timer)
	        }
		}
	}
    	this.body.push({x:this.snakex,y:this.snakey})
    	this.end = this.body[0]
    	this.body.splice(0,1)
    	//console.log(this.body)
		if(this.snakex+game.tall>game.borderright||this.snakex<game.borderleft||
			this.snakey+game.tall>game.borderbottom||this.snakey<game.bordertop)
		{
			//console.log(this.snakex,game.borderright)
			this.snakedie = true
			document.getElementById("die").load()
			document.getElementById("die").play()
			game.manage.enter(2)
			//clearInterval(game.timer)
		}
	}
	snake.prototype.render = function(){
		if(game.food.touch){
			//向数组中加入元素，第二个0 表示不会删除
			this.body.splice(0,0,this.end)
			game.food.touch = false
		}
		//console.log(this.body)
		for (let i in this.body){
		//for(let i=this.body.length-1;i>=0;i--){
			game.draw.fillStyle = "red"
			game.draw.fillRect(this.body[i].x,this.body[i].y,game.tall-1,game.tall-1)
		}
	}

})();