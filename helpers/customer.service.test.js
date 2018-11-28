var customerService = require('./customer.service');
var customerDBHelper = require('./customer.helper.mock');
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
    
})