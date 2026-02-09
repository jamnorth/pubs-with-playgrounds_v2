export default function Home() {
  const featured = [
    { name: "The Brook Hotel", note: "Playground • Family friendly" },
  ];

  const venues = [
    { name: "Osbourne Hotel", note: "Indoor kids area" },
    { name: "Kedron Park Hotel", note: "Outdoor playground" },
    { name: "Eatons Hill", note: "Massive family space" },
  ];

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Pubs with Playgrounds</h1>

      <h2>⭐ Featured</h2>
      {featured.map((v) => (
        <div key={v.name} style={{ marginBottom: 12 }}>
          <strong>{v.name}</strong>
          <div>{v.note}</div>
        </div>
      ))}

      <h2 style={{ marginTop: 24 }}>Nearby</h2>
      {venues.map((v) => (
        <div key={v.name} style={{ marginBottom: 12 }}>
          <strong>{v.name}</strong>
          <div>{v.note}</div>
        </div>
      ))}
    </main>
  );
}
