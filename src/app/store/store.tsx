import { create } from 'zustand';

export interface Venda {
  id: number;
  marca?: string;
  modelo?: string;
  ano?: string;
  km?: number;
  combustivel?: string;
  detalhes?: string;
  valor?: number;
  vendedor?: Usuario;
  imagem?: string;
}

export interface Usuario {
  id?: number;
  cpf?: string;
  nome?: string;
  email?: string;
  celular?: string;
  dataNascimento?: string;
  cidade?: string;
  senha?: string;
}

interface UseStore {
  vendaEscolhida: Venda;
  getSaleData: (id: number) => void;
  vendas: Venda[];
  usuarioEscolhido: Usuario;
  getUserData: (email: string) => void;
  usuarios: Usuario[];
  createSale: (sale: Venda) => void;
  createUser: (user: Usuario) => void;
  createUserDB: (user: Usuario) => void;
  getUserDataDB: (user: Usuario) => void;
}


export const useStore = create<UseStore>((set) => {
  return {
    //objects
    vendaEscolhida: {
      id: 1, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
      detalhes: "Único dono, sem acidentes", valor: 80000, vendedor: {
        id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
        dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
      }, imagem: "/corolla2020.jpeg"
    },
    usuarioEscolhido: {},

    //arrays
    vendas: [
      {
        id: 1, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
        detalhes: "Único dono, sem acidentes", valor: 80000, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "/corolla2020.jpeg"
      },
      {
        id: 2, marca: "Honda", modelo: "Civic", ano: "2019", km: 20000, combustivel: "Flex",
        detalhes: "Revisões em dia", valor: 75000, vendedor: {
          id: 2, cpf: '11823061958', nome: 'Marllon de Lima', email: 'marllonlima2004@gmail.com', celular: '41997102392',
          dataNascimento: '24102003', cidade: 'Itaperuçu - PR', senha: 'marlin123'
        }, imagem: "./civic2019.jpg"
      },
      {
        id: 3, marca: "Volkswagen", modelo: "Golf", ano: "2018", km: 30000, combustivel: "Diesel",
        detalhes: "Bancos de couro, teto solar", valor: 70000, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "./golf2018.jpg"
      },
      {
        id: 4, marca: "Mitsubishi", modelo: "Lancer", ano: "2018", km: 188000, combustivel: "Gasolina",
        detalhes: "Excelente estado de conservação", valor: 64900, vendedor: {
          id: 2, cpf: '11823061958', nome: 'Marllon de Lima', email: 'marllonlima2004@gmail.com', celular: '41997102392',
          dataNascimento: '24102003', cidade: 'Itaperuçu - PR', senha: 'marlin123'
        }, imagem: "./lancer.jpg"
      },
      {
        id: 5, marca: "Chevrolet", modelo: "Onix", ano: "2019", km: 25000, combustivel: "Flex",
        detalhes: "Apenas um ano de uso", valor: 60000, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "./onix2019.jpeg"
      },
      {
        id: 6, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
        detalhes: "Único dono, sem acidentes", valor: 80000, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "./corolla2020.jpeg"
      },
      {
        id: 7, marca: "Honda", modelo: "Civic", ano: "2019", km: 20000, combustivel: "Flex",
        detalhes: "Revisões em dia", valor: 75000, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "./civic2019.jpg"
      },
      {
        id: 8, marca: "Volkswagen", modelo: "Golf", ano: "2018", km: 30000, combustivel: "Diesel",
        detalhes: "Bancos de couro, teto solar", valor: 70000, vendedor: {
          id: 2, cpf: '11823061958', nome: 'Marllon de Lima', email: 'marllonlima2004@gmail.com', celular: '41997102392',
          dataNascimento: '24102003', cidade: 'Itaperuçu - PR', senha: 'marlin123'
        }, imagem: "./golf2018.jpg"
      },
      {
        id: 9, marca: "Mitsubishi", modelo: "Lancer", ano: "2018", km: 188000, combustivel: "Gasolina",
        detalhes: "Excelente estado de conservação", valor: 64900, vendedor: {
          id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
          dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
        }, imagem: "./lancer.jpg"
      },
      {
        id: 10, marca: "Chevrolet", modelo: "Onix", ano: "2019", km: 25000, combustivel: "Flex",
        detalhes: "Apenas um ano de uso", valor: 60000, vendedor: {
          id: 2, cpf: '11823061958', nome: 'Marllon de Lima', email: 'marllonlima2004@gmail.com', celular: '41997102392',
          dataNascimento: '24102003', cidade: 'Itaperuçu - PR', senha: 'marlin123'
        }, imagem: "./onix2019.jpeg"
      },
    ],

    usuarios: [
      {
        id: 1, cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076',
        dataNascimento: '24102003', cidade: 'São José dos Pinhais - PR', senha: 'Lucas.2410'
      },
      {
        id: 2, cpf: '11823061958', nome: 'Marllon de Lima', email: 'marllonlima2004@gmail.com', celular: '41997102392',
        dataNascimento: '24102003', cidade: 'Itaperuçu - PR', senha: 'marlin123'
      },
    ],


    //function
    getSaleData: (id) => set((state) => ({
      vendaEscolhida: state.vendas.filter(item => item.id == id)[0]
    })),
    getUserData: (email) => set((state) => ({
      usuarioEscolhido: state.usuarios.filter(item => item.email == email)[0]
    })),
    createSale: (sale) => set((state) => ({
      vendas: [...state.vendas, sale]
    })),
    createUser: (user) => set((state) => ({
      usuarios: [...state.usuarios, user]
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
    getUserDataDB:async() => {
      await fetch('http://localhost:4000/api/usuario/getEmail',
        { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          useStore.setState({usuarioEscolhido: data})
        })
    }
  }
})