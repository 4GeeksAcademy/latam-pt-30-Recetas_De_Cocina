const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
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
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
			signup: async (email, password) => {
				try {
					
					const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
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
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });

					if (response.status !== 201) {
						console.error("There has been some error"); 
						//se utiliza para imprimir mensajes de error en la consola del navegador o en el entorno de ejecución
                        return false;
					}

					const data = response.json()
					sessionStorage.setItem("token", data.token);
                    setStore({ token: data.token });
                    return true;

					// sessionStorage =
					// proporciona un área de almacenamiento accesible solo desde la misma ventana o pestaña del navegador... 
					//...y que persiste solo durante la sesión de navegación actual
					
					//setItem =
					//se utiliza para almacenar un par clave-valor en sessionStorage...
					//...La clave es un identificador único que se usa para recuperar el valor posteriormente.

				} catch(error) {
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
