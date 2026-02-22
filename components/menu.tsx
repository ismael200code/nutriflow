import dataMenu from "../src/menu.json"
import image from "../src/assets/photo.jpg"



    type Day = "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | "Samedi" | "Dimanche"
    type repas = "PetitDej" | "Dejeuner" | "Diner"
    type inputUser = {
        Jour: Day,
        Repas: repas
    }




function Menu ({Jour,Repas}:inputUser) {




    return (
        <div className="flex max-w-full overflow-x-scroll justify-start gap-5 p-4 m-0 lg:justify-center md:justify-center">
            {dataMenu.NutriFlowMenu[Jour][Repas].map(plat=>(
                <div key={plat.id} className="flex flex-col min-h-90 min-w-[80%] md:min-w-[10%] md:max-w-[30%] lg:min-w-[10%] lg:max-w-[20%] bg-(--color-secondar) rounded-2xl">
                    <div className="w-full">
                        <img src={image} alt={plat.nom} className="h-full rounded-t-2xl"/>
                    </div>
                    <div className="p-3 font-primary">
                        <p><span className="font-bold text-lg">Nom: </span>{plat.nom}</p>
                        <p><span className="font-bold text-lg">Description: </span>{plat.description}</p>
                        <p><span className="font-bold text-lg">Nombre de calories: </span> {plat.calories}Kcal</p>
                    </div>
                </div>
            ))}
        </div>
    )



}

export default Menu