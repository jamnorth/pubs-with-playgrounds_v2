import { supabase } from "@/lib/supabase";

type Venue = {
  id: number;
  name: string;
  suburb: string;
  featured: boolean;
};

export default async function Home() {
  const { data } = await supabase
    .from("venues")
    .select("*")
    .order("featured", { ascending: false })
    .order("name");

  return (
    <main style={{ padding: 20 }}>
      <h1>Pubs with Playgrounds</h1>

      {!data?.length && <p>No venues yet.</p>}

      {data?.map((venue) => (
        <div
          key={venue.id}
          style={{
            padding: 16,
            marginBottom: 12,
            border: "1px solid #ddd",
            borderRadius: 8,
            background: venue.featured ? "#fff8e1" : "white",
          }}
        >
          {venue.featured && <strong>⭐ Featured</strong>}
          <h3>{venue.name}</h3>
          <p>{venue.suburb}</p>
        </div>
      ))}
    </main>
  );
}
