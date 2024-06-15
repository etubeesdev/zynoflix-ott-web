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
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <div className="">
        <Carousel className={cn("w-full overflow-hidden !z-10")}>
          <CarouselContent className="z-10 gap-6">
            {productionCompanies &&
              productionCompanies?.map((company) => (
                <div key={company._id} className="">
                  <Image
                    width={128}
                    height={128}
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="border-2 rounded-full object-cover mb-4 mx-auto"
                  />

                  <h2 className="text-2xl pl-2 font-bold mb-2">
                    {company.name}
                  </h2>
                  <p className="text-gray-700 pl-2 mb-2">
                    Founder: {company.founderName}
                  </p>
                </div>
              ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default ListProduction;
