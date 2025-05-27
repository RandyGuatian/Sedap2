export default function HelloWorld() {
  const propsUserCard = {
    nama: "G.O.A.T Messi",
    nim: "99999",
    tanggal: "2025-01-01",
  };

  return (
    <div>
      <h1>Hello World</h1>
      <p>Selamat Belajar ReactJs</p>
      <GreetingBinjai />
      <QuoteText />
      <UserCard {...propsUserCard} />
      <img src="img/gacor.jpeg" alt="logo" />
      <UserCard
        nama="Adib"
        nim="2355301102"
        tanggal={new Date().toLocaleDateString()}
      />
    </div>
  );
}

function GreetingBinjai() {
  return <small>Salam Dari BINJAI</small>;
}

function QuoteText() {
  const text = "Mulutmu Harimaumu";
  const text2 = "Aku ingin jadi macan";
  return (
    <div>
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
}
