import { usePrimeAlea } from "../hooks/usePrimeAlea";

function Prime() {
  const { data, isLoading, isError, error, refetch } = usePrimeAlea();

  if (isLoading) return <div>Chargement…</div>;
  if (isError) return <div>Erreur: {String(error)}</div>;

  const number = data?.number; // accéder au nombre

  console.log(data);

  return (
    <div>
      Nombre aléatoire : {number}
      <button onClick={() => refetch()}>Générer un nouveau</button>
    </div>
  );
}

export default Prime;
