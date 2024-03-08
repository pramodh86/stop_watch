


class StopWatch{



     

    constructor(){

        this.startTime = 0;
        this.running = false;
        this.elapsed = 0;
        this.timer = null;
        this.display = document.querySelector(".clock");
        this.startBtn = document.querySelector("#startBtn");
        this.stopBtn = document.querySelector("#stopBtn");
        this.resetBtn = document.querySelector("#resetBtn");


        this.startBtn.addEventListener("click",this.start.bind(this));
        this.stopBtn.addEventListener("click",this.stop.bind(this));
        this.resetBtn.addEventListener("click",this.reset.bind(this));


        



    }



    start(){

        if(!this.running){

            this.startTime = Date.now() - this.elapsed;;
            this.running=true;
            this.timer = setInterval(()=>{
                this.elapsed = Date.now() - this.startTime;
                this.print();
            },100);

        }


    }


    stop(){

        if(this.running){

            clearInterval(this.timer);
            this.running=false;

        }



    }


    reset(){

        this.elapsed = 0;
        this.print();


    }


    print(){


        const miliseconds = Math.floor(this.elapsed%1000/100);
        const seconds = Math.floor(this.elapsed/1000%60);
        const minutes = Math.floor(this.elapsed/60000%60);
        const hours = Math.floor(this.elapsed/3600000);

        this.display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;


    }


}


const stopWatch = new StopWatch();