import { buildEventDetailSections } from '../../utils/eventDetails';

function EarthquakeFullDetails({ event }) {
  const sections = buildEventDetailSections(event);

  return (
    <div className="full-details">
      <div className="full-details__grid">
        {sections.map((section) => (
          <section key={section.id} className="widget">
            <h2 className="widget__title">{section.title}</h2>
            <dl className="details__list">
              {section.items.map((item) => (
                <div key={item.label} className="details__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <a href={event.properties.url} target="_blank" rel="noreferrer">
        Сторінка події на сайті USGS ↗
      </a>
    </div>
  );
}

export default EarthquakeFullDetails;
