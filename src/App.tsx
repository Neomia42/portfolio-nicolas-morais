import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <header className="flex-1 flex-row w-full justify-items-end">
        <div>
          <h1 className="text-xl text-text">Header</h1>
        </div>
        <Header />
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:gap-16 sm:px-6 sm:py-14 lg:gap-20 lg:px-8 lg:py-20">
        <section aria-labelledby="presentation-title">
          <h2 id="presentation-title">Presentation</h2>
          <p className="mt-3">
            Conteneur temporaire pour la future section de presentation.
          </p>
        </section>

        <section aria-labelledby="skills-title">
          <h2 id="skills-title">Competences</h2>
          <p className="mt-3">
            Conteneur temporaire pour la future section des competences.
          </p>
        </section>

        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Projets</h2>
          <p className="mt-3">
            Conteneur temporaire pour la future section des projets.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
