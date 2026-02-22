import { useEffect, useState } from "react"
import Logo from "./assets/Logo.svg"
import NavButton from "./assets/nav-boutton.svg"
import Cancel from "./assets/cancel.svg"
import Section1Image from "./assets/section1-img-bureau.svg"
import Section2Image from "./assets/section2-img.jpg"
import Box1 from "./assets/box1.png"
import Box2 from "./assets/box2.png"
import Box3 from "./assets/box3.png"
import Box4 from "./assets/box4.png"
import Section5Img from "./assets/images.png"
import DayMealSelector from "../components/choice"







//RAMADAN26
function App() {
  const [navbarHidden,setNavbarHidden] = useState(true)
  


  function abonnement(){
    alert("La liste des abonnement est pleine. Merci de revenir plutard !")
  }
function Toggle() {
  const [isChecked, setIsChecked] = useState(() => {
    const storedMode = localStorage.getItem("mode")
    return storedMode === "dark"
  })

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isChecked])

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setIsChecked(checked)
    localStorage.setItem("mode", checked ? "dark" : "light")
  }

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleToggle}
      className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400"
    />
  )
}


  useEffect(()=>{
    console.log("navbarHidden: ",navbarHidden)
  },[navbarHidden])

  useEffect(() => {
  if (!navbarHidden) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [navbarHidden])

  return (
    <div className="min-h-screen bg-(--color-all) text-(--color-default) ">
      <header className="h-20 w-full bg-(--color-header) p-2 pr-5 flex justify-between items-center sticky top-0 z-30" >
        <img src={Logo} alt="NutriFlow logo" className="h-[80%] m-0 p-0" />
        <img src={NavButton} alt="NutriFlow logo" className="h-[40%] m-0 p-0" onClick={()=>{setNavbarHidden(!navbarHidden)}}/>
      </header>

      <nav className={"transition-[width] fixed z-50 left-0 top-0 backdrop-blur-sm h-screen " + (navbarHidden ? "w-0 overflow-hidden":"w-full ")}>
        <div className="h-full w-[90%] lg:w-[30%] md:w-[40%] bg-(--color-header)">
          <div className="p-2 w-full h-[20%] pr-5 flex justify-between items-center top-0" >
            <img src={Logo} alt="NutriFlow logo" className="h-[40%]" />
            <img src={Cancel} alt="NutriFlow logo" className="h-[25%] lg:h-[30%]" onClick={()=>{setNavbarHidden(!navbarHidden)}}/>
          </div>
          <div className="text-black font-secondary">
            <ul onClick={()=>(setNavbarHidden(!navbarHidden))} className="p-15 list-disc flex flex-col gap-7 ">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#abonnement">Abonnement</a></li>
              <li><a href="#contacte">Nous contacter</a></li>
            </ul>
          </div>
          <div className="flex gap-2 justify-center items-center text-black font-secondary">
            <span>Mode sombre</span>
            <Toggle/>
          </div>
        </div>
      </nav>

      <main className="w-full overflow-x-hidden">

        <section className="w-full p-5 scroll-mt-24" id="accueil">
          <h1 className="font-primary text-2xl lg:text-3xl md:text-3xl">La nutrition intelligente pour les gens occupés</h1>
          <div className="mt-2 h-50 bg-cover bg-center rounded-xl flex items-end p-5" style={{backgroundImage: `url(${Section1Image})`}}>
            <p className="w-full lg:w-4/5 h-auto object-cover rounded-xl font-bold font-primary text-(--color-secondar) text-2xl lg:text-3xl md:text-3xl shadow-lg shadow-black backdrop-blur-sm p-1">Des repas équilibrés, calculés et prêts chaque jour.Tu travailles. On gère ton alimentation.</p>
          </div>
          <div className="flex justify-around items-center mt-4">
            <button className="bg-(--color-secondar) btn p-1 rounded-lg"><a href="#menu">Voir le menu de la semaine</a></button>
            <button className="bg-(--color-thirdy) btn p-1 rounded-lg" onClick={abonnement}>S’abonner maintenant</button>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row justify-around items-center w-full px-10 m-2">
          <div className="font-primary">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl mb-1">Tu n'as pas le temps.</h2>
            <p className="text-lg">Mais ton corps, lui, encaisse.</p>
            <ul className="list-disc pl-6 text-lg">
              <li>Trop fatigué pour cuisiner.</li>
              <li>Trop pressé pour lire les étiquettes.</li>
              <li>Trop occupé pour calculer tes calories.</li>
              <li>Trop tenté par les fast-foods faciles.</li>
            </ul>
            <p className="text-lg lg:text-2xl md:text-2xl font-bold">Résultat : énergie instable, prise de gras, progression lente en salle.</p>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-[50%]">
            <img src={Section2Image} alt="image-2" className="rounded-lg max-w-full"/>
          </div>
        </section>

        <section className="font-primary">
          <div className="">
            <h2 className="text-3xl lg:text-4xl md:text-4xl text-center font-bold my-20">NutriFlow prépare. <span className="text-(--color-thirdy)">Tu performes.</span></h2>
          </div>
          <div className="px-10 my-5">
            <h3 className="text-2xl lg:text-3xl md:text-3xl">Chaque plat est :</h3>
            <div className="flex flex-col lg:flex-row md:flex-row justify-around items-center p-2 gap-3">
              <div className="w-[80%] h-50 lg:w-[30%] md:w-[30%] lg:h-70 md:h-70 rounded-lg"><img src={Box1}  className="h-full w-full" alt="Équilibré" /></div>
              <div className="w-[80%] h-50 lg:w-[30%] md:w-[30%] lg:h-70 md:h-70 rounded-lg"><img src={Box2}  className="h-full w-full" alt="Avec Produits Frais" /></div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row justify-around items-center p-2 gap-3">
              <div className="w-[80%] h-50 lg:w-[30%] md:w-[30%] lg:h-70 md:h-70 rounded-lg"><img src={Box3}  className="h-full w-full" alt="Calculer en calories" /></div>
              <div className="w-[80%] h-50 lg:w-[30%] md:w-[30%] lg:h-70 md:h-70 rounded-lg"><img src={Box4}  className="h-full w-full" alt="Adapter pour prise de masse/ perte de gras/ maintien" /></div>
            </div>
          </div>
        </section>

        <section className="font-secondary p-2">
          <h2 className="text-3xl lg:text-4xl md:text-4xl text-center font-bold mb-15">Trois repas par jours: <span className="text-2xl lg:text-3xl md:text-3xl font-light">Petit dejeuner, dejeuner et le diner</span></h2>
          <h3 className="text-2xl lg:text-3xl md:text-3xl text-center mb-15">Tu choisis: <span className="text-lg lg:text-2xl md:text-2xl text-(--color-thirdy)"> Commander par repas ou bien prendre l’abonnement</span></h3>
          <h3 className="text-2xl lg:text-3xl md:text-3xl text-center mb-15">Abonné ? : <span className="text-lg lg:text-2xl md:text-2xl text-(--color-thirdy)"> Tu peux modifier tes choix tant que c’est dans la liste du jour</span></h3>
          <div className="flex justify-center items-center">
            <button className="bg-(--color-secondar) btn p-5 text-lg lg:text-2xl md:text-2xl rounded-lg font-primary"><a href="#menu">Consulter le Menu</a></button>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row justify-around items-center w-full px-5 m-2">
          <div className="font-primary">
            <h2 className="font-bold text-3xl lg:text-4xl md:text-4xl mb-1">Nutriflow est construit pour:</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>Les travailleurs débordés</li>
              <li>Les étudiants concentrés sur leurs études</li>
              <li>Ceux qui veulent prendre du muscle proprement</li>
              <li>Ceux qui veulent perdre du gras intelligemment</li>
              <li>Ceux qui veulent manger sain sans réfléchir pendant 2 heures</li>
            </ul>
          </div>
          <div className="lg:w-[30%] md:w-[30%] w-[70%]">
            <img src={Section5Img} alt="image-5" className="rounded-lg m-0 p-0"/>
          </div>
        </section>
        
        <section className="flex justify-center items-center my-10 scroll-mt-24" id="abonnement">
          <div className="w-[90%] lg:w-[30%] md:w-[40%] p-3 lg:p-7 bg-linear-to-t from-(--color-linearTwo) to-(--color-linearOne) font-secondary rounded-lg">
            <h2 className=" text-center font-third text-2xl lg:text-3xl md:text-3xl mb-8">Gagne du temps. Automatise ta nutrition.</h2>
            <p className="text-lg font-bold">Avec l’abonnement mensuel :</p>
            <ul className="list-disc pl-6 text-sm">
              <li>Réception quotidienne des plats sélectionnés</li>
              <li>Priorité sur les commandes</li>
              <li>Ajustement possible chaque jour</li>
              <li>Contrôle précis des calories</li>
            </ul>
            <p className="text-lg lg:text-2xl md:text-2xl font-bold text-center mt-6 mb-9">Tu ne décides plus quoi manger. <br /> <span className="text-(--color-thirdy)">Tu décides juste de progresser.</span></p>
            <div className="flex justify-center items-center">
              <button className="bg-(--color-thirdy) btn p-5 text-lg rounded-lg font-primary" onClick={abonnement}>S’abonner maintenant</button>
            </div>
          </div>
        </section>

        <section id="menu" className="my-20 scroll-mt-24">
          <h2 className="font-secondary font-bold text-2xl lg:text-3xl md:text-3xl text-center mb-10" style={{fontWeight: 700}}>Menu de la semaine</h2>
          <DayMealSelector/>
        </section>

        <section className=" flex flex-col justify-center items-center gap-5 mb-20">
          <button className="btn bg-(--color-thirdy) rounded-lg" onClick={abonnement}>S’abonner maintenant</button>
          <button className="btn bg-(--color-secondar) rounded-lg" id="contacte" onClick={()=>{alert("Notre service n'est pas disponnible pour le moment")}}>Nous contacter</button>
        </section>
      </main>

      <footer className="flex flex-col lg:flex-row md:flex-row justify-between items-center bg-(--color-header) h-25 p-10 text-black">
        <div><p>© 2026  NutriFlow tous droits résérver</p></div>
        <div><p><a href="https://portfolioism.netlify.app/" target="_blank">created by ismael</a></p></div>
      </footer>
    </div>
  )
}

export default App
