import { ProductsService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductsService();

let result;
result = _productService.getById(2);

let p = new Product();
p.id = 2;
p.name = "IPhone 6";
p.price = 6000;
p.category = "Telefon";

_productService.saveProduct(p);
//_productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result)