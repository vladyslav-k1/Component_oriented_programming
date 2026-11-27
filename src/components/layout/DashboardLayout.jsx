function DashboardLayout({ title, subtitle, children }) {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>{title}</h1>
        {subtitle && <p className="dashboard__subtitle">{subtitle}</p>}
      </header>
      <main className="dashboard__content">{children}</main>
    </div>
  );
}

export default DashboardLayout;
