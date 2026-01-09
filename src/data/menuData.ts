export interface MenuItem {
  name: string;
  description?: string;
  prices: { size: string; price: number }[];
  subtitle?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const toppings = [
  "Pepperoni", "Beef", "Sausage", "Canadian Bacon", "Anchovies", "Ham", "Meatballs",
  "Gyro Meat", "Shrimp", "Philly Steak", "Chicken", "Bacon", "Onions", "Mushrooms",
  "Green Peppers", "Black Olives", "Tomatoes", "Bell Peppers", "Spinach", "Pineapple",
  "Jalapeños", "Pepperoncini", "Banana Peppers", "Fresh Garlic", "Fresh Basil",
  "Feta Cheese", "Cheddar Cheese", "Double Cheese"
];

export const cheesePizzaPrices = [
  { size: "Small", price: 7.99 },
  { size: "Medium", price: 9.99 },
  { size: "Large", price: 10.99 },
  { size: "X-Large", price: 12.99 },
];

export const toppingPrices = [
  { size: "Small", price: 1.79 },
  { size: "Medium", price: 1.99 },
  { size: "Large", price: 2.29 },
  { size: "X-Large", price: 2.99 },
];

export const menuData: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizza",
    description: "Select Your Size: Small 10\" | Medium 12\" | Large 14\" | X-Large 18\"",
    items: [
      { name: "Pizza House Special", description: "Pepperoni, Sausage, Onions, Mushrooms, Green Pepper and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 12.99 }, { size: "L", price: 15.99 }, { size: "XL", price: 21.99 }] },
      { name: "Super Pizza House Special", description: "Piled High with Pepperoni, Sausage, Beef, Canadian Bacon, Onions, Mushrooms, Green Pepper, Black Olives and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "American Favorite", description: "Pepperoni, Sausage and Mushrooms", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 12.99 }, { size: "L", price: 15.99 }, { size: "XL", price: 21.99 }] },
      { name: "Veggie Lovers", description: "Green Pepper, Onions, Mushrooms, Black Olives, Fresh Tomatoes and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 12.99 }, { size: "L", price: 15.99 }, { size: "XL", price: 21.99 }] },
      { name: "Super Veggie", description: "Green Pepper, Onions, Mushrooms, Black Olives, Green Olives, Tomatoes and Extra Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Hawaiian Pizza", description: "Canadian Bacon, Pineapple, Double Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Hot Hawaiian", description: "Canadian Bacon, Pineapple, Roasted Red Bell Peppers, Jalapeños, Double Cheese and Hot Sauce", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Buffalo Chicken Pizza", description: "Chicken Breast, Buffalo Hot Sauce, Onions, Mozzarella, Provolone and Cheddar (No Pizza Sauce)", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Meat Lovers", description: "Piled High with Pepperoni, Sausage, Beef, Canadian Bacon and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Greek Pizza", description: "Gyro Meat, Onions, Black Olives, Fresh Tomatoes, Feta Cheese and Mozzarella Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Spinach Pizza", description: "Fresh Baby Spinach, Black Olives, Red Onions, Feta and Mozzarella", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "BBQ Chicken Pizza", description: "Chicken Breast, BBQ Sauce and Double Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Chicken Alfredo Pizza", description: "Alfredo Sauce, Chicken Breast, Mushrooms and Extra Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Seafood Pizza", description: "Shrimp, Onions, Black Olives and Green Pepper", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Philly Steak Pizza", description: "Beef or Chicken Steak Meat, Mushrooms, Green Pepper, Onions and Mozzarella Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Five Cheese Pizza", description: "House Special Blend of Mozzarella, Provolone, Cheddar, Feta and Parmesan Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Bacon Cheeseburger Pizza", description: "Beef, Bacon, Cheddar and Mozzarella", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Taco Pizza", description: "Ground Beef, Mozzarella, Onions topped with Chopped Tomatoes, Lettuce and Cheddar Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Pizza Bianca", description: "Olive Oil, Mozzarella Cheese, Garlic (No Pizza Sauce)", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Margherita Pizza", description: "Plum Tomatoes, Fresh Mozzarella & Basil", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
    ],
  },
  {
    id: "calzone",
    name: "Calzones",
    description: "Our Famous Calzone, Rolled Burrito-Style, Baked to Toasty Brown. Served with Marinara Sauce",
    items: [
      { name: "Regular Combo (Most Popular)", description: "Sausage, Canadian Bacon, Onions, Mushrooms and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 22.99 }] },
      { name: "All Meat", description: "Pepperoni, Sausage, Beef, Italian Sausage, Canadian Bacon and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 22.99 }] },
      { name: "Veggie Calzone", description: "Green Peppers, Onions, Mushrooms, Black Olives and Tomatoes", prices: [{ size: "S", price: 9.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 22.99 }] },
      { name: "Greek Calzone", description: "Gyro Meat, Onions, Black Olives, Fresh Tomatoes, Feta Cheese, Mozzarella Cheese", prices: [{ size: "S", price: 9.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 22.99 }] },
      { name: "Philly Steak Calzone", description: "Philly Steak, Mushrooms, Onions, Green Peppers and Cheese", prices: [{ size: "S", price: 9.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 22.99 }] },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches, Subs & Gyros",
    description: "Served with Fries",
    items: [
      { name: "Gyro", description: "Gyro Meat, Cucumber Sauce, Onions, Lettuce, Tomatoes on Pita Bread", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Gyro", description: "Chicken Breast Strip, Cucumber Sauce, Onions, Lettuce, Tomatoes on Pita Bread", prices: [{ size: "", price: 8.99 }] },
      { name: "Jumbo Double Cheeseburger", description: "Double Meat, Double Cheese, Mayo, Onion, Lettuce, Tomatoes and Mustard", prices: [{ size: "", price: 8.99 }] },
      { name: "Fried Chicken Sandwich", description: "Crispy fried chicken breast with lettuce, tomato, and mayo", prices: [{ size: "", price: 8.99 }] },
      { name: "Philly Steak Sandwich", description: "Philly Meat, Onions, Mushrooms, Green Pepper, Provolone-American Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Philly Steak Sandwich", description: "Chicken Philly, Onions, Mushrooms, Green Pepper, and Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Pepperoni Sub", description: "Pepperoni, Marinara, Provolone-Cheddar-Mozzarella", prices: [{ size: "", price: 8.99 }] },
      { name: "Veggie Sub", description: "Mushrooms, Green Pepper, Onions, Black Olives, Tomatoes, and Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Italian Sub", description: "Pepperoni, Ham, Turkey, Cheese, Tomatoes, Red Onions, Lettuce, Italian Dressing", prices: [{ size: "", price: 8.99 }] },
      { name: "Meatball Sub", description: "Meatballs, Marinara, Mozzarella Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Parmesan Sandwich", description: "Breaded chicken breast with marinara and melted mozzarella", prices: [{ size: "", price: 8.99 }] },
      { name: "Ham and Cheese", description: "Ham, Mozzarella, Mayo, Lettuce and Tomatoes", prices: [{ size: "", price: 8.99 }] },
      { name: "Turkey Delight Sub", description: "Turkey, Mozzarella, Mayo, Lettuce and Tomatoes", prices: [{ size: "", price: 8.99 }] },
      { name: "Buffalo Chicken Sandwich", description: "Chicken Breast, Onions, Mozzarella and Cheddar Cheese", prices: [{ size: "", price: 8.99 }] },
    ],
  },
  {
    id: "pasta",
    name: "Pastas",
    description: "Served with Garlic Toast",
    items: [
      { name: "Spaghetti", description: "with Meat Sauce or Meat Balls", prices: [{ size: "", price: 9.99 }] },
      { name: "Baked Rigatoni", description: "Tender Rigatoni in Our House Special Sauce with Pepperoni, Sausage, Mushrooms, Onions and Green Peppers, topped with Mozzarella", prices: [{ size: "", price: 9.99 }] },
      { name: "Manicotti", description: "Pasta Sleeves stuffed with Italian Cheese and Spices. Covered with House Special Sauce and Mozzarella", prices: [{ size: "", price: 9.99 }] },
      { name: "Lasagna", description: "Stuffed with Ricotta, Mozzarella, Cottage Cheese and Ground Beef, topped with House Special Sauce and Mozzarella", prices: [{ size: "", price: 9.99 }] },
      { name: "Fettuccine Alfredo", description: "Fettuccine Pasta topped with Creamy Alfredo Sauce topped with Mozzarella (Add Chicken or Shrimp +$2.00)", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Carbonara", description: "Chicken, Bacon, Onions & Mushrooms mixed with Penne Pasta, Alfredo Sauce and Mozzarella Cheese", prices: [{ size: "", price: 9.99 }] },
      { name: "Chicken Alfredo", description: "Grilled chicken breast over fettuccine with creamy Alfredo sauce", prices: [{ size: "", price: 9.99 }] },
      { name: "Italian Sausage Marinara", description: "Penne Pasta Baked in House Special Sauce, with Italian Sausage and topped with Mozzarella Cheese", prices: [{ size: "", price: 9.99 }] },
      { name: "Pasta Primavera", description: "Garden Fresh Spinach, Tomatoes, Mushrooms and Onions, mixed with Penne Pasta Alfredo Sauce topped with Mozzarella", prices: [{ size: "", price: 8.99 }] },
    ],
  },
  {
    id: "salads",
    name: "Salads & Sides",
    items: [
      { name: "Chef or Chicken or Greek Salad", prices: [{ size: "", price: 8.99 }] },
      { name: "Caesar Salad", prices: [{ size: "", price: 8.99 }] },
      { name: "Garden Salad", prices: [{ size: "", price: 4.99 }] },
      { name: "Boneless Wings", prices: [{ size: "", price: 8.99 }] },
      { name: "Popcorn Shrimp", prices: [{ size: "", price: 8.99 }] },
      { name: "French Fries", prices: [{ size: "", price: 3.99 }] },
      { name: "Mozzarella Stix (9 pc)", prices: [{ size: "", price: 8.99 }] },
      { name: "Wings (10 pc)", prices: [{ size: "", price: 9.99 }] },
      { name: "Chicken Strip", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Nuggets", prices: [{ size: "", price: 6.99 }] },
      { name: "Egg Roll", prices: [{ size: "", price: 1.49 }] },
      { name: "Fried Okra", prices: [{ size: "", price: 4.99 }] },
      { name: "Tater Tots", prices: [{ size: "", price: 3.99 }] },
      { name: "Fried Pickle", prices: [{ size: "", price: 6.99 }] },
      { name: "Fried Mushrooms", prices: [{ size: "", price: 6.99 }] },
      { name: "Appetizer Platter", prices: [{ size: "", price: 10.99 }] },
      { name: "Cheddar Peppers (4 pc)", prices: [{ size: "", price: 4.99 }] },
      { name: "Onion Rings", prices: [{ size: "", price: 4.99 }] },
      { name: "Bread Sticks", prices: [{ size: "", price: 4.99 }] },
      { name: "Cheese Bread Sticks", prices: [{ size: "", price: 6.99 }] },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Can Pop", prices: [{ size: "", price: 1.09 }] },
      { name: "16 oz Bottle Soda", prices: [{ size: "", price: 1.49 }] },
      { name: "2 Liter Drinks", prices: [{ size: "", price: 2.49 }] },
      { name: "Bottle Water", prices: [{ size: "", price: 0.99 }] },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Cinnamon Sticks", prices: [{ size: "", price: 6.99 }] },
      { name: "NY Cheesecake Plain", prices: [{ size: "", price: 4.99 }] },
      { name: "NY Cheesecake Strawberry", prices: [{ size: "", price: 4.99 }] },
      { name: "Chocolate Cake", prices: [{ size: "", price: 4.99 }] },
      { name: "Baklava", prices: [{ size: "", price: 4.99 }] },
    ],
  },
];

export const iceCreamItems = [
  { name: "Aguas Frescas", description: "Refreshing fruit-flavored water drinks" },
  { name: "Churros Preparados", description: "Crispy churros with your choice of toppings" },
  { name: "Fresas Dubai", description: "Strawberries topped with chocolate and pistachios" },
  { name: "Raspados", description: "Shaved ice with fruit and flavored syrups" },
  { name: "Chocobananas", description: "Frozen chocolate-covered bananas" },
  { name: "Cazuelitas", description: "Mini fruit bowls with cream and toppings" },
  { name: "Fresas Con Crema", description: "Fresh strawberries with sweet cream" },
  { name: "Banana Split", description: "Classic banana split with ice cream and toppings" },
  { name: "Hot Dogs", description: "Hot-dog style snack with toppings" },
  { name: "Chamango", description: "Mango with chamoy and chili" },
  { name: "Maruchan Loca", description: "Ramen noodles with chamoy and toppings" },
  { name: "Chilindrinas", description: "Crispy chips with chamoy and toppings" },
  { name: "Torta Del Chavo", description: "Classic Mexican treat" },
  { name: "Bionico", description: "Fresh fruit bowl with cream and granola" },
  { name: "Elote En Vaso", description: "Corn in a cup with mayo, cheese, and chili" },
  { name: "Malteadas Chicas", description: "Small milkshakes in various flavors" },
  { name: "Mango En Vaso", description: "Fresh mango in a cup with chili and lime" },
  { name: "Monster Preparado", description: "Monster energy drink with chamoy and candy" },
  { name: "Tostitos Preparados", description: "Tostitos chips with toppings" },
  { name: "Elotes Chorreados", description: "Mexican street corn with drizzled toppings" },
  { name: "Dorilocos", description: "Doritos loaded with various toppings" },
];

export const tacoMenuItems: MenuItem[] = [
  { name: "TACOS", description: "Authentic Mexican tacos with your choice of meat", prices: [{ size: "", price: 2.50 }] },
  { name: "TORTAS", description: "Traditional Mexican sandwiches", prices: [{ size: "", price: 13.00 }] },
  { name: "BURRITOS", description: "Large flour tortilla filled with your favorites", prices: [{ size: "", price: 10.00 }] },
  { name: "GORDITAS", description: "Thick corn masa pockets with savory fillings", prices: [{ size: "", price: 4.00 }] },
  { name: "FLAUTAS", description: "Crispy rolled tacos served with cream and salsa", prices: [{ size: "", price: 11.00 }] },
  { name: "HAMBURGUESA", description: "Mexican-style hamburger", prices: [{ size: "", price: 13.00 }] },
  { name: "CHILAQUILES", description: "Tortilla chips in salsa", subtitle: "VERDES y ROJOS (Green and Red)", prices: [{ size: "", price: 13.00 }] },
];
