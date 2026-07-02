export default function TakarosBlock() {
  return (
    <div className="mt-14 border-t border-slate-100 pt-10">
      <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
        Waardevolle objecten in de inboedel?
      </h2>
      <p className="text-slate-500 font-light leading-relaxed mb-4">
        Tijdens een ontruiming stuiten wij regelmatig op objecten die meer waard zijn dan gedacht — antiek, sieraden, kunst of design. Via Takaros, ons zusterplatform, kunt u die objecten gratis laten beoordelen door gespecialiseerde veilinghuizen. Vrijblijvend, zonder veilingkennis, en zonder verplichting.
      </p>
      <p className="text-slate-500 font-light leading-relaxed mb-6">
        Wij signaleren waardevolle objecten tijdens de ontruiming en informeren u hierover. U bepaalt zelf wat er daarna mee gebeurt.
      </p>
      <a
        href="https://takaros.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-sm hover:underline"
        style={{ color: "#2563eb" }}
      >
        Gratis waardeoordeel aanvragen via Takaros →
      </a>
    </div>
  );
}
