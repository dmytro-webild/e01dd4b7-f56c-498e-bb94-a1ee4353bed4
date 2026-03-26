"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About Us",
          id: "about",
        },
        {
          name: "Menu",
          id: "signature-dishes",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Kiloole"
      bottomLeftText="Authentic Ethiopian Cuisine"
      bottomRightText="Dubai, UAE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "radial-gradient",
      }}
      title="KILOOLE - Authentic Ethiopian Dining"
      description="Experience the true taste of Ethiopia in the heart of Dubai. Savor rich flavors, warm hospitality, and unforgettable traditional coffee rituals."
      buttons={[
        {
          text: "View Menu",
          href: "#signature-dishes",
        },
        {
          text: "Reserve Table",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-meal-with-rice-pita_23-2148747622.jpg",
          imageAlt: "Luxurious Ethiopian restaurant interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/antique-vase-with-indigenous-pattern_23-2151585793.jpg",
          imageAlt: "Traditional Ethiopian coffee ceremony",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beef-dish-restaurant_7939-1754.jpg",
          imageAlt: "Gourmet Beef Tibs with Injera",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blue-wooden-board-chicken-leg-macaroni_114579-86316.jpg",
          imageAlt: "Colorful Ethiopian Vegetarian Platter",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bread-bagels-with-eggs-milk_140725-6056.jpg",
          imageAlt: "Traditional Ethiopian woven basket",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-restaurant-with-various-places_140725-9587.jpg",
          imageAlt: "Warm and inviting Ethiopian restaurant ambiance",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Authentic Ethiopian Culture & Hospitality"
      description={[
        "Kiloole Restaurant brings the true taste of Ethiopia to Dubai. From rich injera bread to flavorful tibs and lentil dishes, every meal is crafted with tradition and care. We pride ourselves on using authentic spices and fresh ingredients to deliver an unparalleled dining experience.",
        "Guests love our warm hospitality, cozy environment, and unique coffee ceremony served with popcorn — a cultural experience like no other. Discover the heart of Ethiopian tradition with us.",
      ]}
    />
  </div>

  <div id="signature-dishes" data-section="signature-dishes">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "beef-tibs",
          brand: "Kiloole",
          name: "Beef Tibs with Injera",
          price: "AED 85",
          rating: 5,
          reviewCount: "120 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/qutabs-delicious-meat-pumpkin-dish-poured-up-wth-flour-with-pomegranate-slices-sumax-grey-surface_140725-14199.jpg",
          imageAlt: "Spicy Beef Tibs served with Injera",
        },
        {
          id: "lentil-stew",
          brand: "Kiloole",
          name: "Misir Wot (Lentil Stew)",
          price: "AED 60",
          rating: 4,
          reviewCount: "95 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-beans-with-walnuts-side-view_140725-11199.jpg",
          imageAlt: "Hearty Misir Wot served with Injera",
        },
        {
          id: "coffee-ceremony",
          brand: "Kiloole",
          name: "Traditional Coffee Ceremony",
          price: "AED 50",
          rating: 5,
          reviewCount: "150 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/tattooed-barista-hand-holds-raw-green-coffee-beans-from-white-plastic-basket-cotton-bags-europalet-warehouse_346278-886.jpg",
          imageAlt: "Ethiopian Coffee Ceremony with Jebena and Popcorn",
        },
      ]}
      title="Signature Dishes & Rituals"
      description="Explore the authentic flavors and cherished traditions that define Kiloole. Each dish is a journey, every ritual a celebration."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          date: "December 2024",
          title: "Unforgettable Authentic Experience",
          quote: "Kiloole offers such an authentic Ethiopian experience. The food was incredibly flavorful, and the coffee ceremony was a beautiful touch. Amazing hospitality, very kind owner!",
          tag: "Dining Experience",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-eating-pizza-pizza-bar_1303-20334.jpg",
          avatarAlt: "Sarah J. avatar",
        },
        {
          id: "2",
          name: "Ahmed K.",
          date: "November 2024",
          title: "Dubai's Best Ethiopian Cuisine",
          quote: "I've tried many Ethiopian restaurants, but Kiloole truly stands out. The Injera is perfect, and the Tibs were just incredible. Authentic Ethiopian food and great coffee.",
          tag: "Cuisine",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-carefree-handsome-blond-man-with-bristle-blue-eyes-showing-okay-gestures-smiling-satisfied_176420-43564.jpg",
          avatarAlt: "Ahmed K. avatar",
        },
        {
          id: "3",
          name: "Fatima A.",
          date: "October 2024",
          title: "A Hidden Gem in Al Nahda",
          quote: "Such a cozy and welcoming atmosphere. It's the perfect place to try something new and cultural, a true hidden gem in Dubai. We'll definitely be back!",
          tag: "Ambiance",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-woman-talking-phone_23-2148660681.jpg",
          avatarAlt: "Fatima A. avatar",
        },
        {
          id: "4",
          name: "Michael S.",
          date: "September 2024",
          title: "Highly Recommended!",
          quote: "One of the best restaurants we have eaten… loved the cuisine. Even kids enjoyed it! The lentil dishes were exceptional. Highly recommended for families and foodies alike.",
          tag: "Family Dining",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-man-taking-selfie-with-ticket_74855-3151.jpg",
          avatarAlt: "Michael S. avatar",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our delighted customers about their unforgettable experiences at Kiloole Restaurant."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Visit Us"
      title="Experience Kiloole Today"
      description="Located conveniently in Al Nahda, Dubai, Kiloole Restaurant awaits to offer you an authentic Ethiopian dining experience. Reserve your table or simply walk in for an unforgettable culinary journey. We look forward to welcoming you!"
      imageSrc="http://img.b2bpic.net/free-photo/person-holding-ceramic-mug-kettle_23-2148324856.jpg"
      imageAlt="Ethiopian restaurant entrance"
      mediaAnimation="slide-up"
      mediaPosition="left"
      inputPlaceholder="Your Email"
      buttonText="Book a Table"
      termsText="By clicking 'Book a Table' you're confirming that you agree with our Reservation Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Kiloole"
      copyrightText="© 2026 Kiloole Restaurant. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/kiloole",
          ariaLabel: "Facebook link",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/kiloole",
          ariaLabel: "Instagram link",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/kiloole",
          ariaLabel: "Twitter link",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
