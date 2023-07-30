import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import UpdateProduct from "./updateProduct"

type Product = {
  id: number
  nama: string
  harga_beli: number
  harga_jual: number
  stok: number
}

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  })
  return res.json()
}

export default async function ProductList() {
  const products: Product[] = await getProducts()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.nama}</td>
              <td>{product.harga_beli}</td>
              <td>{product.harga_jual}</td>
              <td>{product.stok}</td>
              <td className="flex">
                <UpdateProduct {...product} />
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
