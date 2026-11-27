function Widget({ title, children }) {
  return (
    <section className="widget">
      <h2 className="widget__title">{title}</h2>
      {children}
    </section>
  );
}

export default Widget;
