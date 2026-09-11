"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Publieke wervingspagina op de marketingsite. Het formulier gaat via
// /api/werving (server-side proxy) naar het dashboard, zodat aanmeldingen op
// één plek binnenkomen. Meertalig per wervingsonderzoek 10 sep 2026; bewust
// GEEN loonbedragen — voorwaarden verschillen per werknemer.

type TaalCode = "nl" | "es" | "en" | "pl" | "uk" | "ar";

const TALEN: { code: TaalCode; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pl", label: "PL" },
  { code: "uk", label: "UK" },
  { code: "ar", label: "ع" },
];

const TEKSTEN: Record<
  TaalCode,
  {
    titel: string;
    pitch: string;
    legaal: string;
    naam: string;
    telefoon: string;
    bericht: string;
    verstuur: string;
    bedankt: string;
    fout: string;
    rtl?: boolean;
  }
> = {
  nl: {
    titel: "Kom bij ons werken",
    pitch:
      "Wij zoeken harde werkers voor woningontruimingen in Amsterdam en de Randstad. Fysiek werk, tot 5 dagen per week — parttime kan ook. Goed loon, stipt uitbetaald. Breng je een maat aan, dan krijg je een bonus. Laat je naam en nummer achter — wij bellen jou.",
    legaal: "Je moet legaal in Nederland mogen werken (EU-paspoort, verblijfsdocument met 'arbeid vrij toegestaan', Oekraïens beschermingsdocument of Nederlands document).",
    naam: "Naam",
    telefoon: "Telefoon",
    bericht: "Bericht (niet verplicht)",
    verstuur: "Versturen",
    bedankt: "Bedankt! We bellen je snel.",
    fout: "Versturen mislukt — probeer het nog eens.",
  },
  es: {
    titel: "Trabaja con nosotros",
    pitch:
      "Buscamos buenos trabajadores para vaciado de viviendas en Ámsterdam y el Randstad. Trabajo físico, hasta 5 días por semana — también parcial. Buen sueldo, pagado puntualmente. Si traes a un amigo, recibes un bono. Deja tu nombre y número — te llamamos nosotros.",
    legaal: "Debes poder trabajar legalmente en los Países Bajos (pasaporte de la UE, permiso de residencia con 'trabajo libremente permitido', documento de protección ucraniano o documento neerlandés).",
    naam: "Nombre",
    telefoon: "Teléfono",
    bericht: "Mensaje (opcional)",
    verstuur: "Enviar",
    bedankt: "¡Gracias! Te llamamos pronto.",
    fout: "Error — inténtalo de nuevo.",
  },
  en: {
    titel: "Come work with us",
    pitch:
      "We are looking for hard workers for house clearances in Amsterdam and the Randstad. Physical hands-on work, up to 5 days a week — part-time is fine too. Good pay, paid on time. Bring a friend and get a bonus. Leave your name and number — we will call you.",
    legaal: "You must be legally allowed to work in the Netherlands (EU passport, residence permit 'work freely allowed', Ukrainian protection document, or Dutch ID).",
    naam: "Name",
    telefoon: "Phone",
    bericht: "Message (optional)",
    verstuur: "Send",
    bedankt: "Thank you! We will call you soon.",
    fout: "Sending failed — please try again.",
  },
  pl: {
    titel: "Pracuj z nami",
    pitch:
      "Szukamy pracowników do opróżniania mieszkań w Amsterdamie i Randstad. Praca fizyczna, do 5 dni w tygodniu — może być też na część etatu. Dobra płaca, wypłacana na czas. Poleć znajomego i odbierz premię. Zostaw imię i numer — my zadzwonimy.",
    legaal: "Musisz mieć prawo do legalnej pracy w Holandii (paszport UE, karta pobytu 'praca dozwolona bez zezwolenia', ukraiński dokument ochrony lub dokument holenderski).",
    naam: "Imię",
    telefoon: "Telefon",
    bericht: "Wiadomość (opcjonalnie)",
    verstuur: "Wyślij",
    bedankt: "Dziękujemy! Wkrótce zadzwonimy.",
    fout: "Błąd wysyłania — spróbuj ponownie.",
  },
  uk: {
    titel: "Працюйте з нами",
    pitch:
      "Шукаємо працівників для звільнення квартир в Амстердамі та Рандстаді. Фізична робота, до 5 днів на тиждень — можна й частково. Гарна оплата, вчасно. Приведи друга — отримай бонус. Залиш ім'я та номер — ми зателефонуємо.",
    legaal: "Ви повинні мати право легально працювати в Нідерландах (документ тимчасового захисту для українців, паспорт ЄС або нідерландський документ).",
    naam: "Ім'я",
    telefoon: "Телефон",
    bericht: "Повідомлення (необов'язково)",
    verstuur: "Надіслати",
    bedankt: "Дякуємо! Ми скоро зателефонуємо.",
    fout: "Помилка — спробуйте ще раз.",
  },
  ar: {
    titel: "اعمل معنا",
    pitch:
      "نبحث عن عمال مجتهدين لإخلاء المنازل في أمستردام ومنطقة راندستاد. عمل بدني، حتى 5 أيام في الأسبوع — الدوام الجزئي ممكن أيضاً. أجر جيد يُدفع في موعده. أحضر صديقاً واحصل على مكافأة. اترك اسمك ورقمك — وسنتصل بك.",
    legaal: "يجب أن يكون لديك الحق في العمل بشكل قانوني في هولندا (جواز سفر من الاتحاد الأوروبي، تصريح إقامة 'العمل مسموح بحرية'، وثيقة حماية أوكرانية، أو وثيقة هولندية).",
    naam: "الاسم",
    telefoon: "الهاتف",
    bericht: "رسالة (اختياري)",
    verstuur: "إرسال",
    bedankt: "شكراً! سنتصل بك قريباً.",
    fout: "فشل الإرسال — حاول مرة أخرى.",
    rtl: true,
  },
};

export default function WerkenBijPage() {
  const [taal, setTaal] = useState<TaalCode>("nl");
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [notitie, setNotitie] = useState("");
  const [website, setWebsite] = useState("");
  const [bezig, setBezig] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [fout, setFout] = useState(false);

  const t = TEKSTEN[taal];
  const richting = t.rtl ? "rtl" : "ltr";

  async function verstuur(e: React.FormEvent) {
    e.preventDefault();
    if (!naam.trim() || !telefoon.trim() || bezig) return;
    setBezig(true);
    setFout(false);
    try {
      const res = await fetch("/api/werving/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Taal meesturen in de notitie zodat kantoor weet in welke taal te bellen
        body: JSON.stringify({
          naam,
          telefoon,
          website,
          notitie: taal === "nl" ? notitie : `[taal: ${taal.toUpperCase()}] ${notitie}`.trim(),
        }),
      });
      if (res.ok) setKlaar(true);
      else setFout(true);
    } catch {
      setFout(true);
    } finally {
      setBezig(false);
    }
  }

  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="flex flex-col items-center bg-slate-50 px-4 py-16">
          <div className="w-full max-w-md">
            <div className="mb-6 flex justify-center gap-1.5">
              {TALEN.map((optie) => (
                <button
                  key={optie.code}
                  type="button"
                  onClick={() => setTaal(optie.code)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    taal === optie.code ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {optie.label}
                </button>
              ))}
            </div>

            <h1 className="mb-6 text-center text-2xl font-semibold tracking-tight text-slate-900" dir={richting}>
              {t.titel}
            </h1>

            {klaar ? (
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm" dir={richting}>
                <p className="mb-2 text-4xl">✅</p>
                <p className="font-semibold text-slate-900">{t.bedankt}</p>
              </div>
            ) : (
              <form onSubmit={verstuur} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm" dir={richting}>
                <p className="mb-3 text-sm text-slate-600 font-light leading-relaxed">{t.pitch}</p>
                <p className="mb-6 text-xs text-slate-400">{t.legaal}</p>

                <label className="mb-1 block text-xs font-semibold text-slate-600">{t.naam}</label>
                <input
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  required
                  maxLength={100}
                  className="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <label className="mb-1 block text-xs font-semibold text-slate-600">{t.telefoon}</label>
                <input
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  required
                  maxLength={30}
                  type="tel"
                  dir="ltr"
                  className="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="06..."
                />

                <label className="mb-1 block text-xs font-semibold text-slate-600">{t.bericht}</label>
                <textarea
                  value={notitie}
                  onChange={(e) => setNotitie(e.target.value)}
                  maxLength={500}
                  rows={2}
                  className="mb-5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                {/* Honeypot tegen bots — onzichtbaar voor mensen */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {fout && <p className="mb-3 text-sm text-red-600">{t.fout}</p>}

                <button
                  type="submit"
                  disabled={bezig}
                  className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
                >
                  {bezig ? "..." : t.verstuur}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
