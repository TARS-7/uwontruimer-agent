import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { stadContent } from "@/data/stad-content";
import Image from "next/image";
import seoData from "@/data/seo-metadata.json";

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
  { slug: "nieuw-vennep",           name: "Nieuw-Vennep",           title: "Woningontruiming Nieuw-Vennep | UwOntruimer.nl",                                desc: "Woningontruimer in omgeving Nieuw-Vennep. Met meer dan 15 jaar ervaring kunnen wij iedere klus aan. Bel 085-303 58 94." },
  { slug: "nieuwegein",             name: "Nieuwegein",             title: "Woningontruiming Nieuwegein | UwOntruimer.nl",                                  desc: "Woningontruiming in Nieuwegein nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "noord-holland",          name: "Noord-Holland",          title: "Woningontruiming Noord-Holland | UwOntruimer.nl",                               desc: "Voor professionele woningontruiming in Noord-Holland belt u Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "noordwijk",              name: "Noordwijk",              title: "Woningontruiming Noordwijk | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Noordwijk. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "nootdorp",               name: "Nootdorp",               title: "Woningontruiming Nootdorp | UwOntruimer.nl",                                   desc: "Woningontruiming in Nootdorp? Uw Ontruimer regelt een respectvolle, snelle en volledige ontruiming. Bel 085-303 58 94." },
  { slug: "oegstgeest",             name: "Oegstgeest",             title: "Woningontruiming Oegstgeest | UwOntruimer.nl",                                  desc: "Professionele woningontruiming in Oegstgeest. Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
  { slug: "pijnacker",              name: "Pijnacker",              title: "Woningontruiming Pijnacker | UwOntruimer.nl",                                   desc: "Professionele woningontruiming in Pijnacker. Snel, discreet en volledig bezemschoon opgeleverd. Bel Uw Ontruimer op 085-303 58 94." },
  { slug: "ridderkerk",             name: "Ridderkerk",             title: "Woningontruiming Ridderkerk | Uw Ontruimer",                                   desc: "Woningontruiming in Ridderkerk nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Spoedontruiming." },
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
];

export function generateStaticParams() {
  return steden.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params;
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  const key = `woningontruiming-${stad}` as keyof typeof seoData;
  const seo = seoData[key];
  return {
    title: seo?.title || `Woningontruiming ${name} | Uw Ontruimer`,
    description: seo?.description || `Woningontruiming in ${name} nodig? Bel Uw Ontruimer op 085-303 58 94. ✓15+ jaar ervaring ✓Opleveringsgarantie ✓Snel ter plaatse`,
  };
}

export default async function StadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params;
  const city = steden.find((s) => s.slug === stad);
  const name = city?.name ?? stad;
  const paragraphs = stadContent[stad] ?? null;

  return (
    <>
      <Header />
      <main className="mt-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: '400px' }}>
          <Image src="/hero-truck.png" alt={`Woningontruiming ${name}`} fill className="w-full h-full object-cover" style={{ objectPosition: "center center" }} priority />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">Werkgebied</p>
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Woningontruiming {name}</h1>

            {paragraphs ? (
              paragraphs.map((p, i) => (
                <p key={i} className="text-slate-500 font-light leading-relaxed mb-6">{p}</p>
              ))
            ) : (
              <>
                <p className="text-slate-500 font-light leading-relaxed mb-6">UwOntruimer is actief in {name} en omstreken. Wij verzorgen de volledige ontruiming van woningen, appartementen en bedrijfspanden — snel, discreet en met een schriftelijke opleveringsgarantie.</p>
                <p className="text-slate-500 font-light leading-relaxed mb-6">Of u nu een woning wilt laten ontruimen na een overlijden, een verhuizing plant of een spoedontruiming nodig heeft: ons team staat voor u klaar in {name}. Wij hanteren vaste, transparante prijzen zonder verborgen kosten.</p>
              </>
            )}

            <p className="text-slate-500 font-light leading-relaxed">Neem contact op via <a href="tel:0853035894" className="text-blue-600 font-medium">085-303 58 94</a> of vraag direct een gratis offerte aan.</p>
          </div>
        </div>
        <TrustBar />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
