import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import React from "react";

export function PeterPage() {
  return (
    <body className="">
      <header className="sticky bg-darkerash text-white top-0 z-10  ">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            >
              &#9776;
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded  transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded  before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded  after:transition-all after:duration-500 after:content-['']"></div>
            </button>
            <nav
              className="hidden space-x-8 text-xl md:block"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className="top-68 justify-content-center animate-open-menu absolute hidden w-full origin-top flex-col bg-black text-5xl"
        >
          <button className="text-8xl self-end px-6">&times;</button>
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Legal Info
            </a>
          </nav>
        </section>
      </header>
      <main className="mx-auto max-w-4xl">
        <section
          id="hero"
          className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl">
              We Boldly Go
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket
              </span>
              Has Gone Before...
            </h2>
            <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
              Were buiding rockets of the century. From mars to the moon. Were
              colonizing the galaxy
            </p>
            <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
              Think Acme Rockets.
            </p>
          </article>
          <img className="w-1/2" src="./img/rocketdab.png" alt="rocketdab" />
        </section>
        <hr className="mx-auto w-1/2 bg-black " />

        <section
          id="rockets"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Rockets
          </h2>
          <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img
                src="./img/rocketman.png"
                alt="Explorer"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 ">Explorer</h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Affordable Exploration
              </p>
            </li>
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900  py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img
                src="./img/rocketride.png"
                alt="Adventurer"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 ">
                Adventurer
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500  sm:block">
                $$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500  sm:hidden">
                Best Selling Rockets
              </p>
            </li>
            <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
              <img
                src="./img/rocketlaunch.png"
                alt="Infinity"
                className="mb-6 w-1/2"
              />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                $$$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <section
          id="testimonials"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Testimonials
          </h2>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                Acme Has always been there for me. Their explorer rocket arrived
                in a wooden crate as expected. Life long customer. A++ customer
                service
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                The Acme Adventurer Rocket has thwarted my Illudium Q-36 space
                modulator on several occasions
                <span className="italic">this makes me very very angry!</span>
                Nevertheless K-9 and I have awarded Acme the martian project of
                space exploration rockets based on Acme's quality and sturdy
                design
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Marvin The Martian &amp;K-9
            </figcaption>
          </figure>
          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                I knew I only needed &#8212;
                <span className="italic">I needed</span>&#8212;Acme's infinity
                rocket for my project in space.Acme delivered in one day.
                Nothing says
                <q className="italic">delever me to your leader</q>like Acme's
                infinity rocket
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      </main>
      <footer id="footer" className="bg-teal-700 text-xl ">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket Products Inc.</h2>
            55 Astro Way <br />
            Fairfield NewJersey 12345-5555 <br />
            email;
            <a href="mailto:inquiries@acmerockets.com">
              Inquiries@Acmerockets.com
            </a>
            <br />
            phone number; <a href="tel:+155555555555">(555)627262782</a>
          </address>
          <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contacts" className="hover:opacity-90">
              Contact us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2022</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </body>
  );
}

export default PeterPage;
