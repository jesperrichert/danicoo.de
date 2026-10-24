"use client";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import { Customers } from "@/lib/types";
import { Fetcher } from "@/lib/fetcher";
import { DATA_SPACE_CUSTOMER } from "@/lib/constants";

export default function Customer() {
  const [customers, setCustomers] = useState<Customers | null>();

  const fetch = async () => {
    setCustomers(await Fetcher.fetch<Customers>(DATA_SPACE_CUSTOMER));
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <section
      className="py-24 px-4 md:px-16 bg-linear-to-br from-[#181c23] to-[#23272f] min-h-[60vh] relative"
      id="customers"
    >
      <h2 className="text-center text-4xl md:text-5xl font-black mb-14 text-white tracking-tight drop-shadow-neon">
        <span className="border-b-4 border-cyan-400 pb-1">
          Trusted by Customers
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {customers ? (
          customers.map((customer) => (
            <Card
              key={customer.name}
              className="relative bg-gradient-to-br from-[#23272f]/90 to-[#181c23]/80 border border-cyan-400/20 shadow-xl shadow-cyan-400/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-cyan-400/30 hover:scale-105 backdrop-blur-lg group"
            >
              <CardContent className="p-7">
                <div className="flex items-center mb-5">
                  <img
                    src={
                      customer.logo ||
                      "https://zipline.service.xyzspace.dev/u/M1Gfwa.png"
                    }
                    alt={`${customer.name} logo`}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-400/70 shadow-cyan-400/20 shadow-lg"
                  />
                  <h3 className="text-xl font-bold">
                    <a
                      href={customer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline transition-colors"
                    >
                      {customer.name}
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-base">{customer.summary}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>No Accounts...</div>
        )}
      </div>
    </section>
  );
}
