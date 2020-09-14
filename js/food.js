(function(){
	let food = window.food = function(gamethis){
		let game = gamethis
		//console.log(gamethis)
		this.foodx = Math.floor(Math.random()*game.row )*game.tall +game.dw/2
		this.foody = Math.floor(Math.random()*game.column )*game.tall +game.dh/2
		this.touch = false
	}
	food.prototype.update = function(){
		if (game.snake.snakex==this.foodx && game.snake.snakey==this.foody){
			//console.log("jghj",game.snake.end)
			this.touch= true
			game.snake.length ++
			game.cookie ++
			$.cookie('score_snake', game.cookie , {path: '/' })
			document.Cookie = "scroe:" + game.cookie
			
			document.getElementById("point").load()
            document.getElementById("point").play()

			this.foodx = Math.floor(Math.random()*game.row )*game.tall +game.dw/2
			this.foody = Math.floor(Math.random()*game.column )*game.tall +game.dh/2
			//console.log(this.foodx)
		}	
	}
	food.prototype.render = function(){
		game.draw.fillStyle = "red"
		game.draw.fillRect(this.foodx,this.foody,game.tall-1,game.tall-1)
	}

})();