"use client";
import axios from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { LinkedinIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

// Define the interface for a production company
interface ProductionCompany {
  _id: string;
  name: string;
  founderName: string;
  about: string;
  email: string;
  contactNumber: string;
  logo: string;
  membership: string;
  isMembership: boolean;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define the function to fetch production companies
const getProductionCompanies = async () => {
  const response = await axios.get("/auth/production/user");
  return response.data.productionCompany;
};

// Define the main component to list production companies
const ListProduction: React.FC = () => {
  const {
    data: productionCompanies,
    error,
    isLoading,
  } = useQuery<ProductionCompany[], Error>(
    "productionCompanies",
    getProductionCompanies
  );

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Production Companies</h1>
      <div className="w-full">
        <Carousel className="w-full max-w-[94vw]">
          <CarouselContent className="z-10  gap-6">
            {productionCompanies &&
              productionCompanies?.map((company) => (
                <Link
                  href={"/production/" + company._id}
                  key={company._id}
                  className="bg-[#0f101e] border-[#ffffff1f] px-16 py-5 border rounded-3xl"
                >
                  <div className="flex items-center gap-8">
                    <div className="founder-card-img">
                      <Image
                        width={220}
                        height={223}
                        src={company.logo}
                        className="hover:scale-105"
                        alt={`${company.name} Logo`}
                      />
                    </div>
                    <div className="">
                      <h2 className="text-3xl pl-2 font-bold mb-2">
                        {company.name}
                      </h2>
                      <p className="text-[#92939e] pl-2 mb-2">Founder & CEO</p>
                      <SocialButtons />
                    </div>
                  </div>
                </Link>
              ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 text-black" />
          <CarouselNext className="mr-12 text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default ListProduction;

// Define a type for the social media link data
interface SocialMediaLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

// Array of social media links
export const socialLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <LinkedinIcon size={16} />,
  },
  {
    name: "Custom Icon",
    url: "#", // Placeholder URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/",

    icon: <YoutubeIcon size={16} />,
  },
];

export const SocialButtons: React.FC = () => {
  return (
    <div className="social-btn flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="border bg-white text-blue-500 p-2 rounded-full"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
