function App() {
  return (
    <>
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
    </>
  );
}

export default App;
