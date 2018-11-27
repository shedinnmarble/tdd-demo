class Customer{
    constructor(){
        this.customerService = null;
    }
    get customerService() {
        return this.customerService;
    }
    set customerService(customerService){
        this.customerService = customerService;
    }
    getCustomer(customerID){
        return null;
    }
    
    isCustomerActive(customer){
        return null;
    }
    prefixCustomerID(prefix, customerID){
        return null;
    }
    
}

const customer = new Customer();

module.exports = customer