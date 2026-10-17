import getUserLocation from "./userLocation";

export default async function weather() {
    try {
        const { latitude, longitude } = await getUserLocation();

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Failed to get weather:", error);
        throw new Error("Failed to get weather");
    }
}

// export async function hourlyWeather() {
//     try {
//         const { latitude, longitude } = await getUserLocation();

//         const url =
//             `https://api.open-meteo.com/v1/forecast` +
//             `?latitude=${latitude}` +
//             `&longitude=${longitude}` +
//             `&hourly=temperature_2m,precipitation_probability,precipitation,relative_humidity_2m,wind_speed_10m` +
//             `&timezone=auto&forecast_days=2`;

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Weather API error: ${response.status}`);
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Failed to get hourly weather:", error);
//         throw error;
//     }
// }