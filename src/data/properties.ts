export interface Property {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}
import apartmentImg from "../assets/apartment.jpg";
import villaImg from "../assets/villa.jpg";

export const properties: Property[] = [
  {
    id: 1,
    name: "Luxury Villa in Alwar",
    image: villaImg,
    price: "Rs 1 cr",
    description: "A stunning villa with ocean views and modern amenities.",
  },
  {
    id: 2,
    name: "Modern Apartment in Alwar",
    image: apartmentImg,
    price: "Rs 2 cr",
    description: "A stylish apartment located in the heart of Alwar.",
  },
];
