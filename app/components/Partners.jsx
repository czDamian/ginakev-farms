import Image from "next/image";

const partnerData = [
  {
    id: 1,
    name: "Gitcoin",
    logo: "/gitcoin.jpg",
    alt: "Gitcoin logo",
  },
  {
    id: 2,
    name: "Gainforest",
    logo: "/gainforest.jpg",
    alt: "Gainforest logo",
  },
  {
    id: 3,
    name: "Hypercerts",
    logo: "/hypercerts.jpg",
    alt: "Hypercerts logo",
  },
  {
    id: 4,
    name: "Flof",
    logo: "/flof.jpg",
    alt: "Flof logo",
  },
];

const PartnerLogo = ({ logo, alt }) => (
  <div className="flex justify-center items-center p-4">
    <Image
      src={logo}
      alt={alt}
      width={200}
      height={100}
      className="rounded-lg shadow-md h-auto max-h-28 w-auto object-contain transition-transform hover:scale-105"
    />
  </div>
);

const Partners = () => {
  return (
    <section id="partners" className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerData.map((partner) => (
            <PartnerLogo
              key={partner.id}
              logo={partner.logo}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
