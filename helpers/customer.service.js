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
    prefixCustomerID(prefix, customerID){
        return null;
    }
    
}

module.exports = new CustomerService()