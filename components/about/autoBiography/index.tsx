import React from "react";

import Detail from "./detail";

import { styles } from "@/styles";

function AutoBiography() {
  return (
    <>
      <section className="px-2 flex items-center justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-secondary text-2xl font-semibold">Autobiography</h1>

          <p className="mt-4 md:px-3 text-text text-sm lg:text-base text-justify leading-relaxed opacity-80">
            Hi! My name is Alex, I am 21 years old (2023), I live in brazil, and enjoy study new technologies, currently I am attending graduate school in Computer Science while I work as a Front-end developer for The SEO Hustler company.
            I study web development since 2020, since then I took more than 80 courses and worked in more than 10 personal projects.
            Right now I plan to be a freelancer in my spare time.
          </p>
        </div>

        <div className="my-6 lg:my-0 h-1 w-full lg:h-[16rem] lg:w-1 bg-border rounded-lg" />

        <div className="w-full lg:w-[25%]">
          <h2 className="mb-2 text-secondary text-2xl font-semibold">Details</h2>

          <Detail title="Nickname" value="AlexRicc" />
          <Detail title="Location" value="Olímpia, SP, Brazil" />
          <Detail title="Name" value="Alex Ricardo Rodrigues Sant'Anna" />
        </div>
      </section>

      <div className={styles.divider} />
    </>
  );
}

export default AutoBiography;
