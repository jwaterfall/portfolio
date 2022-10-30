import { NextPage } from "next";
import Image from "next/image";

import Animate from "../../components/Animate";
import Section from "../../components/Section";

import profile from "../../public/profile.png";

const AboutSection: NextPage = () => (
  <Section id="about" heading="about me" subHeading="I'm a software engineer working at Percayso Inform">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-16 items-center mt-8 w-full">
      <Animate variant="zoom" className="col-span-3">
        <p className="text-textSecondary">
          Hi, my name is Jack waterfall and I love everything programming related! My interest in programming started back when I was 12 years old and
          I decided to try creating content for various video games that I played at the time using the LUA programming language.
          <br />
          <br />
          I studied computer science at college where I spent 2 years learning Python and the theory of computer science. After finishing college I
          decided that university wasn't the correct path for me, instead I spent 3 years running a small 3D printing business, during that time I
          also taught myself full stack JavaScript development.
          <br />
          <br />
          Now I want to put my skills to good use to create scalable, reliable and accessible software. I joined the School Of Code bootcamp to
          kickstart my career in the software development industry.
        </p>
      </Animate>
      <Animate variant="zoom" className="hidden lg:block col-span-2">
        <div className="rotate-3 aspect-4/5 max-h-96 mx-auto before:absolute before:w-full before:h-full before:rounded-3xl before:border-2 before:border-secondary before:-translate-x-4 before:translate-y-4 before:-z-10">
          <Image src={profile} alt="profile picture" className="w-full h-full rounded-3xl object-cover animate-profile" />
        </div>
      </Animate>
    </div>
  </Section>
);

export default AboutSection;
