function App() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen bg-gray-500 justify-start pt-40 items-center p-8">
      <p>
        Vous êtes actuellement sur la page d'accueil de cette application, vous
        pouvez aller sur la page:
        <div className="flex gap-2 justify-center items-center">
          <a href="/generateprime" className="underline font-bold">
            Générateur,
          </a>
          <a href="/prime" className="underline font-bold">
            Vérificateur,
          </a>
          <p>Ou </p>
          <a href="/minigame" className="underline font-bold">
            MiniGame.
          </a>
        </div>
      </p>
      <p>
        Sur la page <strong>"Générateur"</strong> vous pouvez voir un nombre
        premier généré aléatoirement et rafraîchi toutes les secondes.
      </p>
      <p>
        Sur la page <strong>"Vérificateur"</strong> vous pourrez écrire un
        nombre vous même et vérifier si ce nombre est premier ou non.
      </p>
      <p>
        Sur la page <strong>"MiniGame"</strong>, un nombre sera choisi
        aléatoirement et vous devrez deviner si ce nombre est premier ou non.
      </p>
    </div>
  );
}

export default App;
