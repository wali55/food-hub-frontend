"use client"

import Meals from "@/components/modules/meals-page/Meals"

const MealsPage = () => {
  return (
    <div className="p-4 mb-20">
      <h1 className="py-4 text-2xl font-bold">All Meals</h1>
      <Meals />
    </div>
  )
}

export default MealsPage