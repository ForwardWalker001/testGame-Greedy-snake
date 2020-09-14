(function(){
	let manage = window.manage = function(gamethis){
		let game = gamethis
		this.new = gamethis
		//console.log(game)
		
		this.key = "right"
		//this.bordery = game.snake.snakey + game.snake.length *game.tall
	}


	manage.prototype.event = function(){
		game.canvas.onclick = (e) =>{
		if (e.offsetY < game.touchtop)
		{
			this.key = "up"	
		}
		else if (e.offsetY>=game.touchtop && e.offsetX >= game.touchleft &&
			e.offsetX <= game.touchright){
			this.key = "down"
		}
		else if (e.offsetY>=game.touchtop && e.offsetX < game.touchleft) {
			this.key = "left"
		}
		else if (e.offsetY>=game.touchtop && e.offsetX >= game.touchright){
			this.key = "right"
		}
	}
		document.onkeydown = (e)=>{
			//console.log(e.which,e.keyCode)
			switch(e.which){
				//上
				case 87:
					this.key = "up"
					break
				//下
				case 83:
					this.key = "down"
					break
				//左
				case 65:
					this.key = "left"
					break
				//右
				case 68:
					this.key = "right"
					break
			}
			//if(game.snake.snakedie==false)this.render()
			
		}
	}
	manage.prototype.update = function(){
		switch(game.scene){
			case 0 :
				game.text()

				break
			case 1:
				this.event()
				if(this.key == "up"){
					game.snake.snakey -= game.tall
				}
				else if (this.key == "down") {
					game.snake.snakey += game.tall
				} 
				else if (this.key == "left"){
					game.snake.snakex -= game.tall
					//this.borderx = game.snake.snakex 
				}
				else {
					game.snake.snakex += game.tall
				}
				game.clear()
				game.food.update()
				game.food.render()
				game.snake.update()
				game.snake.render()
				
				break
			case 2:
				game.draw.fillStyle = "red"
				game.draw.font = '30px consolas'
				game.draw.fillText("你已经死亡",(game.canvas.width-120)/2,250)
				game.draw.fillText("点击重新开始",(game.canvas.width-150)/2,300)
				break

		
		}
		
	}
	manage.prototype.enter = function(num){
		this.new.scene = num
		//console.log(this.new.scene)
		this.new.canvas.onclick = ()=>{
			if(this.new.scene==0){
				//this.new.clear()
				this.enter(1)
			}
			else if(this.new.scene == 1){
				//this.update()
			}
			else if(this.new.scene == 2){
				//this.new.scene =0
				clearInterval(this.new.timer)
				this.new.start()
			}
		}
		
	}
})();