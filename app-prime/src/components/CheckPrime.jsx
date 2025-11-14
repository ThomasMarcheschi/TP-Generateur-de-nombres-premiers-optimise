import { usePrimeStore } from "../stores/usePrimeStore";
import Button from "../components/ui/Button";

function CheckPrime() {
  const { setNumber, checkIfPrime, number, isPrime } = usePrimeStore();

  return (
    <div className="flex flex-col gap-2 border shadow-md px-6 py-3">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <Button classStyle={"button"} event={() => checkIfPrime()}>
        Bouton
      </Button>
      {number !== "" && isPrime === true && <div>C'est un nombre premier</div>}
      {number !== "" && isPrime === false && (
        <div>C'est pas un nombre premier</div>
      )}
    </div>
  );
}

export default CheckPrime;
