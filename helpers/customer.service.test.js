var customerService = require('./customer.service');
var customerDBHelper = require('./customer.helper.mock');
var ErrorModel = require('../models/error.model');
var CustomerStatus = require('../models/customer.status.model')
describe("Customer Test", () =>{
    describe("getCustomer() test", ()=>{
        beforeEach(() => {
            customerService.customerDBHelper = customerDBHelper; 
        });
        afterEach(() =>{
            customerService.customerDBHelper = null;            
        })       
        test("Should get a customer by ID", () =>{  
            const customerID = 1000;          
            const customer = customerService.getCustomer(customerID);
            expect(
                customer.CustomerID
            ).toBe(customerID)
        })
    })
    describe('prefixCustomerID() test', () => {
        beforeEach(() => {
            customerService.customerDBHelper = customerDBHelper; 
        });
        afterEach(() =>{
            customerService.customerDBHelper = null;            
        }) 
        it('should prefix not be null', () => {
            expect(() =>{
                customerService.prefixCustomerID(null, 1)
            }).toThrow(ErrorModel.prefix_is_null)
        });
        it('should return prefix+customerid', () => {
            const prefix = "dewei";
            const customerID = 123;
            const prefixedCustomerID = customerService.prefixCustomerID(prefix, customerID);
            expect(prefixedCustomerID).toBe(prefix + customerID)
        });
        it('should return prefixed customerid length <= 15', () => {
            const prefix = "dewei";
            const customerID = 123;
            const prefixedCustomerID = customerService.prefixCustomerID(prefix, customerID);
            expect(prefixedCustomerID.length).toBeLessThan(15);
        });
        it('should throw Exception if prefixed customerid length > 15', () => {
            const prefix = "dewei----";
            const customerID = 123456789012;
            expect(() =>{
                customerService.prefixCustomerID(prefix, customerID)
            }).toThrow(ErrorModel.prefixed_customerID_too_long)
        });
    });
    describe('isCustomerActive() test', () => {
        it('Should return true', () => {
            const activeCustomer = {
                First: "Dewei",
                Last: "Xiang",
                status: CustomerStatus.Active
            }
            expect(
                customerService.isCustomerActive(activeCustomer)
            ).toBe(true);
        });
        it('Should return false', () => {
            const activeCustomer = {
                First: "Dewei",
                Last: "Xiang",
                status: CustomerStatus.Disabled
            }
            expect(
                customerService.isCustomerActive(activeCustomer)
            ).toBe(false);
        });
    });
    
})