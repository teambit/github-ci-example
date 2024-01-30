import { Button } from '@bit-examples/github-ci.button';
import { Card } from './card';

export const BasicCard = () => {
  return (
    <div style={{ margin: '2em' }}>
      <Card>This is a card</Card>
    </div>
  );
};

export const CardWithButton = () => {
  return (
    <div style={{ margin: '2em' }}>
      <Card footerButton={<Button>Card Button</Button>}>hello world!</Card>
    </div>
  );
};
