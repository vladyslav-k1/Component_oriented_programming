import { Card, DescriptionList, Grid, Stack, TextLink } from '../../design-system';
import { buildEventDetailSections } from '../../utils/eventDetails';

function EarthquakeFullDetails({ event }) {
  const sections = buildEventDetailSections(event);

  return (
    <Stack gap="4">
      <Grid minItemWidth="lg" gap="4" align="start">
        {sections.map((section) => (
          <Card key={section.id} title={section.title}>
            <DescriptionList items={section.items} />
          </Card>
        ))}
      </Grid>
      <Stack align="start">
        <TextLink href={event.properties.url} target="_blank" rel="noreferrer">
          Сторінка події на сайті USGS ↗
        </TextLink>
      </Stack>
    </Stack>
  );
}

export default EarthquakeFullDetails;
