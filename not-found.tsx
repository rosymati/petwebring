import { Layout } from "./layout.tsx";
import { Join } from "./join.tsx";

export const NotFound = ({ domain }: { domain: string }) => {
  return (
    <Layout title="not found — .pet webring 🐾">
      <main>
        <header>
          <h1>hmm, not in the ring 🐾</h1>
          <p class="tagline">
            <code>{domain}</code> isn't a member of the .pet webring
          </p>
        </header>

        <section>
          <h2>what happened?</h2>
          <p>
            If you clicked a webring nav link on{" "}
            <code>{domain}</code>, their link might be pointing to the wrong
            domain. It happens! You can let them know.
          </p>
          <p>
            See all current members on the <a href="/">ring homepage</a>.
          </p>
        </section>

        <Join />
      </main>

      <footer>
        <a href="/">ring.pet</a>
      </footer>
    </Layout>
  );
};
