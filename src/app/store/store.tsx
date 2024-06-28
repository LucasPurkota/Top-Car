import { create } from 'zustand';

export interface Venda {
  id: string;
  marca?: string;
  modelo?: string;
  ano?: string;
  km?: number;
  combustivel?: string;
  detalhes?: string;
  valor?: number;
  vendedor: string;
  // imagem?: string;
}

export interface Usuario {
  id: string;
  cpf?: string;
  nome?: string;
  email?: string;
  celular?: string;
  dataNascimento?: string;
  cidade?: string;
  senha?: string;
}

interface UseStore {
  vendas: Venda[];
  vendaEscolhida: Venda;
  createSaleDB: (sale: Venda) => void;
  getSaleDataDB: (sale: Venda) => void;
  getSaleDataDBAll: () => void;
  updateSaleDB: (sale: Venda) => void
  deleteSaleDB: (_id: string) => void

  vendedor: Usuario;
  usuarios: Usuario[];
  usuarioEscolhido: Usuario;
  createUserDB: (user: Usuario) => void;
  getUserDataDB: (user: Usuario) => any;
  getUserDataDBAll: () => void;
  updateUserDB: (user: Usuario) => void;
  deleteUserDB: (_id: string) => void;

  getUserData: (id: string) => void;
  getSaleData: (id: string) => void;

  isLogged: boolean;
}


export const useStore = create<UseStore>((set) => {
  return {
    //objects
    vendaEscolhida: {id: "", vendedor: ""},
    usuarioEscolhido: {id: ""},
    vendedor: {id: ""},
    isLogged: false,

    //arrays
    vendas: [],

    usuarios: [],


    //function
    getSaleData: (id) => set((state) => ({
      vendaEscolhida: state.vendas.filter(item => item.id == id)[0]
    })),
    getUserData: (id) => set((state) => ({
      vendedor: state.usuarios.filter(item => item.id == id)[0],
      
    })),
    createUserDB: async (user) => {
      await fetch('http://localhost:4000/api/usuario/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    },
    getUserDataDB: async (user) => {
      try {
        const response = await fetch('http://localhost:4000/api/usuario/getEmail', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data && data.length > 0) {
          console.log(data[0])
          const id = data[0]._id
          data[0].id = id
          useStore.setState({usuarioEscolhido: data[0]});
          return data[0];
        }
        return null;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    },
    getUserDataDBAll: async () => {
      try {
        const response = await fetch('http://localhost:4000/api/usuario/getAll', 
          {method: 'GET',});
        const data = await response.json();
        if (data && data.length > 0) {
          useStore.setState({ usuarios: data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    updateUserDB: async (user) => {
      await fetch('http://localhost:4000/api/usuario/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    },
    deleteUserDB: async (id) =>{
      await fetch(`http://localhost:4000/api/usuario/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    },
    createSaleDB: async (sale) => {
      await fetch('http://localhost:4000/api/venda/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sale),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    },
    getSaleDataDB: async (sale) => {
      try {
        const response = await fetch('http://localhost:4000/api/venda/getSaleUser', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sale),
        });
        const data = await response.json();
        if (data && data.length > 0) {
          console.log(data[0])
          const id = data[0]._id
          data[0].id = id
          useStore.setState({vendaEscolhida: data[0]});
          return data[0];
        }
        return null;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    },
    getSaleDataDBAll: async () => {
      try {
        const response = await fetch('http://localhost:4000/api/venda/getAll', 
          {method: 'GET',});
        const data = await response.json();
        if (data && data.length > 0) {
          useStore.setState({ vendas: data });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    updateSaleDB: async (sale) => {
      await fetch('http://localhost:4000/api/venda/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sale),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    },
    deleteSaleDB: async (id) =>{
      await fetch(`http://localhost:4000/api/venda/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    }
  }
})