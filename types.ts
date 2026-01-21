
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'Phones' | 'Laptops' | 'Audio' | 'Wearables' | 'Parts';
  tags?: string[];
  specs?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedMemory?: string;
  selectedStorage?: string;
}

export type View = 'HOME' | 'CATALOG' | 'PRODUCT_DETAIL' | 'CART' | 'CHECKOUT' | 'ACCOUNT' | 'DASHBOARD';
