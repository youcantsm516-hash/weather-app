export default function getUserLocation(): Promise<{
    latitude: number;
    longitude: number;
}> {
    return new Promise((resolve, reject) => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const crd = pos.coords;

                resolve({
                    latitude: crd.latitude,
                    longitude: crd.longitude,
                });
            },
            (err) => {
                reject(err);
            },
            options
        );
    });
}