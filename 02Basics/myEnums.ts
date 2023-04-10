// enums serve the purpose to restrict somebodys choice in the values offered in a var

const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

if (seat === AISLE || 0) {

} //this is bad because the variables can be changed

enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    EMERGENCY //default vals for enums is parallel with index val or with incremental given val from last defined member
}

const hcSeat = SeatChoice.AISLE

enum SeatChoiceString {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE",
    WINDOW = "WINDOW",
    EMERGENCY = "EMERGENCY"
}

const hcSeatOther = SeatChoiceString.AISLE

const enum SeatChoiceStringConst {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE",
    WINDOW = "WINDOW",
    EMERGENCY = "EMERGENCY"
}

const hcSeatOther2 = SeatChoiceStringConst.EMERGENCY

export {}