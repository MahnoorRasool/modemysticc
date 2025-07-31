
import type { NavLink, Product, Testimonial, CategoryInfo } from './types';

// Defines the navigation links used in the header and footer.
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'About Us', path: '/about' },
  { name: 'Sale', path: '/sale' },
];

// Data for the "Shop by Category" grid on the homepage.
export const CATEGORIES: CategoryInfo[] = [
  { name: 'Pants', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=700&fit=crop&q=80', path: '/shop?subCategory=Pants' },
  { name: 'Shirts', imageUrl: 'https://media.istockphoto.com/id/2208324739/photo/portrait-of-elegant-man-sitting-on-yellow-background.jpg?s=612x612&w=0&k=20&c=yW7ovcib3osGnDpqeYBINWVlyxOjKdbOX636jJOk734=', path: '/shop?subCategory=Shirts' },
  { name: 'Hoodies', imageUrl: 'https://images.unsplash.com/photo-1617922304319-48eba6011532?w=600&h=700&fit=crop&q=80', path: '/shop?subCategory=Hoodies' },
];


// A list of all products available in the store. This acts as a mock database.
export const PRODUCTS: Product[] = [
  { id: 23, name: 'Luxe Linen shirt', price: 'PKR 4,899', originalPrice: 'PKR 6,500', imageUrl: 'https://images.unsplash.com/photo-1696238247528-fd9ee1aae567?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Shirts', description: 'A sophisticated and airy linen blouse, perfect for warm days and elegant evenings. Its relaxed fit offers both comfort and style.', onSale: true },
  { id: 25, name: 'Sleek Wide-Leg pant', price: 'PKR 6,999', originalPrice: 'PKR 9,200', imageUrl: 'https://plus.unsplash.com/premium_photo-1693242804203-e8de4e41f7b9?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Pants', description: 'Elegant and modern, these wide-leg trousers offer a flattering silhouette for both office and evening wear. Crafted from a smooth, flowing fabric.', onSale: true },
  { id: 26, name: 'Cozy Fleece Hoodie', price: 'PKR 5,499', imageUrl: 'https://images.unsplash.com/photo-1617922304319-48eba6011532?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Hoodies', description: 'Stay warm and stylish in this ultra-soft fleece hoodie. Perfect for a casual day out or lounging at home.' },
  { id: 27, name: 'Urban Street Hoodie', price: 'PKR 5,799', imageUrl: 'https://images.unsplash.com/photo-1565608726736-3f280c8f7bb1?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Hoodies', description: 'A stylish and comfortable hoodie perfect for urban adventures. Features a relaxed fit and a bold graphic print.' },
  { id: 28, name: 'Chic High-Waist pant', price: 'PKR 6,499', imageUrl: 'https://images.unsplash.com/photo-1667829705955-279308e7fc12?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Pants', description: 'Elevate your wardrobe with these chic high-waist trousers. Tailored for a flattering fit, they offer both comfort and sophistication for any occasion.' },
  { id: 29, name: 'Essential Comfort Hoodie', price: 'PKR 5,999', imageUrl: 'https://plus.unsplash.com/premium_photo-1690341214258-18cb88438805?w=400&h=500&fit=crop&q=80', category: 'Women', subCategory: 'Hoodies', description: "A classic hoodie that combines minimalist style with maximum comfort. Made from a soft cotton blend, it's your perfect companion for cool evenings and relaxed weekends." },
  { id: 30, name: 'Playful Graphic Hoodie', price: 'PKR 4,999', imageUrl: 'https://images.unsplash.com/photo-1685328403755-de1d57e12e63?w=400&h=500&fit=crop&q=80', category: 'Men', subCategory: 'Hoodies', description: 'A fun and comfortable hoodie for boys, featuring a playful graphic print. Perfect for school days and weekend adventures.' },
  { id: 31, name: 'Explorer Graphic Tee', price: 'PKR 2,799', originalPrice: 'PKR 3,999', imageUrl: 'https://images.unsplash.com/photo-1691134724048-baee5e003213?w=400&h=500&fit=crop&q=80', category: 'Men', subCategory: 'Shirts', description: 'A comfortable and stylish graphic tee for young adventurers. Perfect for everyday wear, it features a unique print that sparks imagination.', onSale: true },
  { id: 32, name: 'Classic Chino Pants', price: 'PKR 5,299', imageUrl: 'https://images.unsplash.com/photo-1514311548104-ae305aac4688?w=400&h=500&fit=crop&q=80', category: 'Men', subCategory: 'Pants', description: 'Versatile and comfortable, these classic chino pants are a wardrobe staple. Perfect for both casual and semi-formal looks.' },
  { id: 33, name: 'Essential Pullover Hoodie', price: 'PKR 3,850', originalPrice: 'PKR 5,499', imageUrl: 'https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=400&h=500&fit=crop&q=80', category: 'Men', subCategory: 'Hoodies', description: 'A classic pullover hoodie that offers both warmth and style. Made from a soft cotton blend, it\'s perfect for everyday comfort and layering.', onSale: true }
];

// A list of customer testimonials for display on the homepage.
export const TESTIMONIALS: Testimonial[] = [
    { id: 1, quote: "The quality is outstanding. Threadly has become my go-to for unique pieces that always get compliments.", author: "Aisha Khan", location: "Lahore" },
    { id: 2, quote: "Finally, a brand in Pakistan that gets modern aesthetics right. The delivery was quick and the packaging was beautiful.", author: "Bilal Ahmed", location: "Karachi" },
    { id: 3, quote: "I'm in love with the jacket I bought. It's stylish, comfortable, and versatile. Highly recommended!", author: "Fatima Syed", location: "Islamabad" },
];