
 
    let item2 = parseInt(prompt(`Enter the price of Chocos`));
    let qItem1 = parseInt(prompt(`How many chocos do you want to buy?`));
    let item1 = parseInt(prompt(`Enter the price of busicuits`));
    let qItem2 = parseInt(prompt(`How many busicuits do you want to buy?`));
    let shippingCharges = 100;
    totalCharges = ((item1 * qItem1) + (item2 * qItem2) + 100);


    document.write("Price of Chocos are " + item1 + "<br/>");
    document.write("Quantity of chocos is " + qItem1 + "<br/>");
    document.write("Price of busicuits is " + item2 + "<br/>");
    document.write("Quantity of busicuits is " + qItem2 + "<br/>");
    document.write("Shipping Charges " + shippingCharges + "<br/>");
    document.write("Total cost of your order is " + totalCharges + "<br/>" + "<br/>" + "<br/>" + "<br/>")