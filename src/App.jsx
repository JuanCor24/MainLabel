import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import BusquedaAvanzada from './pages/BusquedaAvanzada';
import Colores from './pages/Colores';
import Componentes from './pages/Componentes';
import CreditCar from './pages/CreditCar';
import DetallesHotel from './pages/DetallesHotel';
import DetallesPaquete from './pages/DetallesPaquete';
import ExitoPago from './pages/ExitoPago';
import Frame1 from './pages/Frame1';
import GeneratedImages from './pages/GeneratedImages';
import Group1 from './pages/Group1';
import Homepage1 from './pages/Homepage1';
import Homepage1366Px from './pages/Homepage1366Px';
import HomepageDespuesDeRegistro from './pages/HomepageDespuesDeRegistro';
import HospedajeDetalladoPag from './pages/HospedajeDetalladoPag';
import MdiplayOutline from './pages/MdiplayOutline';
import MiniCard from './pages/MiniCard';
import MiniCard1 from './pages/MiniCard1';
import MiniCard2 from './pages/MiniCard2';
import MiniCard3 from './pages/MiniCard3';
import MiniCard4 from './pages/MiniCard4';
import MiniCard5 from './pages/MiniCard5';
import PagoCripto from './pages/PagoCripto';
import PagoTarjeta from './pages/PagoTarjeta';
import RealidadAumentada from './pages/RealidadAumentada';
import RealidadVirtual from './pages/RealidadVirtual';
import Registro from './pages/Registro';
import Reservacion from './pages/Reservacion';
import Reservas from './pages/Reservas';
import Restaurant from './pages/Restaurant';
import ServicioDetalladoPag from './pages/ServicioDetalladoPag';
import Tipografia from './pages/Tipografia';
import Wireframe2 from './pages/Wireframe2';
import Wireframe4 from './pages/Wireframe4';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/BusquedaAvanzada', element: <BusquedaAvanzada /> },
{ path: '/Colores', element: <Colores /> },
{ path: '/Componentes', element: <Componentes /> },
{ path: '/CreditCar', element: <CreditCar /> },
{ path: '/DetallesHotel', element: <DetallesHotel /> },
{ path: '/DetallesPaquete', element: <DetallesPaquete /> },
{ path: '/ExitoPago', element: <ExitoPago /> },
{ path: '/Frame1', element: <Frame1 /> },
{ path: '/GeneratedImages', element: <GeneratedImages /> },
{ path: '/Group1', element: <Group1 /> },
{ path: '/Homepage1', element: <Homepage1 /> },
{ path: '/Homepage1366Px', element: <Homepage1366Px /> },
{ path: '/HomepageDespuesDeRegistro', element: <HomepageDespuesDeRegistro /> },
{ path: '/HospedajeDetalladoPag', element: <HospedajeDetalladoPag /> },
{ path: '/MdiplayOutline', element: <MdiplayOutline /> },
{ path: '/MiniCard', element: <MiniCard /> },
{ path: '/MiniCard1', element: <MiniCard1 /> },
{ path: '/MiniCard2', element: <MiniCard2 /> },
{ path: '/MiniCard3', element: <MiniCard3 /> },
{ path: '/MiniCard4', element: <MiniCard4 /> },
{ path: '/MiniCard5', element: <MiniCard5 /> },
{ path: '/PagoCripto', element: <PagoCripto /> },
{ path: '/PagoTarjeta', element: <PagoTarjeta /> },
{ path: '/RealidadAumentada', element: <RealidadAumentada /> },
{ path: '/RealidadVirtual', element: <RealidadVirtual /> },
{ path: '/Registro', element: <Registro /> },
{ path: '/Reservacion', element: <Reservacion /> },
{ path: '/Reservas', element: <Reservas /> },
{ path: '/Restaurant', element: <Restaurant /> },
{ path: '/ServicioDetalladoPag', element: <ServicioDetalladoPag /> },
{ path: '/Tipografia', element: <Tipografia /> },
{ path: '/Wireframe2', element: <Wireframe2 /> },
{ path: '/Wireframe4', element: <Wireframe4 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}