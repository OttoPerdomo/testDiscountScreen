// fetchGraphQL.js
// Función genérica para hacer POST a tu endpoint GraphQL

// Si usas Node 18+ no necesitas instalar 'node-fetch'.
// Para Node <18: npm install node-fetch y descomenta la siguiente línea:
// import fetch from 'node-fetch';

const STRAPI_GRAPHQL_ENDPOINT = 'https://02.uatconfia.com/graphql';
const TOKEN = 'TOKEN_JWT'; // Quita si no necesitas auth

export async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(STRAPI_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`, // quita si no usas JWT
    },
    body: JSON.stringify({ query, variables }),
  });
  const result = await response.json();
  return result;
}
