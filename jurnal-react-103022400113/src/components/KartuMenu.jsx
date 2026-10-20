import LabelHarga from "./LabelHarga";

function KartuMenu(harga,nama,kategori) {
  return (

    <section>
        <h1>{nama}</h1>
        <LabelHarga nilai={harga}/>
        <p>{kategori}</p>
    </section>

  );
}

export default KartuMenu;