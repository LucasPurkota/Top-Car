import { Interface } from 'readline';
import internal from 'stream';
import {create} from 'zustand';

export interface Venda{  
  id?: number;
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

export interface Usuario{ 
  id?: number; 
  cpf?: string;
  nome?: string;
  email?: string;
  celular?: string;
  dataNascimento?: string;
  endereco?: string;
  senha?: string;
}

interface UseStore{
  vendaEscolhida: Venda;
  getSaleData: (id: number) => void;
  vendas: Venda[];
  usuarioEscolhido: Usuario;
  getUserData: (id: number) => void;
  usuarios: Usuario[];
  createSale: (sale: Venda) => void;
  createUser: (user: Usuario) => void;
}


export const useStore = create<UseStore>((set) => {
  return{
    //objects
    vendaEscolhida:{},
    usuarioEscolhido:{},

    //arrays
    vendas: [
      {id: 1, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
        detalhes: "Único dono, sem acidentes", valor: 80000, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./corolla2020.jpeg"},
      {id: 2, marca: "Honda", modelo: "Civic", ano: "2019", km: 20000, combustivel: "Flex",
        detalhes: "Revisões em dia", valor: 75000, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./civic2019.jpg"},
      {id: 3, marca: "Volkswagen", modelo: "Golf", ano: "2018", km: 30000, combustivel: "Diesel",
        detalhes: "Bancos de couro, teto solar", valor: 70000, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./golf2018.jpg"},
      {id: 4, marca: "Mitsubishi", modelo: "Lancer 2.0", ano: "2018", km: 188000, combustivel: "Gasolina",
        detalhes: "Excelente estado de conservação", valor: 64900, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./lancer.jpg"},
      {id: 5, marca: "Chevrolet", modelo: "Onix", ano: "2019", km: 25000, combustivel: "Flex",
        detalhes: "Apenas um ano de uso", valor: 60000, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./onix2019.jpeg"},
      {id: 6, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
        detalhes: "Único dono, sem acidentes", valor: 80000, vendedor: {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
        dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}, imagem: "./corolla2020.jpeg"}
    ],

    usuarios: [
      {id: 1,cpf: '13844451960', nome: 'Lucas Daniel Purkota', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'},
      {id: 2,cpf: '13844451960', nome: 'fulano 2', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'},
      {id: 3,cpf: '13844451960', nome: 'fulano 3', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'},
      {id: 4,cpf: '13844451960', nome: 'fulano 4', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'},
      {id: 5,cpf: '13844451960', nome: 'fulano 5', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'},
      {id: 6,cpf: '13844451960', nome: 'fulano 6', email: 'lucaspurkota@gmail.com', celular: '41996793076', 
      dataNascimento: '24102003', endereco: 'São José dos Pinhais - PR', senha: 'Lucas.2410'}
    ],


    //function
    getSaleData:(id) => set((state) => ({
      vendaEscolhida:state.vendas.filter(item=>item.id==id)[0]
    })),
    getUserData:(id) => set((state) => ({
      usuarioEscolhido:state.usuarios.filter(item=>item.id==id)[0]
    })),
    createSale:(sale) => set((state) => ({
      vendas:[...state.vendas,sale]
    })),
    createUser:(user) => set((state) => ({
      usuarios:[...state.usuarios,user]
    }))
  }
})