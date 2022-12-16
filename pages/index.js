import { Title } from '../components/typography/headings';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';

const IndexPage = () => {
  return <main className="container home" role="main">
    <Title>Matt Gerton</Title>

    <ButtonGroup>
      <Button href="#">About Me</Button>
      <Button href="//resume.mattgerton.com">Résumé</Button>
    </ButtonGroup>
  </main>;
};

export default IndexPage;
