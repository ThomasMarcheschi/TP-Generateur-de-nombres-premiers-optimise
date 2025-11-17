import { useGamePrimeAlea } from "../hooks/useGamePrimeAlea.jsx";
import Button from "./ui/Button.jsx";
import { useGamePrimeStore } from "../stores/useGamePrimeStore.js";

function MiniGame() {
  const { data, isLoading, isError, error, refetch, reset } =
    useGamePrimeAlea();
  const { checkIfPrime, isDisabled, wichButton, buttonPress } =
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
      <div className="flex flex-col gap-2 border shadow-md px-6 py-3 rounded-lg">
        Mini Jeu - Nombre aléatoire : {data.number}
        <Button
          classStyle={"button cursor-pointer"}
          event={() => handleClick()}
        >
          Nouveau Nombre
        </Button>
      </div>
      <p>Est-ce un nombre premier ?</p>
      <div className="flex flex-raw justify-between items-between w-[150px]">
        <Button
          classStyle={"button cursor-pointer p-2"}
          event={() => handletrue()}
        >
          Vrai
        </Button>
        <Button
          classStyle={"button cursor-pointer p-2"}
          event={() => handlefalse()}
        >
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
