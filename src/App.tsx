import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-text">Header</h1>
          <Header />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:gap-16 sm:px-6 sm:py-14 lg:gap-20 lg:px-8 lg:py-20">
        <section
          aria-labelledby="presentation-title"
          className="rounded-lg border border-border bg-surface p-6"
        >
          <h2
            id="presentation-title"
            className="text-2xl font-semibold text-text"
          >
            Presentation
          </h2>
          <p className="mt-3 text-text-muted">
            Conteneur temporaire pour la future section de presentation.
          </p>
        </section>

        <section
          aria-labelledby="skills-title"
          className="rounded-lg border border-border bg-surface p-6"
        >
          <h2 id="skills-title" className="text-2xl font-semibold text-text">
            Competences
          </h2>
          <p className="mt-3 text-text-muted">
            Conteneur temporaire pour la future section des competences.
          </p>
        </section>

        <section
          aria-labelledby="projects-title"
          className="rounded-lg border border-border bg-surface p-6"
        >
          <h2 id="projects-title" className="text-2xl font-semibold text-text">
            Projets
          </h2>
          <p className="mt-3 text-text-muted">
            Conteneur temporaire pour la future section des projets.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
