/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfcfa] paper-texture flex flex-col selection:bg-stone-200 selection:text-black">
      {/* Centered Top Brand & Main Navigation Header */}
      <Header />

      {/* Main Single Page Layout Container */}
      <main className="flex-grow">
        {/* Photorealistic Hero section */}
        <Hero />

        {/* Dynamic Digital Taste Menu */}
        <Menu />

        {/* Elegant Centered Booking Engine */}
        <Reservation />
      </main>

      {/* Minimal Footer Signature */}
      <Footer />
    </div>
  );
}

