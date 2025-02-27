// testDiscountScreen.js
import {
    getSections,
    getDiscountCarnets,
    getDiscountProductsByCarnetId,
  } from './dataLogic.js';
  
  // Elimina o comenta esta línea si no tienes el archivo:
  // import { mapNewContentToData } from './mapper.js';
  
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
  
      // 5) (Opcional) Si no tienes mapNewContentToData, omite su uso
      // const contentArray = sections?.data?.[0]?.attributes?.content ?? [];
      // console.log('Contenido de la sección (header):', contentArray);
  
      console.log(`
        ---------------
        Simulación DiscountScreen
        ---------------
        Carnets: ${JSON.stringify(carnetList, null, 2)}
        Products (activeIndex=0 => id=${activeCarnet.id}):
        ${JSON.stringify(products, null, 2)}
      `);
    } catch (error) {
      console.error('Error en main():', error);
    }
  }
  
  main();
  