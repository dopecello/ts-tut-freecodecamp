"use strict";
// enums serve the purpose to restrict somebodys choice in the values offered in a var
Object.defineProperty(exports, "__esModule", { value: true });
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
if (seat === AISLE || 0) {
} //this is bad because the variables can be changed
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["EMERGENCY"] = 3] = "EMERGENCY"; //default vals for enums is parallel with index val or with incremental given val from last defined member
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
var SeatChoiceString;
(function (SeatChoiceString) {
    SeatChoiceString["AISLE"] = "AISLE";
    SeatChoiceString["MIDDLE"] = "MIDDLE";
    SeatChoiceString["WINDOW"] = "WINDOW";
    SeatChoiceString["EMERGENCY"] = "EMERGENCY";
})(SeatChoiceString || (SeatChoiceString = {}));
var hcSeatOther = SeatChoiceString.AISLE;
var hcSeatOther2 = "EMERGENCY" /* SeatChoiceStringConst.EMERGENCY */;


//the above two enums compile into IIFE's, const enums simplify the code and arent compiled into the code at all.