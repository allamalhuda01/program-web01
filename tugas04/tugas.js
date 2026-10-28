const transaksi = [
  { id: 1, barang: "Buku", harga: 15000, qty: 2, kategori: "Alat Tulis" },
  { id: 2, barang: "Pensil", harga: 3000, qty: 5, kategori: "Alat Tulis" },
  { id: 3, barang: "Mouse", harga: 75000, qty: 1, kategori: "Elektronik" },
  { id: 4, barang: "Keyboard", harga: 120000, qty: 1, kategori: "Elektronik" },
  { id: 5, barang: "Pulpen", harga: 5000, qty: 3, kategori: "Alat Tulis" },
  { id: 6, barang: "Headset", harga: 95000, qty: 2, kategori: "Elektronik" }
];

const idPilihan = 6;

const transaksiTerpilih = transaksi.filter(
  ({ id }) => id === idPilihan
);


const dataSubtotal = transaksiTerpilih.map(
  ({ id, barang, harga, qty, kategori }) => ({
    id,
    barang,
    harga,
    qty,
    kategori,
    subtotal: harga * qty
  })
);

const totalBelanja = dataSubtotal.reduce(
  (total, { subtotal }) => total + subtotal,
  0
);


console.log("=== DATA TRANSAKSI TERPILIH ===");
console.log(dataSubtotal);

console.log("\n=== TOTAL KESELURUHAN ===");
console.log("id:", idPilihan);
console.log("Total belanja: Rp" + totalBelanja.toLocaleString("id-ID"));
