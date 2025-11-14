import { usePrimeAlea } from "../hooks/usePrimeAlea";

function Prime() {
  const { data, isLoading, isError, error } = usePrimeAlea();

  if (isLoading) return <div>Chargement…</div>;
  if (isError) return <div>Erreur: {String(error)}</div>;

  const number = data?.number;

  console.log(data);

  return <div>Nombre aléatoire : {number}</div>;
}

export default Prime;
