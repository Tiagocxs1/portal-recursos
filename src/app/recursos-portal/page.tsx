"use client";

import React, { useState, useEffect } from "react";

interface Recurso {
  id: string;
  title: string;
  country: string;
  type: string;
  program: string;
  url: string;
  priority: string;
  notes: string;
}

export default function RecursosPortal() {
  const [list, setList] = useState<Recurso[]>([]);
  const [filtered, setFiltered] = useState<Recurso[]>([]);
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    fetch("/data/recursos.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data as Recurso[]);
        setFiltered(data as Recurso[]);
      })
      .catch((err) => {
        console.error("Erro ao carregar recursos:", err);
        setList([]);
      });
  }, []);

  const columns = [
    { key: "title", label: "Programa" },
    { key: "country", label: "País" },
    { key: "type", label: "Tipo" },
    { key: "priority", label: "Prioridade" },
    { key: "actions", label: "Ação", align: "right" }
  ];

  const filteredData = filtered.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.notes.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = countryFilter ? item.country === countryFilter : true;
    const matchesType = typeFilter ? item.type === typeFilter : true;
    const matchesPriority = priorityFilter
      ? item.priority === priorityFilter
      : true;
    return matchesSearch && matchesCountry && matchesType && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Portal de Captação de Recursos – TS Digitais
      </h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar programa, país ou nota..."
          value={search}
          on={(e: any) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <select
          on={(e: any) => setCountryFilter(e.target.value)}
          className="ml-4 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-48"
        >
          <option value="">Todos os países</option>
          <option value="Brasil">Brasil</option>
          <option value="Portugal">Portugal</option>
          <option value="Espanha">Espanha</option>
          <option value="UE">UE</option>
        </select>
        <select
          on={(e: any) => setTypeFilter(e.target.value)}
          className="ml-4 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-48"
        >
          <option value="">Todos os tipos</option>
          <option value="Contrato">Contrato</option>
          <option value="Crédito">Crédito</option>
          <option value="Inovação">Inovação</option>
          <option value="Cultura">Cultura</option>
          <option value="Empreendedorismo">Empreendedorismo</option>
          <option value="Rede de Apoio">Rede de Apoio</option>
          <option value="Startup">Startup</option>
          <option value="Migração">Migração</option>
          <option value="Financiamento/Editais">Financiamento/Editais</option>
          <option value="Capacitação/Financiamento">Capacitação/Financiamento</option>
        </select>
        <select
          on={(e: any) => setPriorityFilter(e.target.value)}
          className="ml-4 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-48"
        >
          <option value="">Todas as prioridades</option>
          <option value="🟢 ALTÍSSIMA">🟢 ALTÍSSIMA</option>
          <option value="🟢">🟢</option>
          <option value="🟡">🟡</option>
          <option value="🔴">🔴</option>
        </select>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="border-b bg-gray-200">
              {columns.map((col) => (
                <th key={col.key} className="p-3 text-left">
                  {col.label}
                </th>
              ))}
              <th key="actions" className="p-3 text-right">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.country}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.priority}</td>
                <td className="p-3 text-right">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Ver detalhes
                  </a>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  Nenhum recurso encontrado com os filtros aplicados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <p>
          {" "}
          Este portal reúne programas de captação de recursos (crédito, contrato, incentivo,
          editais) relevantes para o perfil de serviços digitais da TS Digitais, tanto no
          Brasil quanto em Portugal, Espanha e Europa. Use os filtros acima para refinar a
          busca.
        </p>
      </div>
    </div>
  );
}