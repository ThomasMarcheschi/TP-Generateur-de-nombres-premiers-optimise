import { usePrimeAlea } from "../hooks/usePrimeAlea";

function Prime() {
  const { data, isLoading, isError, error } = usePrimeAlea();

  if (isLoading) return <div>Chargement…</div>;
  if (isError) return <div>Erreur: {String(error)}</div>;

  const number = data?.number;

  return (
    <div className="flex flex-col gap-2 border shadow-md px-6 py-3">
      Nombre aléatoire : {number}
    </div>
  );
}

export default Prime;
