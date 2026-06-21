import KingOfSpicesLanding from "@/components/KingOfSpicesLanding";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "King Of Spices - Best Restaurant & Cafe in Khanna",
  telephone: "+918759900007",
  servesCuisine: [
    "North Indian",
    "Mughlai",
    "Chinese",
    "Pasta",
    "Fast Food",
    "Beverages",
  ],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Backside Vishal Mega Mart, near Main Bus Stand, GTB Market",
    addressLocality: "Khanna",
    addressRegion: "Punjab",
    postalCode: "141401",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "23:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <KingOfSpicesLanding />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema),
        }}
      />
    </>
  );
}
