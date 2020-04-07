class raindrop{
    constructor(x,height){
        this.letters = [];
        this.x = x;
        this.y = -10;
        this.height = height;
        this.pos = [];
    }

    display(){
        this.pos.push([this.x,this.y]);
        if(this.pos.length > this.height){
            this.pos.splice(0,1);
        }

        for(var i = 0; i < this.pos.length; i++){
            var pos = this.pos[i];
            fill(random(0,255),random(0,255),random(0,255));
            text(Math.round(random(0,9)),pos[0],pos[1]);
        }

        this.y += 10;
    }
}
