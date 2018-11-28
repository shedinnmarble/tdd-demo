class CustomerHelperMock{
    getCustomer(customerID){
        return {
            FirstName: "Dewei",
            LastName: "Xiang",
            CustomerID: customerID
        }
    }
}
module.exports = new CustomerHelperMock();