"use strict";
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}
// DONT DO THIS!
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
} //we havent accounted for empty string. edge case but bad for business
// ALTERNATIVE
function printThem(strs) {
    if (strs !== null) { //null is checked
        if (typeof strs == 'object') {
            for (const s of strs) {
                console.log(s); //this is a string array
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs); //strs is a string
        }
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) { // this verifies if this property exist in our parameter.
        return account.isAdmin;
    }
}
