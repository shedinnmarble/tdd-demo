const ErrorModel = require('../models/error.model');
const CustomerStatus = require('../models/customer.status.model')
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
        if(customer.status === CustomerStatus.Active){
            return true;
        }else{
            return false;
        }
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
        if(!prefix){
            throw new Error(ErrorModel.prefix_is_null);
        }
        const prefixCustomerID = prefix + customerID;
        if(prefixCustomerID.length > 15){
            throw new Error(ErrorModel.prefixed_customerID_too_long)
        }
        return prefixCustomerID;
    }

    
}

module.exports = new CustomerService()