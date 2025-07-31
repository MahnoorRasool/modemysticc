

/**
 * Defines the structure for a navigation link.
 */
export interface NavLink {
  name: string; // The text to display for the link.
  path: string; // The URL path the link points to.
}

/**
 * Defines the structure for a product.
 */
export interface Product {
  id: number;
  name: string;
  price: string; // Represents the current (potentially discounted) price
  originalPrice?: string; // The original price, to be shown if the item is on sale
  imageUrl: string;
  category: string;
  subCategory?: string; // e.g., 'Hoodies', 'Pants', 'Shirts'
  description: string;
  onSale?: boolean;
}

/**
 * Defines the structure for a customer testimonial.
 */
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

/**
 * Defines the structure for an item in the shopping cart.
 * It extends the Product interface with a quantity property.
 */
export interface CartItem extends Product {
  quantity: number;
}

/**
 * Defines the structure for a product category display item.
 */
export interface CategoryInfo {
  name: string;
  imageUrl: string;
  path: string;
}