import { FC } from "react";

import Animate from "../Animate";
import Button from "../Button";

const BannerSection: FC = () => (
  <section className="min-h-screen py-32 flex flex-col justify-center w-fit mx-auto text-center md:text-left">
    <Animate variant="fade-up">
      <h4 className="font-medium text-primary font-code">Hey, my name is</h4>
    </Animate>
    <Animate variant="fade-up" delay={200}>
      <h1 className="text-5xl lg:text-7xl font-semibold mt-4">Jack Waterfall.</h1>
    </Animate>
    <Animate variant="fade-up" delay={400}>
      <h1 className="text-5xl lg:text-7xl font-semibold">
        I'm a <span className="text-secondary">software engineer</span>.
      </h1>
    </Animate>
    <Animate variant="fade-up" delay={600}>
      <p className="text-textSecondary my-12 max-w-lg">
        I'm a Derby-based full stack software engineer with a passion for building scalable, reliable and accessible software. I am currently working
        at <span className="text-primary">Percayso Inform</span>.
      </p>
    </Animate>
    <Animate variant="fade-up" delay={800}>
      <div className="flex flex-col items-stretch md:flex-row gap-8">
        <a href="/#projects">
          <Button size="lg" className="w-full">
            Check out my work!
          </Button>
        </a>
        <a href="mailto:jack.a.waterfall@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="lg" className="w-full">
            Contact me
          </Button>
        </a>
      </div>
    </Animate>
  </section>
);

export default BannerSection;
