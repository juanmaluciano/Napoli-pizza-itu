export interface PizzaItem {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  tags?: string[];
  isPopular?: boolean;
}

export interface WineItem {
  id: string;
  name: string;
  description: string;
  priceGlass?: number;
  priceBottle: number;
  year?: string;
}

export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
