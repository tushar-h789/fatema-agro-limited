export default function MangoSectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle ? (
        <p className="text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
      ) : null}
      <div className="w-24 h-1 bg-[#ffb300] mx-auto rounded-full" />
    </div>
  );
}

