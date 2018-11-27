var customerService = require('./customer');
describe("Customer Test", () =>{
    describe("getCustomer() test", ()=>{
        beforeEach(() => {
                
        });
        test("Should get a customer by ID", () =>{
            expect(
                customerService.getCustomer(1)
            ).toBe(true)
        })
    })
    
})