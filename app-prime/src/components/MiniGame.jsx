import { useGamePrimeAlea } from "../hooks/useGamePrimeAlea.jsx";
import Button from "./ui/Button.jsx";
import { useGamePrimeStore } from "../stores/useGamePrimeStore.js";

function MiniGame() {
  const { data, isLoading, isError, error, refetch } = useGamePrimeAlea();
  const {
    checkIfPrime,
    isDisabled,
    wichButton,
    buttonPress,
    resetButtonPress,
    reset,
  } = useGamePrimeStore();

  const handletrue = () => {
    if (!isDisabled) {
      checkIfPrime();
      wichButton("true");
    }
  };

  const handlefalse = () => {
    if (!isDisabled) {
      checkIfPrime();
      wichButton("false");
    }
  };

  const handleClick = () => {
    refetch();
    reset();
    resetButtonPress();
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
      </div>
      {buttonPress === "true" && isDisabled && (
        <div>
          {data && data.isPrime ? (
            <p>Bonne réponse ! C'est un nombre premier.</p>
          ) : (
            <p>Mauvaise réponse ! Ce n'est pas un nombre premier.</p>
          )}
        </div>
      )}
      {buttonPress === "false" && isDisabled && (
        <div>
          {data && !data.isPrime ? (
            <p>Bonne réponse ! Ce n'est pas un nombre premier.</p>
          ) : (
            <p>Mauvaise réponse ! C'est un nombre premier.</p>
          )}
        </div>
      )}
    </>
  );
}

export default MiniGame;
