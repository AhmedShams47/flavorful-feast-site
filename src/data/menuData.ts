export interface MenuItem {
  name: string;
  description?: string;
  prices: { size: string; price: number }[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizza",
    description: "Select Your Size: Small 10\" | Medium 12\" | Large 14\" | X-Large 18\"",
    items: [
      { name: "Cheese Pizza", prices: [{ size: "S", price: 7.99 }, { size: "M", price: 9.99 }, { size: "L", price: 10.99 }, { size: "XL", price: 17.99 }] },
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
      { name: "Taco Pizza Ground Beef", description: "Ground Beef, Mozzarella, Onions topped with Chopped Tomatoes, Lettuce and Cheddar Cheese", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Pizza Bianca", description: "Olive Oil, Mozzarella Cheese, Garlic (No Pizza Sauce)", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
      { name: "Margherita Pizza", description: "Plum Tomatoes, Fresh Mozzarella & Basil", prices: [{ size: "S", price: 9.99 }, { size: "M", price: 14.99 }, { size: "L", price: 16.99 }, { size: "XL", price: 23.99 }] },
    ],
  },
  {
    id: "calzone",
    name: "Calzones",
    description: "Our Famous Calzone, Rolled Burrito Baked to Toasty Brown. Served with Marinara Sauce",
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
      { name: "Jumbo Burger", description: "Double Meat, Double Cheese, Mayo, Onion, Lettuce, Tomatoes and Kaymust", prices: [{ size: "", price: 8.99 }] },
      { name: "Philly Steak Sandwich", description: "Philly Meat, Onions, Mushrooms, Green Pepper, Provolone-American Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Philly Steak Sandwich", description: "Chicken Philly, Onions, Mushrooms, Green Pepper, and Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Pepperoni Sub", description: "Pepperoni, Marinara, Provolone-Cheddar-Mozzarella", prices: [{ size: "", price: 8.99 }] },
      { name: "Veggie Sub", description: "Mushrooms, Green Pepper, Onions, Black Olives, Tomatoes, and Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Italian Sub", description: "Pepperoni, Ham, Turkey, Cheese, Tomatoes, Red Onions, Lettuce, Italian Dressing", prices: [{ size: "", price: 8.99 }] },
      { name: "Meatball Sub", description: "Meatballs, Marinara, Mozzarella Cheese", prices: [{ size: "", price: 8.99 }] },
      { name: "Ham & Cheese Sub", description: "Ham, Mozzarella, Mayo, Lettuce and Tomatoes", prices: [{ size: "", price: 8.99 }] },
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
      { name: "Fettuccine Alfredo", description: "Fettuccine Pasta topped with Creamy Alfredo Sauce topped with Mozzarella (Add Chicken or Shrimp for $2.00 Extra)", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Carbonara", description: "Chicken, Bacon, Onions & Mushrooms mixed with Penne Pasta, Alfredo Sauce and Mozzarella Cheese", prices: [{ size: "", price: 9.99 }] },
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
      { name: "Garden Salad", prices: [{ size: "", price: 3.99 }] },
      { name: "Boneless Wings (6 PC)", prices: [{ size: "", price: 9.99 }] },
      { name: "Wings (10 PC)", prices: [{ size: "", price: 15.99 }] },
      { name: "Chicken Strip", prices: [{ size: "", price: 8.99 }] },
      { name: "Chicken Nuggets", prices: [{ size: "", price: 6.99 }] },
      { name: "Popcorn Shrimp", prices: [{ size: "", price: 6.99 }] },
      { name: "French Fries", prices: [{ size: "", price: 3.99 }] },
      { name: "Cheese Fries", prices: [{ size: "", price: 6.99 }] },
      { name: "Mozzarella Stix (9 PC)", prices: [{ size: "", price: 7.99 }] },
      { name: "Onion Rings", prices: [{ size: "", price: 4.99 }] },
      { name: "Tater Tots", prices: [{ size: "", price: 4.99 }] },
      { name: "Bread Sticks", prices: [{ size: "", price: 6.99 }] },
      { name: "Cheese Bread Sticks", prices: [{ size: "", price: 8.99 }] },
      { name: "Appetizer Platter", prices: [{ size: "", price: 10.99 }] },
      { name: "Cheddar Peppers (4 PC)", prices: [{ size: "", price: 4.99 }] },
      { name: "Fried Okra", prices: [{ size: "", price: 4.99 }] },
      { name: "Fried Pickle", prices: [{ size: "", price: 6.99 }] },
      { name: "Fried Mushrooms", prices: [{ size: "", price: 6.99 }] },
      { name: "Egg Roll", prices: [{ size: "", price: 2.49 }] },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Can Pop", prices: [{ size: "", price: 1.49 }] },
      { name: "16 oz Bottle Soda", prices: [{ size: "", price: 2.49 }] },
      { name: "2 Liter Drinks", prices: [{ size: "", price: 4.99 }] },
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
      { name: "Baklava (2 PC)", prices: [{ size: "", price: 4.99 }] },
    ],
  },
];

export const toppings = [
  "Pepperoni", "Beef", "Sausage", "Canadian Bacon", "Anchovies", "Ham", "Meatballs",
  "Gyro Meat", "Shrimp", "Philly Steak", "Chicken", "Onions", "Red Onions", "Mushrooms",
  "Bell Peppers", "Black Olives", "Green Olives", "Jalapeños", "Pineapple", "Tomatoes",
  "Banana Peppers", "Spinach", "Fresh Garlic", "Basil", "Feta Cheese", "Cheddar Cheese", "Double Cheese"
];
