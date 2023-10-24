import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import RevoCalendar from 'revo-calendar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCarousel,
    MDBCarouselItem,
    MDBBtn
} from 'mdb-react-ui-kit';
import icone_usina from "./Assets/images/usina_icon.png";
import abelha_usina from "./Assets/images/abelha.jpeg";
import banquete_usina from "./Assets/images/banquete.png";
import yoga_usina from "./Assets/images/yoga.png";
import faixa_do_futuro_usina from "./Assets/images/faixa_do_futuro.jpeg";

export default function Home() {
    const [showNavCentred, setShowNavCentred] = useState(false);
    var events = [
        {
            name: "EventoTeste",
            date: Date.now(),
            allDay: true,
        },
        {
            name: "Reservation",
            date: 1594422992000,
            extra: {
                icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
                text: "7 People",
            },
        },
    ];

    const translations = {
        esperanto: {
            days: ["Dimanĉo", ..."Sabato"],
            daysShort: ["Dim", ..."Sab"],
            daysMin: ["Di", ..."Sa"],
            months: ["Januaro", ..."Decembro"],
            monthsShort: ["Jan", ..."Dec"],
            noEventForThisDay: "Neniu evento por ĉi tiu tago ... do ripozu!",
            allDay: "Tuta tago",
            addEvent: "Aldoni eventon",
            delete: "Forigi",
            eventTime: "Tempo de evento",
            previousYear: "Pasintjare",
            nextYear: "Venonta jaro",
            toggleSidebar: "Baskulu flanka kolumno",
            toggleDetails: "Ŝaltu Detalojn",
        },
    };
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
                                        <Link to="/Login" className='btn mb-2 btn btn-outline-success' role='button'>
                                            <MDBIcon fas icon="user" />Login
                                        </Link>
                                        </div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className="mx-4">
                                        <Link to="/SignUp" className='btn btn-success' role='button'><MDBIcon far icon="user"/>Cadastre-se</Link>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBRow>
            <MDBRow>
                <div className="mt-5 mb-3 ">
                    <h1>Calendário de Eventos</h1>
                </div>
            </MDBRow>
            <RevoCalendar className="mt"
                events = {
                    events
                }
                style = {
                {
                    borderRadius: "15px",
                    border: "5px solid #4F6995",
                    height: "534px"
                }
            }
                highlightToday = {true}
                lang = "pt"
                primaryColor = "#516b97"
                secondaryColor = "#D7E6EE"
                todayColor = "#3B3966"
                textColor = "#333333"
                indicatorColor = "orange"
                animationSpeed = {300}
                sidebarWidth = {180}
                detailWidth = {280}
                showDetailToggler = {true}
                showSidebarToggler = {true}
                onePanelAtATime = {false}
                allowDeleteEvent = {true}
                allowAddEvent = {true}
                openDetailsOnDateSelection = {true}
                timeFormat24 = {true}
                showAllDayLabel = {false}
                detailDateFormat = "DD/MM/YYYY"
            />
        </MDBContainer>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
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
                                    Para saber mais, acesse nosso
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
                    <a className='text-reset fw-bold' href='#'>
                    </a>
                </div>
            </MDBFooter>
        </>
    );
}