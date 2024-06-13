import React from "react";

const page = () => {
  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="w-full mx-auto">
        {/* User Cover IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="User Cover"
          className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"
        />
        {/* User Profile Image */}
        <div className="w-full flex justify-start pl-12">
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Profile"
            className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"
          />
        </div>
        <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
          {/* FullName */}
          <h1 className="text-center text-white text-4xl font-serif">
            Samuel Abera
          </h1>
          {/* About */}
          <p className="w-full text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            debitis labore consectetur voluptatibus mollitia dolorem veniam
            omnis ut quibusdam minima sapiente repellendus asperiores explicabo,
            eligendi odit, dolore similique fugiat dolor, doloremque eveniet.
            Odit, consequatur. Ratione voluptate exercitationem hic eligendi
            vitae animi nam in, est earum culpa illum aliquam. Atque aperiam et
            voluptatum voluptate distinctio, nostrum hic voluptatibus nisi.
            Eligendi voluptatibus numquam maxime voluptatem labore similique qui
            illo est magnam adipisci autem quisquam, quia incidunt excepturi,
            possimus odit praesentium?
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
