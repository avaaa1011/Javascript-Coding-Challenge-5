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

//Task 3 - Shopping Cart
let cartItems = ["Pasta", "Milk", "Sauce"]; //declaring an array
console.log(`Initial Cart Items: ${cartItems}`); // Lists the first few items
cartItems.push("Chicken"); // Adding another item using push()
cartItems.pop(); //removing the last item in the array
cartItems.unshift("Noodles"); //adding another item to the beggining of the array
console.log(`Final Cart Items: ${cartItems}`); //prints updated list of cartItems

//Task 4 - Price Adjustments 
let prices = [100, 200, 300]; //declaring an array
let discountedPrices = prices.map(price => price * .90);//applying 10% discount to each price
console.log(`Discounted Prices: ${discountedPrices}`); 

//Task 5 - Product Availibility 
let inventory = [5,0,12,8,0];//declaring an array with 5 quantities 
let currenteInventory = inventory.filter(stock => stock > 0); //using a method to remove products that have no availibility.
console.log(`Available Inventory: ${currenteInventory}`);

//Task 6 - Revenue Calculation 
let sales = [500, 300, 200, 400]; //declaring an array
let totalRevenue = sales.revenue((total, sales)=> total + sales, 0); //using a method to calculate the total revenue 
console.log(`Total Revenue: $${totalRevenue}`); 

//Task 7 - Customer Search
let customers = ["Alice", "Bob", "Charlie", "David"]; //declaring an array
let search = customers.find(customer => customer === "Charlie");//using .find() method to search for a customer
console.log(`Customer: ${search}`);

//Task 8 - Tax Declaration
function calculateTax(amount, taxRate) //function
    {
    //calculating tax 
    return amount * taxRate
    }; 
    let tax = calculateTax(100, .2); //random example to calculate tax
    console.log(`Calculated Tax: $${tax}`);

//Task 9 - Discount Application 
function applyDiscount (price, discount)//declaring a function 
    {
        return price * discount //returning discount price
    }
let discountedPrice = applyDiscount(20, .3); //random example to show the function working 
console.log(`Discounted Price: $${discountedPrice}`); 


