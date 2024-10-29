import { useProductsService } from "@/services/products";
import { useEffect } from "react";

export function CMSProductsPage() {
  const { state, actions } = useProductsService();

  useEffect(() => {
    actions.getProducts();
  }, []);

  return (
    <div>
      <h1 className="title">CMS</h1>
      Pagina Prodotti
      {state.pending && <div>loading...</div>}
      {state.error && <div>error!!!!</div>}
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
