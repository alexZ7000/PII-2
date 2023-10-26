import React, {useState} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Assets/css/loja.css";
import {
    MDBBtn,
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle, MDBFooter,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow
} from "mdb-react-ui-kit";
import BoneUsina from "./Assets/images/BoneUsina.png";
import CalcaUsina from "./Assets/images/CalçaUsina.png";
import CanecaUsina from "./Assets/images/CanecaUsina.png";
import CamisetaUsina from "./Assets/images/CamisetaUsina.png";
import {Link} from "react-router-dom";
import icone_usina from "./Assets/images/usina_icon.png";

interface Product {
    idProduto: number;
    name: string;
    description: string;
    price: number;
    opcoes1: string;
    opcoes2: string;
    opcoes3: string;
    opcoes4: string;
    imageLink: any;
  };
  
  const products: Product[] = [
    {
            idProduto: 1,
            name: 'Camiseta da Usina',
            description: 'Camiseta 100% Lã com a logo da Usina EcoCultural',
            price: 40,
            opcoes1:"S",
            opcoes2:"M",
            opcoes3:"L",
            opcoes4:"XL",
            imageLink: CamisetaUsina
    },
    {
            idProduto: 2,
            name: 'Calça da Usina',
            description: 'Calça preta com a logo da Usina EcoCultural',
            price: 70,
            opcoes1:"S",
            opcoes2:"M",
            opcoes3:"L",
            opcoes4:"XL",
            imageLink: CalcaUsina
    },
    {
            idProduto: 3,
            name: 'Bone da Usina',
            description: 'Bone preto da usina com a logo da Usina EcoCultural',
            price: 30,
            opcoes1:"Forma Pequena",
            opcoes2:"Forma Grande",
            opcoes3:"Aba reta Pequena",
            opcoes4:"Aba Reta Grande",
            imageLink: BoneUsina
    },
    {
            idProduto: 4,
            name: 'Caneca da Usina',
            description: 'Canecas com a logo da Usina EcoCultural',
            price: 15,
            opcoes1:"Cor vermelha",
            opcoes2:"Cor Azul",
            opcoes3:"Cor Amarela",
            opcoes4:"Cor Preta",
            imageLink: CanecaUsina
    },
    
  ];
  function renderProduct(product: Product) {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [l, setL] = useState(0);
  
      const adicionarAoCarrinho = (product:Product)  => {
          const novoProduto = { nome: product.name , preco: product.price};
          setCarrinho(prevCarrinho => [...prevCarrinho, novoProduto]);
          setL(l=> l + 1)
          const adicionarAoCarrinho = (product:Product)  => {
                let l=0
                const calcularTotal = (products:Product) => {
                    var total = 0
                    var todo 
                    todo = total
                    
                     switch(product.idProduto) {
              
                    case 1:
                         total = 40
                         todo = todo + total;
                         break;
                    case 2:
                         total = 70
                         todo = todo + total;
                        break;
                    case 3:
                        todo = todo + total;
                        break;
                    return todo
                    };
                var valorFinal = calcularTotal(product)
                if (l = l +1){
                    valorFinal
                };
                    
              
            }
        };
      };
    return (
        <div className="card col-3 item-align-center ms-3 me-4" style={{ width: '16rem' }}>
        <img src= {product.imageLink} className="card-img-top" alt="Imagem do Produto" />
        <div className="card-body">
            <h5 className="card-title text-center">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <select className="chinen">
            <option>{product.opcoes1}</option>
            <option>{product.opcoes2}</option>
            <option>{product.opcoes3}</option>
            <option>{product.opcoes4}</option>
            </select>
            <p></p>
            <h3 className="text-center">R$ {product.price}</h3>
            <a href="#" className="btn btn-success" onClick={() => adicionarAoCarrinho(product)}>
            Adicionar ao Carrinho
            </a>
        </div>
        </div>
    );
  }
  
  function CarrinhoDaLoja({ carrinho, calcularTotal,renderProduct }: { carrinho: any[]; calcularTotal: () => number; renderProduct: () => any}) {
    const chamarCalculo = renderProduct().AdicionarAoCarrinho().calcularTotal()
    return (
      <div className="container container-fluid mt-4 p-3">
        <div className="row">
          <div className="col-12">
            <h2>Seus Itens:</h2>
            <ul>
              {carrinho.map((product, index) => (
                <li key={index}>
                  Produto: {product.name}, Preço: R$ {product.preco}
                </li>
              ))}
            </ul>
            <h3>O valor total foi de: R$ {chamarCalculo}</h3>
            <a href="xxxxxx.br" className="btn btn-success" >Continuar com o pagamento</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default function Loja() {
    const [carrinho, setCarrinho] = useState<any[]>([]);
    const [showNavCentred, setShowNavCentred] = useState(false);
    
  
    return (
        <>
        <MDBContainer className="mb-5 gradient-form">
            <MDBRow className='container-sm'>
                <MDBNavbar className="navbar" expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarCenteredExample'
                            aria-controls='navbarCenteredExample'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavCentred(!showNavCentred)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href='#' className="ms-1">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <img
                                    src={icone_usina}
                                    width={100}
                                    alt=''
                                />
                            </Link>
                        </MDBNavbarBrand>

                        <MDBCollapse navbar show={showNavCentred} className="justify-content-center">
                            <MDBNavbarNav fullWidth={true}>
                                <div className="ms-5"></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <div className='ms-5'></div>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <MDBNavbarLink active aria-current='page' href='#'>
                                            Página Inicial
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-auto">
                                    <Link to="/Donate" style={{ textDecoration: 'none' }}>
                                        <MDBNavbarLink>Doação</MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-auto">
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link'>
                                            Sobre nós
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <Link to="/History" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Nossa História</MDBDropdownItem>
                                            </Link>
                                            <Link to="/Shop" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Loja</MDBDropdownItem>
                                            </Link>
                                            <Link to="/EventsCalendary" style={{ textDecoration: 'none' }}>
                                                <MDBDropdownItem link>Calendário de Eventos</MDBDropdownItem>
                                            </Link>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <div className='mx-auto'>
                                        <Link to="/Login" style={{ textDecoration: 'none' }} role='button'>
                                            <MDBBtn outline={true} className='mb-2 btn-outline-success'>
                                                <MDBIcon fas icon="user"/>Login
                                            </MDBBtn>
                                        </Link>
                                    </div>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="mx-4">
                                    <Link to="/SignUp" style={{ textDecoration: 'none' }} role='button'>
                                        <MDBBtn className='btn-success'>
                                            <MDBIcon far icon="user"/>Cadastre-se
                                        </MDBBtn>
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBRow>
        </MDBContainer>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Fique conectado em nossas redes sociais:</span>
                    </div>
                    <div>
                        <Link to='https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </Link>
                        <Link to='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </Link>
                        <Link to='' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </Link>
                        <Link to='https://www.instagram.com/usinaecocultural/' target={"_blank"} className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </Link>
                        <Link to='https://www.youtube.com/@usinaecocultural' target="_blank" className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
                        </Link>
                    </div>
                </section>


                <section className='containerInfoSite'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me"/>
                                    <u>Usina-EcoCultural</u>
                                </h6>
                                <p>
                                    Mobilização da comunidade para transformar o usina de lixo em Usina Eco-Cultural com ações de educação ambiental, arte e cultura.
                                </p>
                                <p>
                                    Para saber mais, acesse nosso:
                                    <Link to="https://linktr.ee/usinaecocultural">Linktr.ee</Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Produtos da Loja</u></h6>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Roupas
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Canecas
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Livros
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Outros
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Links Úteis</u></h6>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Apoie a Causa
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#!' className='text-reset'>
                                        Configurações
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/Shop" className="text-dark">
                                        Loja
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/History" className="text-dark">
                                        Eventos
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'><u>Contato</u></h6>
                                <p>
                                    <MDBIcon icon="home" className="me"/>
                                    <i>Rua Breno De Ferraz do Amaral 415 B - Ipiranga, São Paulo - SP, 04214-020</i>
                                    <br/>
                                    Perto da estação Santos-Imigrantes (Linha Verde)
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me"/>
                                    <strong>usinaecoculturalnaooficial@gmail.com</strong>
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me"/>(xx) xxxxx-xxxx
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div className='text-center p-4 mt-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.20)', borderRadius: '8px', color: '#000000'}}>
                    © {new Date().getFullYear()} Todos os Direitos Reservados
                </div>
            </MDBFooter>
        </>
    );
}