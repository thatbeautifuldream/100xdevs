/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // maintain a result array
  const result = [];
  // loop through the transactions array using forEach
  transactions.forEach((transaction) => {
    // destructuring category and price from the transaction object
    const { category, price } = transaction;
    // check if the category is already present in the result array
    const categoryIndex = result.findIndex(
      (item) => item.category === category
    );
    // if not present, add a new object with category and price to the result array
    if (categoryIndex === -1) {
      result.push({ category, totalSpent: price });
    } else {
      // if present, add the price to the totalSpent of the category (repeat entry)
      result[categoryIndex].totalSpent += price;
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
