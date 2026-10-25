"use client";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState, type ReactNode } from "react";
import { Customers, type SocialLink } from "@/lib/types";
import { Fetcher } from "@/lib/fetcher";
import { DATA_SPACE_CUSTOMER } from "@/lib/constants";
import { ICONS } from "@/lib/icons";
import { tr } from "framer-motion/client";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Customer() {
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
              className="relative bg-linear-to-br from-[#23272f]/90 to-[#181c23]/80 border border-cyan-400/20 shadow-xl shadow-cyan-400/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-cyan-400/30 hover:scale-105 backdrop-blur-lg group"
            >
              <CardContent className="p-7">
                <div className="flex flex-col justify-center items-center mb-5">
                  <div className="flex items-center justify-center">
                    <img
                      src={customer.logo}
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
                  <div className="border-2 p-1 items-center justify-center rounded-2xl mt-3 flex mb-7 gap-4">
                    {customer.socials &&
                      customer.socials.map((social) => (
                        <SocialLink
                          key={social.link}
                          icon={social.icon}
                          link={social.link}
                        />
                      ))}
                  </div>
                  <p className="text-gray-300 text-base">{customer.summary}</p>
                </div>
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

function SocialLink(props: SocialLink) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <a href={props.link}>{ICONS[props.icon]?.()}</a>
        </TooltipTrigger>
        <TooltipContent side={"top"}>{props.link}</TooltipContent>
      </Tooltip>
    </>
  );
}
