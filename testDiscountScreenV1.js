// testDiscountScreen.js
import {
    getSections,
    getDiscountCarnets,
    getDiscountProductsByCarnetId,
  } from './dataLogic.js';
  
  // (Opcional) Si tienes una función mapNewContentToData:
  import { mapNewContentToData } from './mapper.js'; 
  // Ajusta la ruta a donde tengas tu "mapNewContentToData"
  
  async function main() {
    try {
      // 1) "sections"
      const sections = await getSections({ slug: 'descuento' });
      if (!sections) {
        console.log('No hay sections, simulamos <Loading/>');
        return;
      }
      console.log('Secciones:', JSON.stringify(sections, null, 2));
  
      // 2) "carnetList"
      const carnetList = await getDiscountCarnets();
      if (!carnetList) {
        console.log('No hay carnets, simulamos <Loading/>');
        return;
      }
      console.log('Lista de carnets:', carnetList);
  
      // 3) Simular "activeIndex = 0"
      const activeIndex = 0;
      const activeCarnet = carnetList[activeIndex];
      if (!activeCarnet) {
        console.log('No existe carnets[0]. Fin.');
        return;
      }
  
      // 4) "DiscountList" → getDiscountProductsByCarnetId
      const products = await getDiscountProductsByCarnetId(activeCarnet.id);
      console.log(`Productos del carnet ${activeCarnet.id}:`, products);
  
      // 5) "DiscountHeader" → mapNewContentToData(sections.data[0].attributes.content) (por ejemplo)
      // Suponiendo que "sections" sea algo como { data: [ { attributes: { content: [...] } } ] }
      const contentArray = sections?.data?.[0]?.attributes?.content ?? [];
      const mappedContent = mapNewContentToData
        ? mapNewContentToData(contentArray)
        : contentArray;
  
      console.log('Contenido mapeado (DiscountHeader):', mappedContent);
  
      // Simulamos que la pantalla final mostraría:
      console.log(`
        ---------------
        Simulación DiscountScreen
        ---------------
        Header: ${JSON.stringify(mappedContent, null, 2)}
        Carnets: ${JSON.stringify(carnetList, null, 2)}
        Products (activeIndex=0 => id=${activeCarnet.id}):
        ${JSON.stringify(products, null, 2)}
      `);
    } catch (error) {
      console.error('Error en main():', error);
    }
  }
  
  main();
  