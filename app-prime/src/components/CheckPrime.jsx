import { usePrimeStore } from "../stores/usePrimeStore";
import Button from "../components/ui/Button";

function CheckPrime() {
  const { setNumber, checkIfPrime, number, isPrime } = usePrimeStore();

  return (
    <div className="flex flex-col gap-2 border shadow-md px-6 py-3 justify-center items-center rounded-lg">
      <p>Vérifiez si votre nombre est un nombre premmier:</p>
      <input
        className="w-50 border p-2 no-spinner appearance-none w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-0"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <Button classStyle={"button p-2"} event={() => checkIfPrime()}>
        Vérifier
      </Button>
      {number !== "" && isPrime === true && <div>C'est un nombre premier</div>}
      {number !== "" && isPrime === false && (
        <div>Ce n'est pas un nombre premier</div>
      )}
    </div>
  );
}

export default CheckPrime;
