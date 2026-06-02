export const Join = () => {
  return (
    <section id="join">
      <h2>want to join? 🌸</h2>
      <p>
        You need a <code>.pet</code>{" "}
        domain with a personal website on it. Two steps:
      </p>
      <ol>
        <li>
          Add a webring nav somewhere on your site, it should link to the
          previous site, the ring homepage, and the next site:
          <pre class="snippet">{`<a href="https://petwebr.ing/prev/yourdomain.pet">← prev</a>
<a href="https://petwebr.ing">petwebr.ing</a>
<a href="https://petwebr.ing/next/yourdomain.pet">next →</a>`}</pre>
        </li>
        <li>
          Open a pull request on{" "}
          <a href="https://github.com/matildepark/petwebring">GitHub</a>{" "}
          adding your domain to <code>members.ts</code>.
        </li>
      </ol>
      <p class="note">
        This ring is for personal sites; not storefronts, aggregators, or bots.
      </p>
    </section>
  );
};
