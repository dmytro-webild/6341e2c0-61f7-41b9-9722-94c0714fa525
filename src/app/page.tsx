"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import { FileText, Palette, Printer } from "lucide-react";

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
              { name: "Services", id: "features" },
              { name: "Catalogue", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Maison d'Imprimeur"
            button={{ text: "Devis Rapide", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardCarousel
            background={{ variant: "rotated-rays-animated" }}
            title="L'art de l'impression, sublimé"
            description="De la conception graphique à la finition artisanale, nous transformons vos idées en supports palpables d'exception."
            buttons={[{ text: "Découvrir notre savoir-faire", href: "#about" }, { text: "Voir le catalogue", href: "#products" }]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26577.jpg", imageAlt: "Impression Offset" },
              { imageSrc: "http://img.b2bpic.net/free-photo/yellow-paper-leaflets-brown-table_23-2147945125.jpg", imageAlt: "Finitions" },
              { imageSrc: "http://img.b2bpic.net/free-photo/blank-letterhead-business-cards-isolated-white_211682-244.jpg", imageAlt: "Papeterie" },
              { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-concept-with-prism-dispersing-light_23-2148599232.jpg", imageAlt: "Technologie" },
              { imageSrc: "http://img.b2bpic.net/free-photo/top-view-art-supplies-concept_23-2148577713.jpg?_wi=1", imageAlt: "Création" },
              { imageSrc: "http://img.b2bpic.net/free-photo/minimalist-black-office-desk-with-notebook_23-2151968893.jpg?_wi=1", imageAlt: "Bureau" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            title="Une expertise dédiée au papier"
            buttons={[{ text: "En savoir plus", href: "#contact" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureBorderGlow
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { icon: Printer, title: "Impression Offset", description: "Pour vos grands tirages et projets de haute qualité." },
              { icon: Palette, title: "Design Graphique", description: "Conception de vos visuels par nos experts." },
              { icon: FileText, title: "Finitions Premium", description: "Dorure, gaufrage et découpe laser sur mesure." }
            ]}
            title="Nos services d'impression"
            description="Nous accompagnons les entreprises et les particuliers avec une large gamme de solutions graphiques."
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "Cartes de visite", price: "Demander un devis", imageSrc: "http://img.b2bpic.net/free-photo/set-empty-business-cards-wooden-background_1203-1935.jpg", priceButtonProps: { href: "#contact", text: "Demander un devis" } },
              { id: "p2", name: "Brochures", price: "Demander un devis", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=aydbtc", priceButtonProps: { href: "#contact", text: "Demander un devis" } },
              { id: "p3", name: "Affiches grand format", price: "Demander un devis", imageSrc: "http://img.b2bpic.net/free-photo/mexican-traditional-cards-game_23-2150558664.jpg", priceButtonProps: { href: "#contact", text: "Demander un devis" } },
              { id: "p4", name: "Flyers publicitaires", price: "Demander un devis", imageSrc: "http://img.b2bpic.net/free-vector/mega-collection-corporate-flyers-templates-design-business-reports-presentation_1302-4674.jpg", priceButtonProps: { href: "#contact", text: "Demander un devis" } },
              { id: "p5", name: "Pochettes dossier", price: "Demander un devis", imageSrc: "http://img.b2bpic.net/free-photo/minimalist-black-office-desk-with-notebook_23-2151968893.jpg?_wi=2", priceButtonProps: { href: "#contact", text: "Demander un devis" } },
              { id: "p6", name: "Stickers personnalisés", price: "Demander un devis", imageSrc: "http://img.b2bpic.net/free-photo/top-view-art-supplies-concept_23-2148577713.jpg?_wi=2", priceButtonProps: { href: "#contact", text: "Demander un devis" } }
            ]}
            title="Catalogue produit"
            description="Découvrez nos solutions standards pour tous vos besoins."
          />
        </div>

        <div id="social-proof" data-section="social-proof">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={false}
            names={["PrintExpert", "GraphiquePro", "CreativeAgency", "StudioPub", "AtelierPaper", "LogistikGroup", "MediaPress"]}
            title="Ils nous font confiance"
            description="Partenaires de longue date et entreprises locales."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Julie D.", imageSrc: "http://img.b2bpic.net/free-photo/woman-telling-secret-holding-paper-bag_23-2148316744.jpg" },
              { id: "2", name: "Marc L.", imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-thumbs-up_1187-3144.jpg" },
              { id: "3", name: "Sophie P.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg" },
              { id: "4", name: "Thomas G.", imageSrc: "http://img.b2bpic.net/free-photo/happy-employee_1098-16109.jpg" },
              { id: "5", name: "Claire V.", imageSrc: "http://img.b2bpic.net/free-photo/positive-businesswoman-work_1098-3861.jpg" }
            ]}
            cardTitle="Ce que disent nos clients"
            cardTag="Avis Clients"
            cardAnimation="blur-reveal"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "Quels sont les délais ?", content: "Nous traitons vos commandes en 3 à 5 jours ouvrés selon le volume." },
              { id: "f2", title: "Livrez-vous partout ?", content: "Oui, nous expédions sur toute la France métropolitaine." },
              { id: "f3", title: "Quels fichiers accepter ?", content: "PDF, AI, et PSD haute résolution sont recommandés." }
            ]}
            title="Questions fréquentes"
            description="Tout ce que vous devez savoir avant de lancer votre impression."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Contact"
            title="Demandez votre devis"
            description="Envoyez-nous vos spécifications, nous reviendrons vers vous avec une offre personnalisée."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Services", href: "#features" }, { label: "Catalogue", href: "#products" }] },
              { items: [{ label: "Contact", href: "#contact" }, { label: "Mentions Légales", href: "#" }] }
            ]}
            logoText="Maison d'Imprimeur"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}