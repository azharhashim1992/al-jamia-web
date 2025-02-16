"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import Students_Council_main from "./Students_Council_main";

function Students_Council() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);
  {
    return (
      <div>
        <PageHeader />
        <div className="AboutUspage-img">
          <Image
            src="/image 7.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>
        <Students_Council_main />
        <Footer />
      </div>
    );
  }
}

export default Students_Council;
