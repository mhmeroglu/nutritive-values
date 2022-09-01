import axios from "axios";
import { useState, useEffect } from "react";



const FoodDetails = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const search = localStorage.getItem('search');

        const infos = {
            method: 'GET',
            url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
            params: { query: search },
            headers: {
                'X-RapidAPI-Key': '6055e50103mshee316920c531891p1b2062jsn1d78a75511b9',
                'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
            }
        };

        try {
            axios.request(infos).then(function (response) {
                setFoods(response.data.items);
            });
        }
        catch (error) {
            console.error(error);
        };
    }, [foods]);

    return (
        <div >
            {
                foods.map((food, index) => {
                    return (
                        <div
                            key={index}
                            className="detail"
                        >
                            <h2>{food.name} ({food.serving_size_g}g)</h2>
                            <div className="values">
                                <h3>Nutritional Values</h3>
                                <h4>Calories (kcal): {food.calories}</h4>
                                <h4>Protein (g): {food.protein_g}</h4>
                                <h4>Carbohydrate (g): {food.carbohydrates_total_g}</h4>
                                <h4>Fat (g): {food.fat_total_g}</h4>
                                <h5>Cholesterol (mg): {food.cholesterol_mg}</h5>
                                <h5>Sodium (mg): {food.sodium_mg}</h5>
                                <h5>Potassium (mg): {food.potassium_mg}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FoodDetails;