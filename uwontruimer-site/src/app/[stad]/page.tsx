import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviewsBar from "@/components/GoogleReviewsBar";
import ReviewBanner from "@/components/ReviewBanner";
import { stadContent } from "@/data/stad-content";
import Image from "next/image";
import Link from "next/link";
import seoData from "@/data/seo-metadata.json";
import { Frame, Paintbrush, UtensilsCrossed, Sun, Hammer, Wrench, Leaf } from "lucide-react";

const steden = [
  // === Oorspronkelijke 20 steden ===
  { slug: "amsterdam",              name: "Amsterdam",              title: "Woningontruiming Amsterdam | UwOntruimer.nl",                                   desc: "Bel Uw Ontruimer op 085-303 58 94 voor een bedrijfsontruiming, spoedontruiming of woningontruiming in Amsterdam. ✓15+ jaar ervaring ✓Opleveringsgarantie" },
  { slug: "amstelveen",             name: "Amstelveen",             title: "Woningontruiming Amstelveen | Bel vandaag UwOntruimer.nl",                      desc: "Woningontruiming Amstelveen? Bel vandaag Uw Ontruimer voor een snelle, duurzame en discrete ontruiming van uw huis of appartement." },
  { slug: "haarlem",                name: "Haarlem",                title: "Woningontruiming Haarlem - UwOntruimer.nl | Bel vandaag",                      desc: "Uw woningontruiming in Haarlem uitbesteden aan een professioneel ontruimingsbedrijf? Bel Uw Ontruimer via 085-303 58 94. ✓15+ jaar ervaring ✓Duurzaam" },
  { slug: "rotterdam",              name: "Rotterdam",              title: "Woningontruiming Rotterdam | Uw Ontruimer voor iedere klus",                    desc: "Woningontruiming in Rotterdam nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming ✓Bedrijfsontruiming" },
  { slug: "utrecht",                name: "Utrecht",                title: "Woningontruiming Utrecht - Uw ontruimer voor iedere klus",                      desc: "Heeft u professionele woningontruiming in Utrecht nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "den-haag",               name: "Den Haag",               title: "Woningontruiming Den Haag | UwOntruimer.nl",                                    desc: "Voor woningontruiming in Den Haag belt u de specialisten van Uw Ontruimer via 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "leiden",                 name: "Leiden",                 title: "Woningontruiming Leiden | UwOntruimer.nl",                                      desc: "Bel Uw Ontruimer via 085-303 58 94 voor professionele woningontruiming in Leiden. Ook voor bedrijfsontruiming of een spoedontruiming. ✓15+ jaar ervaring" },
  { slug: "hoofddorp",              name: "Hoofddorp",              title: "Woningontruiming Hoofddorp | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Hoofddorp en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "zaandam",                name: "Zaandam",                title: "Woningontruiming Zaandam | UwOntruimer.nl",                                    desc: "Huis laten leegruimen in Zaandam? Neem contact op om de mogelijkheden te bespreken. Geen klus is te gek. Bel 085-303 58 94." },
  { slug: "purmerend",              name: "Purmerend",              title: "Woningontruiming Purmerend | UwOntruimer.nl",                                   desc: "Voor een bedrijfsontruiming, spoedontruiming of woningontruiming in Purmerend belt u Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie" },
  { slug: "alkmaar",                name: "Alkmaar",                title: "Woningontruiming Alkmaar | UwOntruimer.nl",                                    desc: "Professionele woningontruiming in Alkmaar en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "hoorn",                  name: "Hoorn",                  title: "Woningontruiming Hoorn | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Hoorn en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "hilversum",              name: "Hilversum",              title: "Woningontruiming Hilversum | UwOntruimer.nl",                                   desc: "Woningontruiming in Hilversum nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming ✓Bedrijfsontruiming!" },
  { slug: "amersfoort",             name: "Amersfoort",             title: "Woningontruiming Amersfoort | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Amersfoort. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "zoetermeer",             name: "Zoetermeer",             title: "Woningontruiming Zoetermeer | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Zoetermeer. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "delft",                  name: "Delft",                  title: "Woningontruiming Delft | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Delft. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "gouda",                  name: "Gouda",                  title: "Woningontruiming Gouda | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Gouda. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming" },
  { slug: "schiedam",               name: "Schiedam",               title: "Woningontruiming Schiedam | Uw Ontruimer",                                     desc: "Woningontruiming in Schiedam? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan of plan direct een afspraak." },
  { slug: "vlaardingen",            name: "Vlaardingen",            title: "Woningontruiming Vlaardingen | Uw Ontruimer",                                   desc: "Woningontruiming in Vlaardingen? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan of maak direct een afspraak." },
  { slug: "capelle-aan-den-ijssel", name: "Capelle aan den IJssel", title: "Woningontruiming Capelle aan den IJssel | Uw Ontruimer",                        desc: "Woningontruiming in Capelle aan den IJssel? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag nu uw offerte aan of maak een afspraak." },

  // === Aanvullende steden (uit WordPress) ===
  { slug: "aalsmeer",               name: "Aalsmeer",               title: "Woningontruiming Aalsmeer | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Aalsmeer en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "aerdenhout",             name: "Aerdenhout",             title: "Woningontruiming Aerdenhout | UwOntruimer.nl",                                  desc: "Woningontruiming van A tot Z door ervaren vakmensen in Aerdenhout. ✓ Kwaliteit & Zekerheid ✓ Offerte mét Oplevergarantie ✓ Snel geregeld." },
  { slug: "alphen-aan-den-rijn",    name: "Alphen aan den Rijn",    title: "Woningontruiming Alphen aan den Rijn | UwOntruimer.nl",                         desc: "Professionele woningontruiming in Alphen aan den Rijn. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "baarn",                  name: "Baarn",                  title: "Woningontruiming Baarn | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Baarn. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "badhoevedorp",           name: "Badhoevedorp",           title: "Woningontruiming Badhoevedorp | UwOntruimer.nl",                                desc: "Professionele woningontruiming in Badhoevedorp. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "barendrecht",            name: "Barendrecht",            title: "Woningontruiming Barendrecht | Uw Ontruimer",                                   desc: "Is bij u een woningontruiming in Barendrecht nodig? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan." },
  { slug: "bergen",                 name: "Bergen",                 title: "Woningontruiming Bergen | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Bergen (NH). Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "beverwijk",              name: "Beverwijk",              title: "Woningontruiming Beverwijk | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Beverwijk en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "blaricum",               name: "Blaricum",               title: "Woningontruiming Blaricum | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Blaricum. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "bloemendaal",            name: "Bloemendaal",            title: "Woningontruiming Bloemendaal | UwOntruimer.nl",                                 desc: "Professionele woningontruiming in Bloemendaal. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "bodegraven",             name: "Bodegraven",             title: "Woningontruiming Bodegraven | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Bodegraven. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "bunnik",                 name: "Bunnik",                 title: "Woningontruiming Bunnik | Uw Ontruimer",                                       desc: "Wilt u een woningontruiming in Bunnik laten doen? Uw Ontruimer regelt het snel, discreet en met respect. Vraag vrijblijvend een offerte aan." },
  { slug: "bussum",                 name: "Bussum",                 title: "Woningontruiming Bussum | UwOntruimer.nl",                                     desc: "Laat u volledig ontzorgen en bel Uw Ontruimer via 085-303 58 94 voor woningontruiming in Bussum. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "castricum",              name: "Castricum",              title: "Woningontruiming Castricum | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Castricum. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "culemborg",              name: "Culemborg",              title: "Woningontruiming Culemborg | UwOntruimer.nl",                                   desc: "Voor een woningontruiming in Culemborg schakelt u Uw Ontruimer in. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "den-helder",             name: "Den Helder",             title: "Woningontruiming Den Helder | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Den Helder. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "diemen",                 name: "Diemen",                 title: "Woningontruiming Diemen | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Diemen. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "drechterland",           name: "Drechterland",           title: "Woningontruiming Drechterland | UwOntruimer.nl",                                desc: "Professionele woningontruiming in Drechterland. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "edam-volendam",          name: "Edam-Volendam",          title: "Woningontruiming Edam-Volendam | UwOntruimer.nl",                               desc: "Professionele woningontruiming in Edam-Volendam. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "eemnes",                 name: "Eemnes",                 title: "Woningontruiming Eemnes | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Eemnes. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "enkhuizen",              name: "Enkhuizen",              title: "Woningontruiming Enkhuizen | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Enkhuizen. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "gooi-en-vechtstreek",    name: "Gooi- en Vechtstreek",   title: "Woningontruiming Gooi- en Vechtstreek | Uw Ontruimer",                         desc: "In Gooi- en Vechtstreek een woningontruiming nodig? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan." },
  { slug: "gooise-meren",           name: "Gooise Meren",           title: "Woningontruiming Gooise Meren | UwOntruimer.nl",                                desc: "Professionele woningontruiming in Gooise Meren. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "graft-de-rijp",          name: "Graft-De Rijp",          title: "Woningontruiming Graft-De Rijp | UwOntruimer.nl",                               desc: "Professionele woningontruiming in Graft-De Rijp. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "haarlemmerliede",        name: "Haarlemmerliede",        title: "Woningontruiming Haarlemmerliede | UwOntruimer.nl",                             desc: "Professionele woningontruiming in Haarlemmerliede. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "haarlemmermeer",         name: "Haarlemmermeer",         title: "Woningontruiming Haarlemmermeer | UwOntruimer.nl",                              desc: "Professionele woningontruiming in Haarlemmermeer. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "heemskerk",              name: "Heemskerk",              title: "Woningontruiming Heemskerk | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Heemskerk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "heemstede",              name: "Heemstede",              title: "Woningontruiming Heemstede | UwOntruimer.nl",                                   desc: "Woningontruiming in Heemstede. Schakel nu een ervaren woningontruimer in. Wij hebben meer dan 15 jaar ervaring. Bel 085-303 58 94." },
  { slug: "heiloo",                 name: "Heiloo",                 title: "Woningontruiming Heiloo | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Heiloo. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "hillegom",               name: "Hillegom",               title: "Woningontruiming Hillegom | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Hillegom. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "hollands-kroon",         name: "Hollands Kroon",         title: "Woningontruiming Hollands Kroon | UwOntruimer.nl",                              desc: "Professionele woningontruiming in Hollands Kroon. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "houten",                 name: "Houten",                 title: "Woningontruiming Houten | UwOntruimer.nl",                                     desc: "Woningontruiming in Houten nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "huizen",                 name: "Huizen",                 title: "Woningontruiming Huizen | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Huizen. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "ijsselstein",            name: "IJsselstein",            title: "Woningontruiming IJsselstein | Uw Ontruimer",                                   desc: "Woningontruiming in IJsselstein nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "katwijk",                name: "Katwijk",                title: "Woningontruiming Katwijk | UwOntruimer.nl",                                    desc: "Professionele woningontruiming in Katwijk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "landsmeer",              name: "Landsmeer",              title: "Woningontruiming Landsmeer | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Landsmeer. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "laren",                  name: "Laren",                  title: "Woningontruiming Laren | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Laren. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "leiderdorp",             name: "Leiderdorp",             title: "Woningontruiming Leiderdorp | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Leiderdorp. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "leidschendam",           name: "Leidschendam",           title: "Woningontruiming Leidschendam | UwOntruimer.nl",                                desc: "Woningontruiming nodig in Leidschendam? Uw Ontruimer regelt een complete, respectvolle en snelle ontruiming. Bel 085-303 58 94." },
  { slug: "leusden",                name: "Leusden",                title: "Woningontruiming Leusden | Uw Ontruimer",                                      desc: "Is er een woningontruiming in Leusden nodig? Uw Ontruimer helpt u snel, netjes en met respect. Vraag vrijblijvend een offerte aan." },
  { slug: "lisse",                  name: "Lisse",                  title: "Woningontruiming Lisse | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Lisse. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "maassluis",              name: "Maassluis",              title: "Woningontruiming Maassluis | Uw Ontruimer",                                    desc: "Woningontruiming in Maassluis? Uw Ontruimer regelt het snel, discreet en professioneel. Vraag vrijblijvend een offerte aan of maak een afspraak." },
  { slug: "naarden",                name: "Naarden",                title: "Woningontruiming Naarden | UwOntruimer.nl",                                    desc: "Professionele woningontruiming in Naarden. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "weesp",                  name: "Weesp",                  title: "Woningontruiming Weesp | UwOntruimer.nl",                                      desc: "Professionele woningontruiming in Weesp. Grenzend aan Amsterdam. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "nieuw-vennep",           name: "Nieuw-Vennep",           title: "Woningontruiming Nieuw-Vennep | UwOntruimer.nl",                                desc: "Woningontruimer in omgeving Nieuw-Vennep. Met meer dan 15 jaar ervaring kunnen wij iedere klus aan. Bel 085-303 58 94." },
  { slug: "nieuwegein",             name: "Nieuwegein",             title: "Woningontruiming Nieuwegein | UwOntruimer.nl",                                  desc: "Woningontruiming in Nieuwegein nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "noord-holland",          name: "Noord-Holland",          title: "Woningontruiming Noord-Holland | UwOntruimer.nl",                               desc: "Voor professionele woningontruiming in Noord-Holland belt u Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "noordwijk",              name: "Noordwijk",              title: "Woningontruiming Noordwijk | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Noordwijk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "nootdorp",               name: "Nootdorp",               title: "Woningontruiming Nootdorp | UwOntruimer.nl",                                   desc: "Woningontruiming in Nootdorp? Uw Ontruimer regelt een respectvolle, snelle en volledige ontruiming. Bel 085-303 58 94." },
  { slug: "oegstgeest",             name: "Oegstgeest",             title: "Woningontruiming Oegstgeest | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Oegstgeest. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "pijnacker",              name: "Pijnacker",              title: "Woningontruiming Pijnacker | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Pijnacker. Snel, discreet en volledig bezemschoon opgeleverd. Bel Uw Ontruimer op 085-303 58 94." },
  { slug: "ridderkerk",             name: "Ridderkerk",             title: "Woningontruiming Ridderkerk | Uw Ontruimer",                                   desc: "Woningontruiming in Ridderkerk nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "rijswijk",               name: "Rijswijk",               title: "Woningontruiming Rijswijk | UwOntruimer.nl",                                    desc: "Professionele woningontruiming in Rijswijk. Grenzend aan Den Haag. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "roelofarendsveen",       name: "Roelofarendsveen",       title: "Woningontruiming Roelofarendsveen | UwOntruimer.nl",                            desc: "Professionele woningontruiming in Roelofarendsveen. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "schagen",                name: "Schagen",                title: "Woningontruiming Schagen | Uw Ontruimer",                                      desc: "Professionele woningontruiming in Schagen? Uw Ontruimer helpt discreet, snel en vakkundig bij een woningontruiming. Vraag een offerte aan." },
  { slug: "soest",                  name: "Soest",                  title: "Woningontruiming Soest | Uw Ontruimer",                                        desc: "Woningontruiming in Soest nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "stichtse-vecht",         name: "Stichtse Vecht",         title: "Woningontruiming Stichtse Vecht | UwOntruimer.nl",                              desc: "Woningontruiming in Stichtse Vecht nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "uithoorn",               name: "Uithoorn",               title: "Woningontruiming Uithoorn | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Uithoorn. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "veenendaal",             name: "Veenendaal",             title: "Woningontruiming Veenendaal | UwOntruimer.nl",                                  desc: "Woningontruiming in Veenendaal nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "vianen",                 name: "Vianen",                 title: "Woningontruiming Vianen | UwOntruimer.nl",                                     desc: "Uw Ontruimer zorgt voor professionele woningontruiming in Vianen. Bel 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "vijfheerenlanden",       name: "Vijfheerenlanden",       title: "Woningontruiming Vijfheerenlanden | UwOntruimer.nl",                            desc: "Woningontruiming in Vijfheerenlanden nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "voorburg",               name: "Voorburg",               title: "Woningontruiming Voorburg | UwOntruimer.nl",                                   desc: "Woningontruiming in Voorburg? Uw Ontruimer regelt een zorgeloze, discrete en complete ontruiming. Bel 085-303 58 94." },
  { slug: "voorschoten",            name: "Voorschoten",            title: "Woningontruiming Voorschoten | UwOntruimer.nl",                                 desc: "Professionele woningontruiming in Voorschoten. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "wassenaar",              name: "Wassenaar",              title: "Woningontruiming Wassenaar | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Wassenaar. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "woerden",                name: "Woerden",                title: "Woningontruiming Woerden | Snel geholpen | UwOntruimer.nl",                     desc: "Woningontruiming in Woerden nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "zaanstad",               name: "Zaanstad",               title: "Woningontruiming Zaanstad - 15+ jaar ervaring | UwOntruimer.nl",                desc: "Woningontruiming Zaanstad. ✓ Kwaliteit & Zekerheid ✓ Offerte mét Oplevergarantie ✓ Snel geregeld ✓ Heel Nederland." },
  { slug: "zeist",                  name: "Zeist",                  title: "Woningontruiming Zeist | UwOntruimer.nl",                                      desc: "Woningontruiming in Zeist nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "zuid-holland",           name: "Zuid-Holland",           title: "Woningontruiming Zuid-Holland | UwOntruimer.nl",                                desc: "Bel Uw Ontruimer via 085-303 58 94 en laat uw woningontruiming in Zuid-Holland over aan een professioneel ontruimingsbedrijf. ✓15+ jaar ervaring." },

  // === Flevoland ===
  { slug: "almere",                 name: "Almere",                 title: "Woningontruiming Almere | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Almere. Spoedontruiming mogelijk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "lelystad",               name: "Lelystad",               title: "Woningontruiming Lelystad | UwOntruimer.nl",                                   desc: "Woningontruiming in Lelystad na overlijden of seniorenverhuizing? Bel Uw Ontruimer op 085-303 58 94. ✓Discreet ✓Opleveringsgarantie." },

  // === Gelderland ===
  { slug: "arnhem",                 name: "Arnhem",                 title: "Woningontruiming Arnhem | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Arnhem. Spoedontruiming, na overlijden of oplevering aan Portaal. Bel Uw Ontruimer op 085-303 58 94. ✓Opleveringsgarantie." },
  { slug: "apeldoorn",              name: "Apeldoorn",              title: "Woningontruiming Apeldoorn | UwOntruimer.nl",                                   desc: "Woningontruiming in Apeldoorn? Seniorenverhuizing, huis leeghalen of oplevering aan Ons Huis. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring." },

  // === Noord-Brabant & Dordrecht ===
  { slug: "dordrecht",              name: "Dordrecht",              title: "Woningontruiming Dordrecht | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Dordrecht. Actief in Crabbehof, Sterrenburg en Wielwijk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "breda",                  name: "Breda",                  title: "Woningontruiming Breda | UwOntruimer.nl",                                      desc: "Woningontruiming in Breda? Actief in Haagse Beemden, Prinsenbeek en Bavel. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "tilburg",                name: "Tilburg",                title: "Woningontruiming Tilburg | UwOntruimer.nl",                                    desc: "Professionele woningontruiming in Tilburg. Actief in Reeshof, Broekhoven en Noord. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Spoedontruiming." },
  { slug: "den-bosch",              name: "Den Bosch",              title: "Woningontruiming Den Bosch | UwOntruimer.nl",                                  desc: "Woningontruiming in Den Bosch? Actief in Rosmalen, Empel en Graafsepoort. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "eindhoven",              name: "Eindhoven",              title: "Woningontruiming Eindhoven | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Eindhoven. Actief in Woensel, Stratum en Gestel. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },

  // === Zaanstreek-Waterland aanvulling ===
  { slug: "oostzaan",               name: "Oostzaan",               title: "Woningontruiming Oostzaan | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Oostzaan. Actief in de Dorpsstraat, Zuideinde en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "wormerland",             name: "Wormerland",             title: "Woningontruiming Wormerland | UwOntruimer.nl",                                  desc: "Woningontruiming in Wormerland? Actief in Wormer, Jisp, Neck en Wijdewormer. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "waterland",              name: "Waterland",              title: "Woningontruiming Waterland | UwOntruimer.nl",                                   desc: "Woningontruiming in Waterland? Actief in Monnickendam, Broek in Waterland en Marken. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
  { slug: "beemster",               name: "Beemster",               title: "Woningontruiming Beemster | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in de Beemsterpolder (UNESCO). Actief in Middenbeemster en omgeving. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring." },

  // === Amstelregio ===
  { slug: "ouder-amstel",           name: "Ouder-Amstel",           title: "Woningontruiming Ouder-Amstel | UwOntruimer.nl",                                desc: "Woningontruiming in Ouder-Amstel? Actief in Ouderkerk a/d Amstel, Duivendrecht en Abcoude. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring." },
  { slug: "muiden",                 name: "Muiden",                 title: "Woningontruiming Muiden | UwOntruimer.nl",                                     desc: "Professionele woningontruiming in Muiden en Muiderberg. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },

  // === Utrecht aanvulling ===
  { slug: "de-ronde-venen",         name: "De Ronde Venen",         title: "Woningontruiming De Ronde Venen | UwOntruimer.nl",                             desc: "Woningontruiming in De Ronde Venen? Actief in Mijdrecht, Vinkeveen en Wilnis. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie." },
];

// Provincie-indeling voor "Ook actief in" sectie (sluit provinciesidepagina's uit)
const provincieSteden: Record<string, string[]> = {
  "noord-holland": [
    "aalsmeer", "aerdenhout", "alkmaar", "amstelveen", "amsterdam", "badhoevedorp",
    "bergen", "beverwijk", "blaricum", "bloemendaal", "bussum", "castricum",
    "den-helder", "diemen", "drechterland", "edam-volendam", "enkhuizen",
    "gooi-en-vechtstreek", "gooise-meren", "graft-de-rijp", "haarlem",
    "haarlemmerliede", "haarlemmermeer", "heemskerk", "heemstede", "heiloo",
    "hilversum", "hollands-kroon", "hoofddorp", "hoorn", "huizen", "landsmeer",
    "laren", "naarden", "nieuw-vennep", "purmerend", "schagen", "uithoorn",
    "weesp", "zaandam", "zaanstad",
    "oostzaan", "wormerland", "waterland", "beemster", "ouder-amstel", "muiden",
  ],
  "zuid-holland": [
    "alphen-aan-den-rijn", "barendrecht", "bodegraven", "capelle-aan-den-ijssel",
    "delft", "den-haag", "dordrecht", "gouda", "hillegom", "katwijk", "leiden",
    "leiderdorp", "leidschendam", "lisse", "maassluis", "noordwijk", "nootdorp",
    "oegstgeest", "pijnacker", "ridderkerk", "rijswijk", "roelofarendsveen",
    "rotterdam", "schiedam", "vlaardingen", "voorburg", "voorschoten",
    "wassenaar", "zoetermeer",
  ],
  "utrecht": [
    "amersfoort", "baarn", "bunnik", "culemborg", "eemnes", "houten",
    "ijsselstein", "leusden", "nieuwegein", "soest", "stichtse-vecht", "utrecht",
    "veenendaal", "vianen", "vijfheerenlanden", "woerden", "zeist",
    "de-ronde-venen",
  ],
  "flevoland": ["almere", "lelystad"],
  "gelderland": ["apeldoorn", "arnhem"],
  "noord-brabant": ["breda", "den-bosch", "eindhoven", "tilburg"],
};

function getNabijgelegenSteden(currentSlug: string): Array<{ slug: string; name: string }> {
  const entry = Object.values(provincieSteden).find((slugs) => slugs.includes(currentSlug));
  if (!entry) return [];
  const others = entry.filter((s) => s !== currentSlug);
  if (others.length === 0) return [];
  const startIdx = entry.indexOf(currentSlug) % others.length;
  const result: string[] = [];
  for (let i = 0; i < Math.min(5, others.length); i++) {
    result.push(others[(startIdx + i) % others.length]);
  }
  return result.map((slug) => {
    const city = steden.find((s) => s.slug === slug);
    return { slug, name: city?.name ?? slug };
  });
}

export function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad: rawStad } = await params;
  const stad = rawStad.replace(/^woningontruiming-/, "");
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  const key = `woningontruiming-${stad}` as keyof typeof seoData;
  const seo = seoData[key];
  const title = seo?.title || `Woningontruiming ${name} | Uw Ontruimer`;
  const description = seo?.description || `Woningontruiming in ${name} nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Snel ter plaatse`;
  return {
    title,
    description,
    alternates: { canonical: `/woningontruiming-${stad}/` },
    openGraph: {
      title,
      description,
      url: `https://www.uwontruimer.nl/woningontruiming-${stad}/`,
      siteName: "UwOntruimer.nl",
      locale: "nl_NL",
      type: "website",
      images: [
        {
          url: "/hero-truck.png",
          width: 1200,
          height: 630,
          alt: `Woningontruiming ${name} – UwOntruimer.nl`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-truck.png"],
    },
  };
}

export default async function StadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad: rawStad } = await params;
  const stad = rawStad.replace(/^woningontruiming-/, "");
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  const paragraphs = stadContent[stad] ?? null;
  const nabijgelegenSteden = getNabijgelegenSteden(stad);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Wat kost een woningontruiming in ${name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `De kosten van een woningontruiming in ${name} zijn afhankelijk van de omvang van de klus, de hoeveelheid inboedel en eventuele bijzondere omstandigheden. Uw Ontruimer werkt altijd met een transparante, vaste offerte — zonder verborgen kosten. Bel 085-303 58 94 voor een gratis prijsopgave.`,
        },
      },
      {
        "@type": "Question",
        name: `Hoe snel kan Uw Ontruimer in ${name} starten?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `In de meeste gevallen kunnen wij binnen 24 tot 48 uur na contact starten met de ontruiming in ${name}. Bij spoedgevallen kijken wij altijd naar de mogelijkheden voor een snellere inzet. Neem direct contact op via 085-303 58 94.`,
        },
      },
      {
        "@type": "Question",
        name: `Moet ik zelf aanwezig zijn bij de woningontruiming in ${name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `U hoeft niet persoonlijk aanwezig te zijn. Uw Ontruimer werkt volledig zelfstandig en levert de woning bezemschoon op met een schriftelijke opleveringsgarantie. Wel heeft u kort contact nodig voor overdracht van sleutels en specifieke instructies.`,
        },
      },
      {
        "@type": "Question",
        name: `Wat gebeurt er met de inboedel bij een ontruiming in ${name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Waardevolle spullen worden getaxeerd en kunnen worden afgekocht of verrekend met de ontruimingskosten. Herbruikbare goederen gaan naar de kringloopwinkel, de rest wordt op verantwoorde wijze afgevoerd en gesorteerd. Wij werken duurzaam en houden zo veel mogelijk materiaal uit de verbrandingsoven.`,
        },
      },
    ],
  };

  const faqItems = [
    {
      q: `Wat kost een woningontruiming in ${name}?`,
      a: `De kosten van een woningontruiming in ${name} zijn afhankelijk van de omvang van de klus, de hoeveelheid inboedel en eventuele bijzondere omstandigheden. Uw Ontruimer werkt altijd met een transparante, vaste offerte — zonder verborgen kosten. Bel 085-303 58 94 voor een gratis prijsopgave.`,
    },
    {
      q: `Hoe snel kan Uw Ontruimer in ${name} starten?`,
      a: `In de meeste gevallen kunnen wij binnen 24 tot 48 uur na contact starten met de ontruiming in ${name}. Bij spoedgevallen kijken wij altijd naar de mogelijkheden voor een snellere inzet. Neem direct contact op via 085-303 58 94.`,
    },
    {
      q: `Moet ik zelf aanwezig zijn bij de woningontruiming in ${name}?`,
      a: `U hoeft niet persoonlijk aanwezig te zijn. Uw Ontruimer werkt volledig zelfstandig en levert de woning bezemschoon op met een schriftelijke opleveringsgarantie. Wel heeft u kort contact nodig voor overdracht van sleutels en specifieke instructies.`,
    },
    {
      q: `Wat gebeurt er met de inboedel bij een ontruiming in ${name}?`,
      a: `Waardevolle spullen worden getaxeerd en kunnen worden afgekocht of verrekend met de ontruimingskosten. Herbruikbare goederen gaan naar de kringloopwinkel, de rest wordt op verantwoorde wijze afgevoerd en gesorteerd. Wij werken duurzaam en houden zo veel mogelijk materiaal uit de verbrandingsoven.`,
    },
  ];

  const phoneIcon = (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const offerteIcon = (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const checkItems = ["100% Gratis & Vrijblijvend", "Direct een prijsindicatie", "Foto's uploaden via mobiel"];

  const ctaButtons = (dark = false) => (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-5 flex-wrap">
        <a
          href="tel:0853035894"
          className={`phone-glow-alt order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 font-semibold px-5 py-3.5 rounded-xl transition-colors text-base border-2 bg-blue-600 text-white border-blue-600 hover:opacity-90 ${dark ? "sm:bg-transparent sm:border-white sm:hover:bg-white/10" : "sm:bg-white sm:text-blue-600 sm:border-blue-600 sm:hover:bg-blue-50 sm:hover:opacity-100"}`}
        >
          <Image
            src="/peter-visser2.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover flex-shrink-0 w-8 h-8"
          />
          Bel Peter — 085-303 58 94
        </a>
        <a
          href="https://analyse.uwontruimer.nl"
          className="order-2 sm:order-1 inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl shadow-md transition-opacity hover:opacity-90 text-base"
          style={{ backgroundColor: "#d97706" }}
        >
          {offerteIcon}
          Ontvang direct uw AI-offerte (2 min)
        </a>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1.5">
        {checkItems.map((item) => (
          <span key={item} className={`inline-flex items-center gap-1.5 text-sm ${dark ? "text-slate-400" : "text-slate-400"}`}>
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="mt-16">

        {/* Hero afbeelding */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image src="/hero-truck.png" alt={`Woningontruiming ${name}`} fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        {/* Hero CTA blok */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkgebied</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-3">Woningontruiming {name}</h1>
            <p className="text-lg text-slate-500 font-light mb-8">Snel, discreet en met schriftelijke opleveringsgarantie</p>
            {ctaButtons(false)}

            {/* Beschikbaarheidsstrip */}
            <div className="mt-6 flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
              <Image
                src="/team-Lisa.jpg"
                alt="Lisa — Planning"
                width={48}
                height={48}
                className="rounded-full object-cover flex-shrink-0 w-12 h-12"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-700 mb-0.5">Lisa — Planning</p>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-xs text-slate-500 font-light leading-snug">Beperkte beschikbaarheid deze week in {name} — bel voor actuele planning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trustbalk */}
        <div className="bg-slate-50 border-t border-slate-100 py-5 px-6">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8">
            {[
              { label: "15+ jaar ervaring", icon: <svg key="exp" className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
              { label: "Schriftelijke opleveringsgarantie", icon: <svg key="gar" className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> },
              { label: "Binnen 24 uur beschikbaar", icon: <svg key="24h" className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Google reviews bar */}
        <GoogleReviewsBar />

        {/* Roterende klantreviews */}
        <ReviewBanner name={name} />

        {/* StadContent + FAQ + CTA */}
        <div className="bg-white py-14 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Stadinhoud — eerste twee alinea's */}
            {paragraphs ? (
              paragraphs.slice(0, 2).map((p, i) => (
                <p key={i} className="text-slate-500 font-light leading-relaxed mb-6">{p}</p>
              ))
            ) : (
              <>
                <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is actief in {name} en omstreken. Wij verzorgen de volledige ontruiming van woningen, appartementen en bedrijfspanden — snel, discreet en met een schriftelijke opleveringsgarantie.</p>
                <p className="text-slate-500 font-light leading-relaxed mb-6">Of u nu een woning wilt laten ontruimen na een overlijden, een verhuizing plant of een spoedontruiming nodig heeft: ons team staat voor u klaar in {name}. Wij hanteren vaste, transparante prijzen zonder verborgen kosten.</p>
              </>
            )}

            {/* Carlos quote blok */}
            <div className="mt-8 bg-white border border-slate-100 rounded-xl shadow-sm px-6 py-5 flex items-start gap-4">
              <Image
                src="/team-Carlos.jpg"
                alt="Carlos"
                width={64}
                height={64}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-slate-600 font-light leading-relaxed text-sm italic mb-2">
                  "In mijn 15 jaar bij Uw Ontruimer heb ik alles gezien — van gewone ontruimingen tot extreme vervuiling. Geen klus is te groot."
                </p>
                <p className="text-xs font-medium text-slate-400">— Carlos, Senior Uitvoerder</p>
              </div>
            </div>

            {/* Aanvullende services — na tweede alinea */}
            <div className="mt-8 border-t border-slate-100 pt-8 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-5">
                Aanvullende services in {name}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {[
                  { href: "/diensten/raambekleding-verwijderen", Icon: Frame,             label: "Raambekleding verwijderen" },
                  { href: "/diensten/behang-verwijderen",        Icon: Paintbrush,        label: "Behang verwijderen" },
                  { href: "/diensten/keuken-verwijderen",        Icon: UtensilsCrossed,   label: "Keuken verwijderen" },
                  { href: "/diensten/zonnescherm-verwijderen",   Icon: Sun,               label: "Zonnescherm verwijderen" },
                  { href: "/diensten/constructies-verwijderen",  Icon: Hammer,            label: "Constructies verwijderen" },
                  { href: "/diensten/gaatjes-dichten",           Icon: Wrench,            label: "Gaatjes dichten" },
                  { href: "/diensten/tuin-snoeien-opschonen",    Icon: Leaf,              label: "Tuin snoeien & opschonen" },
                ].map(({ href, Icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex flex-col items-center gap-2 bg-white rounded-lg border border-slate-100 shadow-sm px-3 py-4 text-center hover:border-blue-200 hover:shadow-md transition-all duration-150"
                  >
                    <Icon size={24} color="#2563eb" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-blue-600 leading-tight transition-colors">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stadinhoud — rest van de alinea's */}
            {paragraphs ? (
              paragraphs.slice(2).map((p, i) => (
                <p key={i + 2} className="text-slate-500 font-light leading-relaxed mb-6">{p}</p>
              ))
            ) : (
              <p className="text-slate-500 font-light leading-relaxed mb-6">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag direct een gratis offerte aan.</p>
            )}

            {/* Amber urgentie-blok */}
            <div className="mt-8 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-4">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm font-medium text-amber-700">
                Beperkte beschikbaarheid in {name} — bel voor actuele planning
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-14 border-t border-slate-100 pt-10">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">
                Veelgestelde vragen over woningontruiming in {name}
              </h2>
              <div className="space-y-7">
                {faqItems.map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-slate-800 mb-1.5">{q}</p>
                    <p className="text-slate-500 font-light leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Duurzaamheidssectie */}
            <div className="mt-14 border-t border-slate-100 pt-10">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                Duurzame ontruiming in {name}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                Bij Uw Ontruimer gaat zo weinig mogelijk naar de verbrandingsoven. Meubels, kleding en huisraad die nog bruikbaar zijn, doneren wij aan de kringloopwinkel. Wat niet hergebruikt kan worden, wordt gesorteerd afgevoerd via gecertificeerde milieustraten. Zo zorgen wij voor een verantwoorde en milieubewuste ontruiming in {name}.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="relative overflow-hidden rounded-xl" style={{ height: "200px" }}>
                  <Image
                    src="/milieustraat.png"
                    alt="Milieustraat — verantwoord afvoeren"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 px-3 py-2">
                    <p className="text-white text-xs font-medium">Verantwoord afvoeren</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl" style={{ height: "200px" }}>
                  <Image
                    src="/kringloop.png"
                    alt="Kringloopwinkel — hergebruik van inboedel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 px-3 py-2">
                    <p className="text-white text-xs font-medium">Hergebruik via kringloop</p>
                  </div>
                </div>
              </div>
              <a href="/duurzaam/" className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:underline">
                Meer over onze duurzame aanpak
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Onderste CTA blok */}
            <div className="mt-14 rounded-2xl border border-slate-200 px-8 py-10 sm:px-10" style={{ backgroundColor: "#f8fafc" }}>
              <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#1e3a5f" }}>Aan de slag</p>
              <h2 className="text-2xl font-semibold tracking-tight mb-2" style={{ color: "#1e3a5f" }}>Klaar voor de volgende stap?</h2>
              <p className="font-light text-sm leading-relaxed mb-7" style={{ color: "#1e3a5f", opacity: 0.7 }}>
                Vraag vandaag nog een gratis offerte aan of gebruik onze analysetool voor een directe prijsindicatie.
              </p>
              {ctaButtons(false)}
            </div>

            {/* Ook actief in */}
            {nabijgelegenSteden.length > 0 && (
              <div className="mt-14 border-t border-slate-100 pt-10">
                <h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-5">
                  Ook actief in
                </h2>
                <div className="flex flex-wrap gap-2">
                  {nabijgelegenSteden.map((naburig) => (
                    <Link
                      key={naburig.slug}
                      href={`/woningontruiming-${naburig.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-150"
                    >
                      Woningontruiming {naburig.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
