import Header from "./components/Header/Header";
import profilePhoto from "./assets/img/photo_profil_NM.webp";
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
          className="rounded-lg border border-border p-6 sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(12rem,18rem)_minmax(0,1fr)] md:items-center lg:gap-10">
            <div
              aria-hidden="true"
              className="mx-auto flex aspect-square w-full max-w-56 items-center justify-center rounded-full border border-border bg-surface-muted p-3 sm:max-w-64 md:max-w-full"
            >
              <img
                src={profilePhoto}
                alt="Photo de Nicolas Morais"
                className="aspect-square w-full rounded-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-link">Developpeur web</p>
              <h2
                id="presentation-title"
                className="mt-3 text-2xl font-semibold text-text sm:text-3xl"
              >
                Nicolas Morais
              </h2>
              <p className="mt-4 text-base leading-7 text-text-muted">
                Je concois, developpe et optimise des interfaces web modernes.
              </p>
              <p className="mt-3 text-base leading-7 text-text-muted">
                J'aide a transformer des besoins concrets en experiences web
                claires, accessibles et faciles a maintenir.
              </p>
            </div>
          </div>
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
