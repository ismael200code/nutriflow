import { useState } from "react"
import Menu from "./menu"

export type Day =
  | "Lundi"
  | "Mardi"
  | "Mercredi"
  | "Jeudi"
  | "Vendredi"
  | "Samedi"
  | "Dimanche"

export type Meal = "PetitDej" | "Dejeuner" | "Diner"



const days: Day[] = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
]

const meals: { label: string; value: Meal }[] = [
  { label: "Petit dejeuner", value: "PetitDej" },
  { label: "Dejeuner", value: "Dejeuner" },
  { label: "Diner", value: "Diner" },
]

function DayMealSelector() {
  const [selectedDay, setSelectedDay] = useState<Day>("Lundi")
  const [selectedMeal, setSelectedMeal] = useState<Meal>("PetitDej")


  return (
    <div className="w-full flex flex-col items-center gap-5">

      {/* JOURS */}
      <div className="flex w-full overflow-x-auto p-3 gap-2 pb-2 justify-start lg:justify-center md:justify-center">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`p-3 rounded-full font-semibold whitespace-nowrap transition
              ${
                selectedDay === day
                  ? "bg-(--color-header) text-black"
                  : "bg-gray-300 text-black"
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* REPAS */}
      <div className="flex gap-3">
        {meals.map((meal) => (
          <button
            key={meal.value}
            onClick={() => setSelectedMeal(meal.value)}
            className={`p-3 rounded-xl font-semibold transition
              ${
                selectedMeal === meal.value
                  ? "bg-red-600 text-black"
                  : "bg-gray-300 text-black"
              }`}
          >
            {meal.label}
          </button>
        ))}
      </div>
      <Menu Jour={selectedDay} Repas={selectedMeal}/>
    </div>
  )
}

export default DayMealSelector