import React from "react";

import ChartSection from "./section";

function Charts() {
  return (
    <>
      <ChartSection
        header="Skills"
        data={[
          { title: "ReactJs", value: 85 },
          { title: "NextJs", value: 90 },
          { title: "GatsbyJs", value: 80 },
          { title: "JavaScript", value: 70 },
          { title: "TypeScript", value: 60 },
          { title: "HTML/CSS", value: 85 },
          { title: "TailWindCSS", value: 40 },
          { title: "Sass", value: 65 },
          { title: "Git", value: 80 },
        ]}
      />

      <ChartSection
        header="Languages"
        data={[
          { title: "Portugues - Brazil", value: 100 },
          { title: "English", value: 70 },
        ]}
      />

      <ChartSection
        header="Tools"
        data={[
          { title: "VS Code", value: 100 },
          { title: "Windows 11", value: 80 },
          { title: "CMD", value: 70 },
          { title: "Figma", value: 50 },
          { title: "Github", value: 95 },
          { title: "Postman", value: 70 },
          { title: "StackOverFlow", value: 65 },
        ]}
      />
    </>
  );
}

export default Charts;
