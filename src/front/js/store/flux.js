const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			// 
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getFavorite: (favorite) => {
				let storeFavorites = getStore().favorites;
				setStore({ favorites: [...storeFavorites, favorite] });
			},

			removeFavorite: (index) => {
				let storeFavorites = getStore().favorites;
				storeFavorites.splice(index, 1);
				setStore({ favorites: storeFavorites });
			},

			signup: async (email, password) => {
				try {

					const response = await fetch("https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/signup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email, password }),
					})
					if (response.ok) {
						return true
					} else {
						console.error("Failed to sign up")
						return false
					}

				} catch (error) {
					console.log("Error during sign up", error)
				}
			},
			login: async (email, password) => {
				try {
					const response = await fetch("https://legendary-space-enigma-675vrxw7556f4r4r-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password })
					});

					if (response.status !== 201) {
						console.error("There has been some error");

						return false;
					}

					const data = await response.json()
					sessionStorage.setItem("token", data.token);
					setStore({ token: data.token });
					return true;



				} catch (error) {
					console.log("ERROR CATCH:", error)
				}
			},
			logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null });
			}


		}
	};
};

export default getState;
