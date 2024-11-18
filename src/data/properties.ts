export interface Property {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Luxury Villa in Malibu",
    image: "/assets/villa.jpg",
    price: "$3,000,000",
    description: "A stunning villa with ocean views and modern amenities.",
  },
  {
    id: 2,
    name: "Modern Apartment in New York",
    image: "/assets/apartment.jpg",
    price: "$1,500,000",
    description: "A stylish apartment located in the heart of Manhattan.",
  },
];
