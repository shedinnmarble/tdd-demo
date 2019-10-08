let baseOrderID = 1001;
/**
 * Generate A Order Number.
 */
function generateAnOrderID(){
    return baseOrderID ++;
}

/**
 * Requirements:
 * 1. Prefix can't be null.
 * 2. OrderID can't be null.
 * 3. Prefixed OrderID must be less than 5 characters
 * @param {*} prefix 
 * @param {*} orderID 
 */
function prefixOrderID(prefix, orderID){
    if(!prefix){
        throw new Error("Prefix can't be null")
    }
    if(!orderID){
        throw new Error("OrderID can't be null");
    }
    let prefixed = prefix + orderID;
    if(prefixed.length > 9){
        throw new Error("Prefixed order ID can't be long than 9")
    }
    return prefixed;
}

module.exports = {
    generateAnOrderID,
    prefixOrderID
}