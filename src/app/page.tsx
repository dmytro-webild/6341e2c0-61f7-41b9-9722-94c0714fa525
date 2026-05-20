"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import MediaAbout from '@/components/sections/about/MediaAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Accueil", id: "hero" },
              { name: "Réalisations", id: "products" },
              { name: "Processus", id: "features" },
              { name: "Avis", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Maison d'Imprimeur"
            button={{ text: "Devis Rapide", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardCarousel
            title="L'art de l'impression, sublimé"
            description="De la conception graphique à la finition artisanale, nous transformons vos idées en supports palpables d'exception."
            background={{ variant: "plain" }}
            buttons={[{ text: "Découvrir notre savoir-faire", href: "#about" }, { text: "Voir nos réalisations", href: "#products" }]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26577.jpg?_wi=1", imageAlt: "Impression Offset" },
              { imageSrc: "http://img.b2bpic.net/free-photo/yellow-paper-leaflets-brown-table_23-2147945125.jpg", imageAlt: "Finitions" },
              { imageSrc: "http://img.b2bpic.net/free-photo/blank-letterhead-business-cards-isolated-white_211682-244.jpg", imageAlt: "Papeterie" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            useInvertedBackground={false}
            title="Une expertise dédiée au papier"
            description="Nous allions savoir-faire traditionnel et technologies modernes pour des projets d'impression qui marquent les esprits. Chaque détail est pensé pour sublimer votre identité."
            imageSrc="http://img.b2bpic.net/free-photo/designer-working-office_1134-45.jpg"
            buttons={[{ text: "En savoir plus", href: "#contact" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyThree
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Notre processus en 3 étapes"
            description="De la première idée jusqu'à la livraison finale, nous vous accompagnons avec rigueur."
            features={[
              { id: "s1", title: "1. Consultation Créative", tags: ["Expertise"], imageSrc: "http://img.b2bpic.net/free-photo/brainstorming-session-office_1134-46.jpg" },
              { id: "s2", title: "2. Impression Haute Fidélité", tags: ["Qualité"], imageSrc: "http://img.b2bpic.net/free-photo/printing-machinery-close-up_1134-47.jpg" },
              { id: "s3", title: "3. Finitions Artisanales", tags: ["Précision"], imageSrc: "http://img.b2bpic.net/free-photo/finishing-details-printing_1134-48.jpg" }
            ]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            gridVariant="asymmetric-60-wide-40-narrow"
            title="Nos Réalisations"
            description="Découvrez nos derniers travaux d'impression et projets graphiques réalisés pour nos clients."
            products={[
              { id: "p1", brand: "Événementiel", name: "Invitation Luxe", price: "Sur demande", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/set-empty-business-cards-wooden-background_1203-1935.jpg" },
              { id: "p2", brand: "Corporate", name: "Catalogue Prestige", price: "Sur demande", rating: 5, reviewCount: "25", imageSrc: "http://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26577.jpg?_wi=2" },
              { id: "p3", brand: "Retail", name: "Packaging sur-mesure", price: "Sur demande", rating: 4, reviewCount: "18", imageSrc: "http://img.b2bpic.net/free-photo/minimalist-black-office-desk-with-notebook_23-2151968893.jpg" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            useInvertedBackground={false}
            animationType="slide-up"
            textboxLayout="split"
            title="La satisfaction est notre signature"
            description="Découvrez ce que disent nos clients de notre expertise."
            kpiItems={[{ label: "Années d'expérience", value: "15+" }, { label: "Projets réalisés", value: "2000+" }, { label: "Clients satisfaits", value: "99%" }]}
            testimonials={[
              { id: "1", name: "Claire V.", role: "DA", company: "Agence Créative", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/positive-businesswoman-work_1098-3861.jpg" },
              { id: "2", name: "Marc L.", role: "Dirigeant", company: "Tech Solutions", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-thumbs-up_1187-3144.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Contact"
            title="Obtenir un devis"
            description="Remplissez ce formulaire pour nous transmettre vos besoins. Un conseiller prendra contact avec vous sous 24h."
            imageSrc="http://img.b2bpic.net/free-photo/happy-business-people-meeting_1134-29.jpg"
            onSubmit={(email) => console.log("Form submitted with email:", email)}
            useInvertedBackground={false}
            background={{ variant: "plain" }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Services", href: "#features" }, { label: "Réalisations", href: "#products" }] },
              { items: [{ label: "Contact", href: "#contact" }, { label: "Mentions Légales", href: "#" }] }
            ]}
            logoText="Maison d'Imprimeur"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
