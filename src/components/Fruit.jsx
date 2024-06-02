/* eslint-disable react/prop-types */
import { BadgeInfo, ThumbsUp, MessageCircleMore, Send } from "lucide-react";

export default function Fruit({ listFruits }) {
  let IDRIndonesia = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  });

  const info = (fruit) => {
    alert(
      `Nama: ${fruit.name}\nHarga: ${IDRIndonesia.format(
        fruit.price
      )}\nJumlah: ${fruit.quantity} Buah Tersisa\nKategori: ${fruit.category}`
    );
  };
  const like = (event, fruit) => {
    alert(`Saya Menyukai Buah ${fruit.name}`);
  };
  const comment = (fruit) => {
    const comment = prompt(
      `Masukkan Komentar Anda Tentang ${fruit.name} : `,
      "Contoh Komentar"
    );
    alert(`Komentar Anda: ${comment}\n\nTerima Kasih Telah Memberikan Tanggapan`)
  };
  const send = (fruit) => {
    if (confirm(`Anda Yakin Ingin Mengirim ${fruit.name}?`)) {
      fruit.quantity--;
      alert(`Berhasil Terkirim, Sisa ${fruit.quantity} Buah`);
    }
  };
  return (
    <main className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-row xl:flex-wrap justify-center gap-8 xl:gap-10 py-4 bg-slate-500">
      {listFruits
        .slice()
        .sort((fruit1, fruit2) => {
          // Sort alphabetically by fruit name (case-insensitive)
          const name1 = fruit1.name.toLowerCase();
          const name2 = fruit2.name.toLowerCase();
          return name1.localeCompare(name2);
        })
        .map((fruit) => (
          <div
            key={fruit.id}
            className="flex flex-col xl:w-1/4 items-center bg-slate-300 p-4 rounded-xl drop-shadow-md"
          >
            <img
              src={fruit.photo}
              alt={fruit.name}
              className="h-52 w-52 transition-all hover:scale-110 hover:drop-shadow-md hover:animate-pulse"
            />
            <h1 className="text-2xl font-semibold text-center">{fruit.name}</h1>
            <p className="my-2 text-justify">{fruit.description}</p>
            <div className="flex gap-4 my-4">
              <button onClick={() => info(fruit)}>
                <BadgeInfo />
              </button>
              <button onClick={(e) => like(e, fruit)}>
                <ThumbsUp />
              </button>
              <button onClick={() => comment(fruit)}>
                <MessageCircleMore />
              </button>
              <button onClick={() => send(fruit)}>
                <Send />
              </button>
            </div>
          </div>
        ))}
    </main>
  );
}
