interface TakePhoto {
    cameraMode: string
    filter: string
    burstMode: number
}

class Instagram implements TakePhoto { //incorrectly implementing interface: needs to pass TakePhoto elements.

}

class Facebook implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) { }
} // correct, no errors

interface Story {
    createStory(): void //or anything
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) { }

    createStory(): void {
        console.log("Story was created") // can do photos or whatever
    }
}

export { } //these are to prevent errors from other parts of the folder.