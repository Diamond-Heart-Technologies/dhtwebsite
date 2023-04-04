import Head from "next/head";
import Image from "next/image";
import Contact from "@/Components/contactUs";
// import { ContactM } from "@/Components/contactUs";
import FooterRectangle from "../Components/footer";
import { FooterMobile } from "../Components/footer";
import Hero from "../Components/hero";

// import { FooterRectangleLg } from "../Components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DHT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="ContactUs">
          {/* <Contact /> */}

          {/* <ContactM /> */}
        </section>
        <section className="mt-60">
          <Hero />
          <FooterRectangle />
          <FooterMobile />
          {/* <FooterRectangleLg /> */}
        </section>

        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </main>
    </>
  );
}

// export default index;
