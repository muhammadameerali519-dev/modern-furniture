export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string; // e.g. 'living-room', 'bedroom', 'dining-room', 'office', 'outdoor', 'custom'
  subcategory: string; // e.g. 'Sofa Sets', 'Luxury Beds', 'Dining Tables'
  priceEstimate: string; // Premium PKR range or quote request
  images: string[];
  material: string; // Sheesham (Indian Rosewood), Solid Oak, Walnut, Teak, Premium MDF, etc.
  dimensions: string;
  availableColors: string[];
  availableSizes: string[];
  finishOptions: string[];
  warranty: string;
  careInstructions: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[]; // split into readable paragraphs
  readTime: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  clientName: string;
  location: string; // e.g., 'DC Colony, Gujranwala Cantt'
  year: string;
  category: string;
  clientFeedback: string;
  details: { label: string; value: string }[];
}

export interface Inquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  productName: string;
  quantity: number;
  budget: string;
  message: string;
  date: string;
  status: 'pending' | 'contacted' | 'completed';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  location: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
