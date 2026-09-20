interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
        {description ? <p className="mt-2 text-sm leading-5 text-neutral-500">{description}</p> : null}
      </div>
      <button type="button" aria-label={`Ver más: ${title}`} className="mt-1 shrink-0 rounded-full border border-neutral-200 px-3 py-2 text-lg leading-none">→</button>
    </div>
  );
};

export default SectionHeader;
