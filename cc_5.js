//Task 1 - Object Properties
let customer = //declaring the customer profile with multiple properties
    {
        name: "John Doe",
        age: 35,
        email: "john.doe@email.com"
    }; 
    console.log(`Customer's Name: ${customer.name}`); // printing customer name
    console.log(`Customer's Age: ${customer.age}`); // printing customer age
    console.log(`Customer's Email: ${customer.email}`); // printing customer email
    
//Task 2 - Order Details 
let order = //declaring an object with multiple properties
    {
        orderId: 12345,
        totalAmount: 150,
        status: "Processing",
        displayOrder() //creating a method that will log the details with 'this'
        {return console.log(`Order ID: ${this.orderId} | Total Amount: $${this.totalAmount} | Status: ${this.status}`)}
    }
order.displayOrder(); //calling the method to log the details
