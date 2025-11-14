import { useGamePrimeAlea } from "../hooks/useGamePrimeAlea.jsx";
import Button from "./ui/Button.jsx";
import { useGamePrimeStore } from "../stores/useGamePrimeStore.js";

function MiniGame() {
  const { data, isLoading, isError, error, refetch, reset } =
    useGamePrimeAlea();
  const { checkIfPrime, setNumber, isDisabled, wichButton, buttonPress } =
    useGamePrimeStore();

  //   setNumber(data?.number ?? 0);
  const handletrue = () => {
    checkIfPrime();
    wichButton("true");
  };
  const handlefalse = () => {
    checkIfPrime();
    wichButton("false");
  };
  const handleClick = () => {
    refetch();
    reset();
  };
  if (isLoading) return <div>Chargement…</div>;
  if (isError) return <div>Erreur: {String(error)}</div>;

  return (
    <>
      <div className="flex flex-col gap-2 border shadow-md px-6 py-3">
        Mini Jeu - Nombre aléatoire : {data.number}
        <Button classStyle={"button"} event={() => handleClick()}>
          Nouveau Nombre
        </Button>
      </div>
      <div>
        <p>Est-ce un nombre premier ?</p>
        <Button classStyle={"button"} event={() => handletrue()}>
          Vrai
        </Button>
        <Button classStyle={"button"} event={() => handlefalse()}>
          Faux
        </Button>
        {buttonPress === "true" && isDisabled && (
          <>
            {data && data.isPrime ? (
              <div>Bonne réponse ! C'est un nombre premier.</div>
            ) : (
              <div>Mauvaise réponse ! Ce n'est pas un nombre premier.</div>
            )}
          </>
        )}
        {buttonPress === "false" && isDisabled && (
          <>
            {data && !data.isPrime ? (
              <div>Bonne réponse ! Ce n'est pas un nombre premier.</div>
            ) : (
              <div>Mauvaise réponse ! C'est un nombre premier.</div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default MiniGame;
