// testDiscountScreen.js
//-----------------------------------------------------
// 1) Si tu Node es >=18, fetch viene nativo.
//    Si tu Node es <18, instala node-fetch y descomenta:
// import fetch from 'node-fetch';

// 2) Importa las queries que usas en tu componente
import {
    SectionDiscount,
    discountCarnet,
    discountProducts,
  } from './queries.js'; // Ajustar la ruta según proyecto
  
  //-----------------------------------------------------
  // Configura tu endpoint y token de Strapi
  const STRAPI_GRAPHQL_ENDPOINT = 'https://02.uatconfia.com/graphql';
  const TOKEN = 'TOKEN_JWT'; // Endpoint requiere auth
  
  //-----------------------------------------------------
  // Función genérica para hacer peticiones GraphQL
  async function fetchGraphQL(query, variables = {}) {
    const response = await fetch(STRAPI_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`, // Elimina si no requieres JWT
      },
      body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();
    // Podrías manejar errores o data nula aquí
    return result;
  }
  
  //-----------------------------------------------------
  // Función principal que simula la lógica de DiscountScreen
  async function main() {
    try {
      // 1) Simular useSections({ slug: 'descuento', query: SectionDiscount })
      //    En tu componente, "sections" = data que viene de esa query.
      const sectionsResponse = await fetchGraphQL(SectionDiscount, { slug: 'descuento' });
      console.log('--- sectionsResponse ---');
      console.dir(sectionsResponse, { depth: null });
  
      // 2) Simular useDiscountCarnets()
      //    Asume que internamente hace una query a discountCarnet o similar
      const carnetsResponse = await fetchGraphQL(discountCarnet);
      console.log('--- carnetsResponse ---');
      console.dir(carnetsResponse, { depth: null });
  
      // Extraer la lista de carnets (simulando "carnetList")
      const carnets = carnetsResponse?.data?.discountCarnets?.data ?? [];
      console.log('Lista de carnets:', carnets.map((c) => ({
        id: c.id,
        name: c.attributes?.Name,
      })));
  
      // 3) Simular la lógica "activeIndex"
      //    En el componente, usas un state para esto: useState(0).
      //    Aquí lo fijamos en 0 para la prueba.
      const activeIndex = 0;
      const activeCarnet = carnets[activeIndex];
      if (!activeCarnet) {
        console.log(`No hay carnets en la posición ${activeIndex}`);
        return;
      }
  
      // 4) Simular la llamada <DiscountList id={carnetList[activeIndex]?.id} />
      //    Asume que "DiscountList" hace una query (por ejemplo "discountProducts")
      //    que requiere la variable $id
      const productsResponse = await fetchGraphQL(discountProducts, {
        id: activeCarnet.id,
      });
      console.log(`--- productsResponse para carnet ID = ${activeCarnet.id} ---`);
      console.dir(productsResponse, { depth: null });
  
      // 5) Procesar / mapear la data si quieres emular el "render" final
      //    (opcional, depende de tu lógica)
      // ...
    } catch (error) {
      console.error('Error al probar DiscountScreen:', error);
    }
  }
  
  // Ejecutar
  main();
  