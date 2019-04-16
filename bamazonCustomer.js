// console.log('aidaskdjaslkdjaslkjd')
var mysql = require ('mysql');
var inquirer = require ('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tealhammock",
    database: "bamazon_db",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    printItems();
});
function printItems() {
connection.query("SELECT * FROM products", function(err, res) {
   // if (err) throw (err);
    console.log("Item Product  Department  Price  Quantity ");

    for (var i=0; i<res.length; i++) {
        //if (i<0)
        //{
    		console.log(res[i].item_id + "      " + res[i].product_name + "  " + res[i].department_name + "  " + res[i].price + "  " + res[i].stock_quantity);
    	//}
        //else if (i >= 0)
        //{
    		//console.log(res[i].item_id + "      " + res[i].product_name + "  " + res[i].department_name + "  " + res[i].price + "  " + res[i].stock_quantity);
    //}
    }

    promptUser();
});
}
var promptUser = function(){
// console.log('------------------')
	inquirer.prompt([{
		name: 'item_id',
		message: "Enter the ID of the item you wish to purchase.",

		validate: function(value){
            if (isNaN(value) === false) {
                return true;
            }
            else {
            	return false;
            }
		}
	},{

        name: "userQuantity",
        message: "How many would you like to buy?",

        validate: function(value){
            if (isNaN(value) == false) {
                return true;
            }
            else {
                return false;
            }
        }
    }]).then(function(answers){

    		var currentItem = answers.item_id;
    		var currentAmount = answers.userQuantity;

            connection.query("SELECT * FROM products WHERE ?",{
                item_id: answers.item_id
            },function(err, res){

                if (currentAmount > res[0].stock_quantity){
                    console.log("You cannot buy that many!");

                    promptUser();
                }
                else { 
                    console.log("You can buy it!");

                    var newQuantity = (res[0].stock_quantity - currentAmount);
                    var totalCost = res[0].price*currentAmount;

                   
                    connection.query("UPDATE products SET ? WHERE ?",[{
                        stock_quantity: newQuantity
                    },{
                        item_id: currentItem
                    }], function(err, res){
                        console.log("You were charged: " + totalCost);
                        promptUser();
                    });
                }
            })
	   })
}   