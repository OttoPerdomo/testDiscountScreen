// dataLogic.js
import { fetchGraphQL } from './fetchGraphQL.js';

// Importamos las queries que usas en tu componente:
import { discounts as SectionDiscount } from './Sections.js'; 
// O ajusta la ruta/nombre a donde tengas la query para "sections"
import { discountCarnet, discountProducts } from './queries.js'; 
// Ajusta a tus nombres reales

// Simulación de "useSections"
export async function getSections({ slug }) {
  // Llamamos la query con la variable { slug }
  const { data, errors } = await fetchGraphQL(SectionDiscount, { slug });
  if (errors) {
    console.error('Error al obtener sections:', errors);
    return null;
  }
  // Suponiendo que la respuesta sea algo como data.sections.data...
  const sections = data?.sections ?? null;
  return sections;
}

// Simulación de "useDiscountCarnets"
export async function getDiscountCarnets() {
  const { data, errors } = await fetchGraphQL(discountCarnet);
  if (errors) {
    console.error('Error al obtener carnets:', errors);
    return null;
  }
  // Suponiendo data.discountCarnets.data...
  const carnetsData = data?.discountCarnets?.data ?? [];
  // Transformamos a un array con { id, name, image? } si deseas
  const carnetList = carnetsData.map((c) => ({
    id: c.id,
    name: c.attributes?.Name,
    image: c.attributes?.CarnetImage?.data?.attributes?.url,
  }));
  return carnetList;
}

// Simulación de "useDiscountProducts"
export async function getDiscountProductsByCarnetId(id) {
  // Asumiendo que la query discountProducts recibe una variable $id
  const { data, errors } = await fetchGraphQL(discountProducts, { id });
  if (errors) {
    console.error('Error al obtener productos:', errors);
    return null;
  }
  // Ajusta la ruta según tu esquema. Ej: data.products.data...
  const productsData = data?.products?.data ?? [];
  // Mapeamos a un array más simple
  const products = productsData.map((p) => ({
    id: p.id,
    header: p.attributes?.Header,
    description: p.attributes?.Description,
    image: p.attributes?.Image?.data?.attributes?.url,
    // etc. 
  }));
  return products;
}
