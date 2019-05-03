//小鸟类
function Bird(imgArr,x,y){

	this.imgArr = imgArr;

	this.index = parseInt(Math.random() * imgArr.length);

	this.img = this.imgArr[this.index];

	this.x = x;

	this.y = y;

	this.state = "D";

	this.speed = 0;
}

//小鸟煽动翅膀
Bird.prototype.fly = function(){

	this.index++;

	if(this.index > this.imgArr.length -1){

		this.index = 0;
	}

	this.img = this.imgArr[this.index];
}

//小鸟下降
Bird.prototype.fallDown = function(){

	if(this.state == "D"){

		this.speed ++;

		this.y += Math.sqrt(this.speed);
	}else{

		this.speed --;
		if(this.speed == 0){

			this.state = "D";

			return;
		}

		this.y -= Math.sqrt(this.speed);
	}
}

//小鸟上升
Bird.prototype.goUp = function(){

	this.speed = 20;

	this.state = "U";
}