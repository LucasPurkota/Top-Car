export interface Venda{  
  id: number;
  marca: String;
  modelo: String;
  ano: String;
  km: number;
  combustivel: String;
  detalhes: String;
  valor: number;
  imagem: String;
}

const vendas: Venda[] = [
  {id: 1, marca: "Toyota", modelo: "Corolla", ano: "2020", km: 15000, combustivel: "Gasolina",
    detalhes: "Único dono, sem acidentes", valor: 80000, imagem: "corolla.jpg"},
  {id: 2, marca: "Honda", modelo: "Civic", ano: "2019", km: 20000, combustivel: "Flex",
    detalhes: "Revisões em dia", valor: 75000, imagem: "civic.jpg"},
  {id: 3, marca: "Volkswagen", modelo: "Golf", ano: "2018", km: 30000, combustivel: "Diesel",
    detalhes: "Bancos de couro, teto solar", valor: 70000, imagem: "golf.jpg"},
  {id: 4, marca: "Ford", modelo: "Fiesta", ano: "2017", km: 40000, combustivel: "Gasolina",
    detalhes: "Excelente estado de conservação", valor: 45000, imagem: "fiesta.jpg"},
  {id: 5, marca: "Chevrolet", modelo: "Onix", ano: "2019", km: 25000, combustivel: "Flex",
    detalhes: "Apenas um ano de uso", valor: 60000, imagem: "onix.jpg"}
];