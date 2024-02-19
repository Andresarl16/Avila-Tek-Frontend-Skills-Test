export default function SectionBadge({ text }: { text: string }) {
  return (
    <p className="py-1 px-3 text-sm text-utility-brand-700 bg-utility-brand-50 border-2 rounded-full border-utility-brand-200">
      {text}
    </p>
  );
}
