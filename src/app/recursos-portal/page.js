"use client";

import React, { useState, useEffect } from "react";

function Recurso {
  id: string;
  title: string;
  country: string;
  type: string;
  program: string;
  url: string;
  priority: string;
  notes: string;
}

const recursos = [
  {
    id: "1",
    title: "Contrata+Brasil",
    country: "Brasil",
    type: "Contrato",
    program: "Contrata+Brasil – Serviços e Informações do Brasil",
    url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/contrata-brasil",
    priority: "🟢 ALTÍSSIMA",
    notes: "Oferecer serviços públicos para prefeituras/estados como MEI."
  },
  {
    id: "2",
    title: "PNCP",
    country: "Brasil",
    type: "Contrato",
    program: "Portal Nacional de Contratações Públicas",
    url: "https://www.gov.br/pncp/pt-br",
    priority: "🟢",
    notes: "Acompanhe licitações; registre como fornecedor de serviços digitais."
  },
  {
    id: "3",
    title: "ProCred 360",
    country: "Brasil",
    type: "Crédito",
    program: "ProCred 360 – Crédito para MEI/MPE",
    url: "https://www.gov.br/memp/pt-br/programa-acredita/procred360",
    priority: "🟢",
    notes: "Crédito permanente para capital de giro, equipamentos; faturamento até R$ 360 mil."
  },
  {
    id: "4",
    title: "CRED+",
    country: "Brasil",
    type: "Crédito",
    program: "CRED+ – Crédito MEI/MPE",
    url: "https://www.gov.br/empresas-e-negocios/pt-br/credito/credmei-credmpe",
    priority: "🟢",
    notes: "Encaminha solicitações para instituições financeiras; expansão, equipamentos, veículo."
  },
  {
    id: "5",
    title: "BNDES Crédito Digital",
    country: "Brasil",
    type: "Crédito",
    program: "BNDES Crédito Digital",
    url: "https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/bndes-credito-digital",
    priority: "🟢",
    notes: "Destinado a MEI; linhas de crédito para expansão, aquisição de ativos."
  },
  {
    id: "6",
    title: "Finep – Oportunidades",
    country: "Brasil",
    type: "Inovação",
    program: "Finep – Oportunidades de Inovação",
    url: "https://www.finep.gov.br/oportunidades",
    priority: "🟡",
    notes: "Financiamento não reembolsável para projetos de inovação tecnológica (IA, SaaS, agentes)."
  },
  {
    id: "7",
    title: "Mapa da Cultura",
    country: "Brasil",
    type: "Cultura",
    program: "Mapa da Cultura – Editais e Oportunidades Culturais",
    url: "https://mapas.cultura.gov.br/",
    priority: "🟡",
    notes: "Agrega editais de fomento à cultura; pode ser relevante se TS Digitais tiver projetos culturais."
  },
  {
    id: "8",
    title: "SALIC / Lei Rouanet",
    country: "Brasil",
    type: "Cultura",
    program: "SALIC / Lei de Incentivo à Cultura (Rouanet)",
    url: "https://salic.cultura.gov.br/",
    priority: "🟡",
    notes: "Incentivo fiscal; recursos captados via Lei Rouanet não são dinheiro direto, mas tributário."
  },
  {
    id: "9",
    title: "IEFP",
    country: "Portugal",
    type: "Emprego/Empreendedorismo",
    program: "IEFP – Instituto do Emprego e Formação Profissional",
    url: "https://www.iefp.pt/",
    priority: "🟢",
    notes: "Programas de apoio à criação de próprio emprego, microcrédito, linhas de crédito."
  },
  {
    id: "10",
    title: "IEFP Empreendedorismo",
    country: "Portugal",
    type: "Empreendedorismo",
    program: "IEFP Empreendedorismo",
    url: "https://www.iefp.pt/empreendedorismo",
    priority: "🟢",
    notes: "Programa específico de apoio à criação de empresa e microcrédito."
  },
  {
    id: "11",
    title: "Empreende XXI",
    country: "Portugal",
    type: "Rede de Apoio",
    program: "Empreende XXI – Rede de Entidades de Acompanhamento",
    url: "https://www.iefp.pt/empreende-xxi",
    priority: "🟢",
    notes: "Rede de entidades com listas atualizadas 2026; apoio técnico e microcrédito."
  },
  {
    id: "12",
    title: "StartUP Visa",
    country: "Portugal",
    type: "Startup",
    program: "StartUP Visa – IAPMEI",
    url: "https://www.iapmei.pt/pt/paginas/startup-visa-pt/",
    priority: "🟡",
    notes: "Programa para empreendedores estrangeiros com projetos inovadores; possibilidade de residência."
  },
  {
    id: "13",
    title: "Plataforma PYME",
    country: "Espanha",
    type: "Ayudas Públicas",
    program: "Plataforma PYME – Buscador de ayudas",
    url: "https://plataformapyme.es/",
    priority: "🟢",
    notes: "Centraliza ayudas públicas nacionais, autonómicas, provinciais e europeias; filtro por região e tipo de empresa."
  },
  {
    id: "14",
    title: "Viso por cuenta propia",
    country: "Espanha",
    type: "Migração",
    program: "Autorização de residência para trabalhador independente/empreendedor",
    url: "https://www.inclusion.gob.es/es/web/migraciones/cuenta-propia-/-emprendedores",
    priority: "🟢",
    notes: "Visto para estrangeiros não residentes que querem residir temporariamente e trabalhar por conta própria."
  },
  {
    id: "15",
    title: "EU Funding & Tenders",
    country: "UE",
    type: "Financiamento/Editais",
    program: "EU Funding & Tenders Portal – Comissão Europeia",
    url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
    priority: "🟢",
    notes: "Portal central da UE: grants, calls for proposals, contracts. Requer entidade ou consórcio."
  },
  {
    id: "16",
    title: "Erasmus for Young Entrepreneurs",
    country: "UE",
    type: "Capacitação/Financiamento",
    program: "Erasmus for Young Entrepreneurs",
    url: "https://www.erasmus-entrepreneurs.eu/",
    priority: "🟢",
    notes: "Permite ficar 1‑6 meses com empreendedor experiente em outro país UE; apoio financeiro para viagem/manutenção. Pode ser feito depois de legalmente estabelecido em PT/ES."
  }
];

export default function RecursosPortal() {
  const [list, setList] = React.useState(recursos);
  const [filtered, setFiltered] = React.useState(recursos);
  const [search, setSearch] = React.useState("");
  const [countryFilter, setCountryFilter] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("");
  const [priorityFilter, setPriorityFilter] = React.useState("");

  React.useEffect(() => {
    // No external fetch needed; data is embedded.
    setFiltered(recursos);
  }, []);

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

  const columns = [
    { key: "title", label: "Programa" },
    { key: "country", label: "País" },
    { key: "type", label: "Tipo" },
    { key: "priority", label: "Prioridade" },
    { key: "actions", label: "Ação", align: "right" }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f5", padding: "6rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Portal de Captação de Recursos – TS Digitais
      </h1>

      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Buscar programa, país ou nota..."
          value={search}
          on={(e) => setSearch(e.target.value)}
          style={{
            border: "1px solid #ccc", borderRadius: "4px", padding: "0.5rem", fontSize: "1rem"
          }}
        />
        <select
          on={(e) => setCountryFilter(e.target.value)}
          style={{
            marginLeft: "1rem", border: "1px solid #ccc", borderRadius: "4px", padding: "0.5rem", fontSize: "1rem", width: "150px"
          }}
        >
          <option value="">Todos os países</option>
          <option value="Brasil">Brasil</option>
          <option value="Portugal">Portugal</option>
          <option value="Espanha">Espanha</option>
          <option value="UE">UE</option>
        </select>
        <select
          on={(e) => setTypeFilter(e.target.value)}
          style={{
            marginLeft: "1rem", border: "1px solid #ccc", borderRadius: "4px", padding: "0.5rem", fontSize: "1rem", width: "150px"
          }}
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
          on={(e) => setPriorityFilter(e.target.value)}
          style={{
            marginLeft: "1rem", border: "1px solid #ccc", borderRadius: "4px", padding: "0.5rem", fontSize: "1rem", width: "150px"
          }}
        >
          <option value="">Todas as prioridades</option>
          <option value="🟢 ALTÍSSIMA">🟢 ALTÍSSIMA</option>
          <option value="🟢">🟢</option>
          <option value="🟡">🟡</option>
          <option value="🔴">🔴</option>
        </select>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ccc" }}>
            {columns.map((col) => (
              <th key={col.key} style={{ padding: "0.5rem", textAlign: "left" }}>
                {col.label}
              </th>
            ))}
            <th key="actions" style={{ padding: "0.5rem", textAlign: "right" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            const tdStyle = { padding: "0.5rem", borderBottom: "1px solid #e0e0e0" };
            const aStyle = { color: "#0066cc", textDecoration: "none" };
            return (
              <tr key={item.id} style={tdStyle}>
                <td style={tdStyle}>{item.title}</td>
                <td style={tdStyle}>{item.country}</td>
                <td style={tdStyle}>{item.type}</td>
                <td style={tdStyle}>{item.priority}</td>
                <td style={{ padding: "0.5rem", textAlign: "right" }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={aStyle}>
                    Ver detalhes
                  </a>
                </td>
              </tr>
            );
          })}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#666" }}>
                Nenhum recurso encontrado com os filtros aplicados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}