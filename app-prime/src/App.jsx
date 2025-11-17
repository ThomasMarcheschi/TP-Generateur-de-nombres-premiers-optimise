function App() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen bg-gray-500 justify-start pt-40 items-center p-8">
      <h1>Générateur de nombre premier</h1>
      <p>
        Vous etes actuellement sur la page d'accueil de cet app, vous pouvez
        aller sur la page{" "}
        <a href="/prime" className="underline font-bold">
          prime.
        </a>
      </p>
      <p>
        Sur cette page vous pouvez voir un nombre premier générer aléatoirement
        et rafraichi toutes les secondes. Ainsi qu'un champ de saisie pour
        vérifier si un nombre est premier ou non.
      </p>
    </div>
  );
}

export default App;
