import { useState } from 'react';
import AppShell from './AppShell';
import Switch from '../../atoms/Switch/Switch';
import TextLink from '../../atoms/TextLink/TextLink';
import Stack from '../../atoms/Stack/Stack';
import Card from '../../molecules/Card/Card';
import PageHeader from '../../molecules/PageHeader/PageHeader';
import Text from '../../atoms/Text/Text';

function ShellDemo() {
  const [compact, setCompact] = useState(false);

  return (
    <AppShell
      brand={
        <TextLink href="#" tone="default" weight="bold">
          Demo App
        </TextLink>
      }
      actions={
        <Switch
          label="Компактний режим"
          checked={compact}
          onChange={setCompact}
          offLabel="Звичайний"
          onLabel="Компактний"
        />
      }
    >
      <Stack gap="5">
        <PageHeader title="Головна" subtitle="Приклад сторінки всередині AppShell" />
        <Card title="Вміст">
          <Text>Будь-який вміст сторінки рендериться в основній частині каркаса.</Text>
        </Card>
      </Stack>
    </AppShell>
  );
}

export default {
  title: 'Organisms/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
};

export const Default = { render: () => <ShellDemo /> };
