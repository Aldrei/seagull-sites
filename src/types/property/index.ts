/**
 * TODO: Use ZOD https://github.com/colinhacks/zod after UIX shape done.
*/

export interface IProperty {
  id: number;
  client_id?: number;
  city_id?: number;
  neighborhood_id?: number;
  owner_id?: number;
  agent_id?: number;
  broker_id?: number;
  code: number;
  codeTipo: number;
  codePretty: string;
  nomeImovel: string;
  matricula: string | null;
  lote: string | null;
  quadra: string | null;
  empreendimento: number | null;
  placa: number | null;
  possuiFoto: number;
  exclusividade: number;
  exclusividadePeriodoInicio: string;
  exclusividadePeriodoFim: string;
  finalidade: string | null;
  categoria: CategoriaProperty;
  tipo: TipoProperty;
  status: StatusProperty;
  aluguelPeriodoInicio: string;
  aluguelPeriodoFim: string;
  dormitorio: string;
  garagem: string;
  lavanderia: number;
  telhado: string;
  forro: string;
  piso: string;
  aberturas: string;
  alarme: number;
  portaoEletronico: number;
  pocoArtesiano: number;
  cercaEletrica: number;
  cameraDeVideo: number;
  nascerDoSol: NascerDoSolProperty;
  descGeral: string;
  dataAgenciamento: string;
  dataVenda: string;
  apNomeCondominio: string;
  apPredio: string;
  apPavimento: string;
  apTotalPavimentos: string;
  apApto: string;
  apElevador: number;
  areaTotal: string;
  areaConstruida: string;
  areaFrente: string;
  areaFundos: string;
  areaDireita: string;
  areaEsquerda: string;
  valorPub: string;
  valor: string;
  valorCondicaoDeComissao: string;
  valorPorcentagemDeComissao: string;
  valorPorcentagemDoCorretor: string;
  valorPorcentagemDoAgenciador: string;
  valorCondominio: string;
  valorIPTUPago: string;
  valorIPTU: string;
  valorInssPago: string;
  valorInss: string;
  valorIndiceDoCUB: string;
  valorAlgoParaRegularizar: string;
  valorAlgoParaRegularizarDesc: string;
  condAgente: string;
  condPrestacao: string;
  condSaldoDevedor: string;
  condPrazo: string;
  condReajuste: string;
  condFGTS: number;
  condDoacao: number;
  condFinanciamento: number;
  condCartaConsorcio: number;
  condPartePermuta: number;
  condSituacao: string;
  condObs: string;
  localEstado: string;
  localIdCidade: string;
  localIdBairro: null;
  localLogradouro: string;
  localNumero: string;
  localCEP: string;
  localImediacoes: string;
  latitude: string;
  longitude: string;
  zoom: string;
  sitePublicarImovel: number;
  sitePublicarValor: number;
  siteImovelDestaque: number;
  siteAcesso: string;
  sitePublicarMapa: number;
  videoURL: string;
  idUltimaTransacao: string;
  created_at: string;
  updated_at: string;
  desc: string;
  title: string;
  hasExclusividade: boolean;
  site_url: string;
  photo?: {
    data: IPhoto;
  };
  video?: {
    data: IVideo;
  };
  city?: {
    data: ICity;
  };
  neighborhood?: {
    data: INeighborhood;
  };
}

export interface IPhoto {
  id?: number;
  property_id?: number;
  name?: string;
  ordem?: number;
  rotate?: number;
  thumb?: string;
  normal?: string;
}

export interface IVideo {
  id: number;
  property_id: number;
  src: string;
  legenda: string;
  url: string;
  ordem: number;
  created_at: string;
  updated_at: string;
}

/**
 * State, city and neighborhood.
*/
export interface IState {
  id: number;
  name: string;
  abbr?: string;
}

export interface ICity {
  id?: number;
  state_id?: number;
  name?: string;
  long_desc?: string;
  state?: IState;
}

export interface INeighborhood {
  id: number,
  client_id: number,
  city_id: number,
  idBairro: string,
  nome: string,
  idCidade: string,
  created_at: string,
  updated_at: string,
}

/**
 * Properties.
*/
type StatusProperty = 'Alugado' | 'Alugando' | 'Alugando Temporada' | 'Suspenso' | 'Vendendo' | 'Vendido' | 'Vendido por outro agente';
type CategoriaProperty = 'Comercial' | 'Industrial' | 'Residencial' | 'Rural';
type TipoProperty = 'Apartamento' | 'Apartamento Cobertura' | 'Área' | 'Bangalô' | 'Barracão' | 'Casa Alvenaria/Sobrado' | 'Casa Alvenaria' | 'Casa Geminada' | 'Casa Mista' | 'Chácara' | 'Chalé' | 'Edícula' | 'Flat' | 'Fazenda' | 'Galpão' | 'Kitnet' | 'Loft' | 'Prédio' | 'Sala Comercial' | 'Sítio' | 'Sobrado' | 'Terreno';
type NascerDoSolProperty = 'Frente' | 'Fundos' | 'Direita' | 'Esquerda';
