import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const MatchpartPage = () => {
  return (
    <>
      <MetaTags title="Matchpart" description="Matchpart page" />

      <h1>MatchpartPage</h1>
      <p>
        Find me in <code>./web/src/pages/MatchpartPage/MatchpartPage.jsx</code>
      </p>
      <p>
        My default route is named <code>matchpart</code>, link to me with `
        <Link to={routes.matchpart()}>Matchpart</Link>`
      </p>
    </>
  );
};

export default MatchpartPage;
