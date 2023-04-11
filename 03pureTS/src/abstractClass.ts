abstract class TakePhoto { //once you declare 'abstract', no new object can be created from this class.
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void // wihtout putting abstract at the beginning you get this error: 'Function implementation is missing or not immediately following the declaration.'
    getReelTime(): number{
        //some complicated calc
        return 9
    }    
}

//these are kind of like blueprints. it's the responsibility of other classes to extend TakePhoto

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ) {
            super(cameraMode, filter) //needs to be included 
        }

        getSepia(): void {
            console.log("sepia")
        }
}

const william = new Instagram("test", "test2", 8)
