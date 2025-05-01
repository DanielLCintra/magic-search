"use client";

import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { useCards } from "../lib/mtgApi";
import Card from "../components/Card/Card";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const { data, isLoading, isError } = useCards(query);

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Erro ao buscar cartas.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {data && data.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
}
