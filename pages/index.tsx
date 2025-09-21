import type { NextPage } from "next";
import Head from "next/head";
import { BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/listing/PropertyCard";
import { useState } from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Pet Friendly",
  "Pool",
  "Mountain View",
];

const Home: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) =>
        p.category.join(" ").toLowerCase().includes(activeFilter.toLowerCase())
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      <Head>
        <title>ALX Listings</title>
      </Head>

      {/* Hero */}
      <section
        className="relative h-64 md:h-96 flex items-center"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-2 md:text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <Pill
              key={f}
              label={f}
              active={activeFilter === f}
              onClick={() => setActiveFilter(activeFilter === f ? null : f)}
            />
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.name} property={p} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
