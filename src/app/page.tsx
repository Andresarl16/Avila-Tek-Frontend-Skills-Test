"use client";

import { featureCards } from "@/constants/FeatureCards";
import { integrationCards } from "@/constants/IntegrationCards";
import Modal from "@/ui/components/Modal";
import CardSection from "@/ui/components/sections/CardSection";
import FAQ from "@/ui/components/sections/FAQ";
import Footer from "@/ui/components/sections/Footer";
import FreeTrial from "@/ui/components/sections/FreeTrial";
import GiveUsAShoot from "@/ui/components/sections/GiveUsAShoot";
import HeaderSection from "@/ui/components/sections/HeaderSection";
import Navbar from "@/ui/components/sections/Navbar";
import Reviews from "@/ui/components/sections/Reviews";
import { useState } from "react";

export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Modal");
  const [modalText, setModalText] = useState<string>("");

  const handleClose = () => setModalVisible(false);

  function openModal(title: string, text: string) {
    setModalTitle(title);
    setModalText(text);
    setModalVisible(true);
  }

  return (
    <main className="max-w-full grid grid-cols-12">
      <div className="fixed top-0 z-10 w-full grid grid-cols-12">
        <Navbar></Navbar>
      </div>
      <HeaderSection id="home" openModal={openModal}></HeaderSection>
      <CardSection
        id="products"
        badge="Integrations"
        title="Get more value from your tools"
        description="Connect your tools, connect your teams. With over 100 apps already
        available in our directory, your team’s favourite tools are just a click
        away."
        cards={integrationCards}
        iconSizes="medium"
        openModal={openModal}
      />
      <GiveUsAShoot></GiveUsAShoot>
      <CardSection
        id="resources"
        badge="Features"
        title="Cutting-edge features for advanced analytics"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        cards={featureCards}
        iconSizes="small"
        openModal={openModal}
      />
      <FreeTrial id="pricing"></FreeTrial>
      <FAQ id="faq"></FAQ>
      <Reviews></Reviews>
      <Footer openModal={openModal}></Footer>

      {/* Modal Component */}
      <Modal visible={modalVisible} onClose={handleClose} title={modalTitle}>
        {" "}
        <p>{modalText}</p>
      </Modal>
    </main>
  );
}
