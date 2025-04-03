
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

:root {
  --bg: #f6f5f3;
  --accent: #0f172a;
  --text: #1f2937;
  --muted: #6b7280;
  --card: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg);
  font-family: 'Inter', sans-serif;
  color: var(--text);
  padding: 2rem;
}

header, footer {
  text-align: center;
  padding-bottom: 2rem;
}

header h1 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
}

header p {
  font-size: 1.25rem;
  color: var(--muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background-color: var(--card);
  border-radius: 2rem;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.card h2 {
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.card p {
  color: var(--muted);
  font-size: 0.95rem;
}

.lang {
  display: inline-block;
  margin-top: 1rem;
  background-color: var(--accent);
  color: white;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-weight: 600;
}

footer {
  text-align: center;
  padding-top: 4rem;
  font-size: 0.9rem;
  color: var(--muted);
}
