import { Join } from "./join.tsx";
import { Layout } from "./layout.tsx";
import { members } from "./members.ts";

export const Home = () => {
  return (
    <Layout title=".pet webring 🐾">
      <main>
        <header>
          <h1>.pet webring 🐾</h1>
        </header>

        <section id="about">
          <h2>what is this?</h2>
          <p>
            A webring is a set of websites linked in a loop. Each site links to
            the previous and next, so you can hop from one to another without a
            search engine deciding where you go.
          </p>
          <p>
            This one is for <code>.pet</code>{" "}
            domains: personal sites, no required topic. If you have a{" "}
            <code>.pet</code>{" "}
            domain and want to be part of it, you're welcome here.
          </p>
        </section>

        <section id="members">
          <h2>members</h2>
          <ul class="members">
            {members.map((domain) => (
              <li key={domain} class="member">
                <a href={`https://${domain}`} class="domain">
                  {domain}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Join />
      </main>

      <footer>
        <a href="https://github.com/rosymati/petwebring">source on github</a>
      </footer>
    </Layout>
  );
};
