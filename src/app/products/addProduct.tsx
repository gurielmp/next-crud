"use client"
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid"

export default function AddProduct() {
  const [nama, setNama] = useState("")
  const [hargaBeli, sethargaBeli] = useState("")
  const [hargaJual, setHargaJual] = useState("")
  const [stock, setStock] = useState("")
  const [modal, setModal] = useState(false)

  const router = useRouter()

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nama: nama,
        harga_beli: hargaBeli,
        harga_jual: hargaJual,
        stok: stock,
      }),
    })
    setNama("")
    sethargaBeli("")
    setHargaJual("")
    setStock("")
    router.refresh()
    setModal(false)
  }

  function handleChange() {
    setModal(!modal)
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal form-control">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 100KB
                  </p>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-900">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Produk"
              />
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-900">Harga Beli</label>
              <input
                type="number"
                value={hargaBeli}
                onChange={(e) => sethargaBeli(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Harga Beli"
              />
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-900">Harga Jual</label>
              <input
                type="number"
                value={hargaJual}
                onChange={(e) => setHargaJual(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Harga Jual"
              />
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-900">Stock</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Stock"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
