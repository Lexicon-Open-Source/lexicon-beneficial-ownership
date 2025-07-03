import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function AboutPage(): React.ReactElement {
  return (
    <main className="flex flex-col pt-20">
      {/* Hero Section */}
      <div className="py-16">
        <Image
          src="/images/img_background_small.png"
          alt="Background Hero"
          width={1926}
          height={1020}
          className="absolute top-0 -z-10 mt-2 hidden sm:block"
        />
        <div className="flex flex-col items-center bg-white z-10 px-4 md:px-36">
          <h1 className="text-[40px] font-semibold text-center">
            About{" "}
            <span className="text-colorPrimary">
              Lexicon Beneficial Ownership
            </span>
          </h1>
          <h3 className="text-textGrayBold text-xl mt-2 font-normal text-center">
            Revolutionizing transparency and efficiency in corporate governance
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col py-12 px-4 sm:px-[120px] bg-white gap-8">
        {/* Mission Card */}
        <div className="border border-colorBorder rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-colorPrimary">
            Our Mission
          </h2>
          <p className="text-colorSecondaryText text-lg leading-relaxed">
            To provide businesses with the tools and knowledge they need to
            navigate beneficial ownership transparently and efficiently,
            bringing clarity to the complex world of corporate governance.
          </p>
        </div>

        {/* About Description Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-colorBorder rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold mb-4 text-colorPrimaryText">
              Who We Are
            </h3>
            <p className="text-colorSecondaryText leading-relaxed mb-4">
              At{" "}
              <strong className="text-colorPrimary">
                Lexicon Beneficial Ownership
              </strong>
              , we are committed to revolutionizing the way businesses and
              organizations manage and understand ownership structures.
            </p>
            <p className="text-colorSecondaryText leading-relaxed">
              Founded in 2023, we tackle the growing need for clear, accessible
              information in corporate governance and compliance, helping
              businesses navigate regulatory requirements with ease.
            </p>
          </div>

          <div className="border border-colorBorder rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold mb-4 text-colorPrimaryText">
              Our Expertise
            </h3>
            <p className="text-colorSecondaryText leading-relaxed">
              Our expert team, with deep experience in legal, regulatory, and
              financial services, is driven by a passion for simplifying
              complexity. By leveraging cutting-edge technology, we provide a
              seamless platform that offers clarity and actionable insights into
              ownership structures.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="border border-colorBorder rounded-xl p-8 bg-colorSecondaryBackground">
          <h2 className="text-2xl font-bold mb-4 text-colorPrimary">
            Our Vision
          </h2>
          <p className="text-colorSecondaryText text-lg leading-relaxed">
            To be the leading platform for beneficial ownership management,
            setting the standard for transparency and compliance in corporate
            governance worldwide.
          </p>
        </div>

        {/* Values Section */}
        <div className="border border-colorBorder rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-colorPrimary">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-colorPrimary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-colorPrimaryText mb-2">
                  Transparency
                </h4>
                <p className="text-colorSecondaryText">
                  We believe in clear, accessible information that empowers
                  businesses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-colorPrimary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-colorPrimaryText mb-2">
                  Innovation
                </h4>
                <p className="text-colorSecondaryText">
                  We constantly push the boundaries to offer cutting-edge
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-colorPrimary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-colorPrimaryText mb-2">
                  Integrity
                </h4>
                <p className="text-colorSecondaryText">
                  We are committed to ethical practices and building trust with
                  our clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-colorPrimary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-colorPrimaryText mb-2">
                  Customer-Centric
                </h4>
                <p className="text-colorSecondaryText">
                  Our clients are at the heart of everything we do, and we
                  strive to meet their unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="border border-colorBorder rounded-xl p-8 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4 text-colorPrimary">
            Learn More About Us
          </h2>
          <p className="text-colorSecondaryText mb-6 leading-relaxed">
            Discover how we built Lexicon Beneficial Ownership and its impact on
            anti-corruption efforts.
          </p>
          <Button
            as="a"
            href="https://accountabilitylab.org/anti-corruption-technologists-in-indonesia-use-tool-to-flag-fraudulent-entities/"
            target="_blank"
            rel="noreferrer"
            className="bg-colorPrimary text-white font-semibold hover:bg-opacity-90 transition-all duration-200"
            radius="full"
          >
            Read Our Story
          </Button>
        </div>
      </div>
    </main>
  );
}
