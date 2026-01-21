
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'Titanium design. A17 Pro chip. The most powerful iPhone yet.',
    price: 999,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV59IY0RazCwhYXcldunIdXbG8-D_4uqEFYaEFhhynk50FheDB__i9SrgWiSKjAkjsCmod7EkBhENnsIsbBPOvugBKXgIxx-SvBkPxvoK9QyS5iZ1e3FBtcNdwJug302clWUkCZ2qxlXzXLK3nr8hc5r5u1vmOYoeDbXJZoWRhZ_CaVUPevmRc8ixIE1HzZW4jZrv_VW_XxioIyhOasrriw5KL5wDE2SVYX1-A5pIxraqjoZfnYHb80BpguLwhtTaqg2kjnjlF9yi',
    category: 'Phones',
    tags: ['New Launch']
  },
  {
    id: '2',
    name: 'MacBook Pro 14" M3 Pro',
    description: 'The world\'s most advanced chips for personal computers.',
    price: 1999,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACoorgp-MkKLtN8vYohe4ObtLE7OKyeUFXVIwDlA8yTHmK5F2trz48x4wZW6VFjUHAkcBdBxLGHmGkYi891T8MsJeMTNLnVZUn8Ia1oWN2XABizbd7GYJvwvZYxtWHn6TJ-Ul30FN1TOt60XtOhgLFxy7Kh8lOQsbpNMdAcSl6FtGst5C60jgcGoZnHEYZC0ANy7u35YoRKvYm2a0WZTW1rBrh1_qw-Bi2GEJNzTh8GNVkodjGDBJV_e6A0t3c9H49oPaXJTvBeK-o',
    category: 'Laptops',
    tags: ['Popular']
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Wireless',
    description: 'Industry-leading noise cancellation with two processors.',
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 2100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAacVue87Cfajuq8qOiSOW_fhmp31zrC0YPcRLemM-2_w_X4VF7-XrrWqM6ERmL5TDYjt9KCLkQSjnCrAJ8TkPaee9eJ_RTfO68oTe8hcF_RUoYsXj7oXgHluMkIS1dYP4kaEFP-kOnax_AwIO1CdaHt4do1nj463q3toGANKUd5W9JQ1ETG4M40rpUCOp0JFoaMqyldzinmqgHHa2As04gxG7K1P-1H5sIB5wLqnUcCjFnxlaPR9I9N83hUvnlO8Jslu6D_pBnLzju',
    category: 'Audio',
    tags: ['-25%']
  },
  {
    id: '4',
    name: 'Apple Watch Series 9',
    description: 'Smater. Brighter. Mightier.',
    price: 399,
    originalPrice: 429,
    rating: 4.7,
    reviews: 2100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWzvAYfih1OEgYUyEgK7-F-YzlGjWxirJTWuS_UU9gbR1rb7yRR2uctw2UTcAGMF6gtBtxvMCcgNA2RdG0-ghvvu1i4PL6P1IsF1LyKUHaI8r7_nWXhKsov-v2b-qbykUFlE0Cy6aP3rKZH52dv26vE2Shwy2IcKWd6XEtSfL251VHZOrVU_F44kljNuSLFW_zwoJ3eXLt2OJEyS_wtTkizYdbmQSb2V8OrfQIZnRCSPnx8f_7LFIjFw3EIh6x6YF9s31HDfxbXPDM',
    category: 'Wearables'
  },
  {
    id: '5',
    name: 'NVIDIA GeForce RTX 4080',
    description: 'The ultimate platform for gamers and creators.',
    price: 1199,
    rating: 4.9,
    reviews: 340,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF_2AnLyhl4Uvt7S5-B3QWr7dnBFLBY3kba6C27NASlqid_cY0gCJ6gxnKhtTxKPZtChd4a6t9rnKrkk07Wi5XZOI8HXsaFDG2rfB0A3wCKeOvGseZFXiJsMqTL4erdkcdLCZGT9TakIdrUl3DgbSvb0vFYA9oAVM0z6FJxoaQiCmXT3sLrk_QDssdofNKvFYKtek5LBtAKM_8KmNoqNxNYt1mBGUNoo36M7GL61R6EFazxd54ZgCsd62jTmKd6JFFD-gISdIxW2ZA',
    category: 'Parts'
  }
];

export const CATEGORIES = [
  { name: 'Computing', icon: 'laptop_chromebook', color: 'blue' },
  { name: 'Gaming', icon: 'sports_esports', color: 'purple' },
  { name: 'Cameras', icon: 'photo_camera', color: 'orange' },
  { name: 'Parts', icon: 'memory', color: 'green' }
];
