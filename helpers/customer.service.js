class CustomerService{
    constructor(){
        this.customerDBHelper = null;
    }
    get dbHelper() {
        if(!this.customerDBHelper){
            throw new Error("No Customer Service Instance");
        }
        return this.customerDBHelper;
    }
    set dbHelper(customerDBHelper){
        this.customerDBHelper = customerDBHelper;
    }
    getCustomer(customerID){
        return this.dbHelper.getCustomer(customerID);
    }
    
    isCustomerActive(customer){
        return null;
    }
    /**
     * Requirement
     * 1. prefix can't be null
     * 2. must be prefix+customerID
     * 3. total length must be <= 15
     * @param {} prefix 
     * @param {*} customerID 
     */
    prefixCustomerID(prefix, customerID){
        return null;
    }

    
}

module.exports = new CustomerService()