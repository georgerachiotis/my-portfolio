export const projects = [
  {
    id: 'decision-companion',
    title: 'Decision Companion',
    category: 'Decision-making web application',
    description: 'A browser-based tool for comparing options using weighted criteria. It turns trade-offs into clear rankings and printable reports, with decisions stored locally and no account required.',
    highlights: ['Weighted scoring & rankings', 'Local persistence & undo history', 'English / Greek interface'],
    tech: ['React', 'JavaScript', 'Vite', 'localStorage', 'Vitest'],
    image: null,
    imageAlt: '',
    // TODO: Add an actual application screenshot and descriptive imageAlt.
    live: 'https://georgerachiotis.github.io/decision-companion/',
    repositories: [
      { label: 'GitHub Repository', url: 'https://github.com/georgerachiotis/decision-companion' },
    ],
  },
  {
    id: 'the-unbroken',
    title: "The Unbroken: Gladiator's Rise",
    category: 'Java desktop game',
    description: 'An offline, single-player gladiator RPG built with Java and JavaFX. Train a fighter, manage equipment and face arena rivals through turn-based combat, with character progression and saved careers.',
    highlights: ['Object-oriented gameplay model', 'Turn-based combat & progression', 'Save / load career slots'],
    tech: ['Java', 'JavaFX', 'OOP', 'File I/O'],
    image: null,
    imageAlt: '',
    // TODO: Add an actual gameplay screenshot and descriptive imageAlt.
    live: null,
    demoNote: 'Desktop application — setup and run instructions are available in the repository.',
    repositories: [
      { label: 'GitHub Repository', url: 'https://github.com/georgerachiotis/the-unbroken-gladiators-rise' },
    ],
  },
];
