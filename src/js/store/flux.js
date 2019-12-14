const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planet: []
            people: []
            vehicle: []
        },
        actions: {
            loadPlanets() {
                const url = "https://swapi.co/api/planets";
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        console.log("yyyyyyyyyyyyyyyyyy", result),
                            setStore({
                                planet: result.results
                            });
                    });
            }
        }
        actions: {
            loadPeople() {
                const url = "https://swapi.co/api/people";
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        console.log("aaaaaaaaaaaaa", result),
                            setStore({
                                people: result.results
                            });
                    });
            }
        }

    };

    export default getState;
