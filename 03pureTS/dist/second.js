"use strict";
class Instagram {
}
class Facebook {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
} // correct, no errors
class YouTube {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    createStory() {
        console.log("Story was created"); // can do photos or whatever
    }
}
