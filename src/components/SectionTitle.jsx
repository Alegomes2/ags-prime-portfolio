function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-2">
        {title}
      </h2>

      <p className="text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;