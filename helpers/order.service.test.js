const OrderService = require('./order.service')
describe('Order Service Test', () =>{
    describe("getOrdersTet", () =>{
        test("Order ID must 4 digits", ()=>{
            let result = OrderService.generateAnOrderID();
            expect(result).toBeGreaterThan(1000);
        })
    })
    describe("prefixOrderID() Test", () =>{
        test("should throw error if prefix is null", () =>{
            let prefix = null;
            let orderID = 1234;
            expect(() =>{
                OrderService.prefixOrderID(prefix, orderID)
            }).toThrowError();
        })

        test("should throw error if orderID is null", () =>{
            let prefix = 'dewei';
            let orderID = null;
            expect(() =>{
                OrderService.prefixOrderID(prefix, orderID)
            }).toThrowError();
        })

        test("should prefixed orderID length is less than 9", () =>{
            let prefix = "dewei";
            let orderID = 123;
            let result = OrderService.prefixOrderID(prefix, orderID);
            expect(result.length).toBeLessThan(9);
        })

        test("should throw error if prefixed order length is greater than 9", () =>{
            let prefix = "dew";
            let orderID = 1234567;
            expect(() =>{
                OrderService.prefixOrderID(prefix, orderID)
            }).toThrowError();
        })
    })

})