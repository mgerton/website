import { Title } from '../components/typography/headings';

export default function IndexPage() {
  return <main className="container home" role="main">
    <Title>Matt Gerton</Title>

    <hr />

    <div className="button-links">
      <a href="#" className="btn">
        About Me
      </a>
      <a href="//resume.mattgerton.com" className="btn">
        Résumé
      </a>
    </div>
  </main>;
}
