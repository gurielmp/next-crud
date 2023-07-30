"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

type Product = {
  id: number
  nama: string
  harga_beli: number
  harga_jual: number
  stok: number
}

export default function DeleteProduct(product: Product) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  async function handleDelete(productId: number) {

    await fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE'
      })
    router.refresh()
    setModal(false)
  }

  function handleChange(){
    setModal(!modal);
  }

  return (
    <div className="mx-1">

      <button className="btn btn-error btn-sm" onClick={handleChange}>Delete</button>
      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle"/>
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hapus {product.nama} ?</h3>
          
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>Close</button>
              <button type="button" onClick={() => handleDelete(product.id)} className="btn btn-primary">Delete</button>
            </div>
        </div>
      </div>
    </div>
  )
}
