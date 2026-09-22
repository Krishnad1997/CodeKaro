// Create an arrow function calculateDiscount(price) that returns the price after a 15% discount. Test it with all prices.

let prices = [500, 1200, 999, 2500, 750];

const calculateDiscount = (price) => {
    return price - (price * 15 / 100);
};

for (let i = 0; i < prices.length; i++) {
    console.log(calculateDiscount(prices[i]));
}