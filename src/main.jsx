import React from "react";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainBody from "./MainBody.jsx";
import './index.css'
import './bootstrap.min.css';
import LeftBar from "./LeftBar.jsx";
import PlatformListContent from "./Content/PlatformListContent.jsx";
import DeliveryContent from "./Content/DeliveryContent.jsx";
import ImportContent from "./Content/ImportContent.jsx";
import DownloadContent from "./Content/DownloadContent.jsx";
import PlatformScanContent from "./Content/PlatformScanContent.jsx";
import PlatformContent from "./Content/PlatformContent.jsx";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (<MainBody/>),
        },
        {
            path: '/main',
            element: <>
                <main className="d-flex flex-nowrap">
                    <LeftBar></LeftBar>

                    <Outlet></Outlet>

                </main>
            </>,
            children: [
                {
                    path: 'platform',
                    element: <>
                        <PlatformListContent></PlatformListContent>
                    </>
                },
                {
                    path: 'platform/scan',
                    element: <>
                        <PlatformScanContent></PlatformScanContent>
                    </>
                },
                {
                    path: 'platform/:id',
                    element: <>
                        <PlatformContent platformId={12}></PlatformContent>
                    </>
                }
            ]
        },
        {
            path: '/main/delivery',
            element: <>
                <main className="d-flex flex-nowrap">
                    <LeftBar></LeftBar>
                    <DeliveryContent></DeliveryContent>
                </main>
            </>
        },
        {
            path: '/main/import',
            element: <>
                <main className="d-flex flex-nowrap">
                    <LeftBar></LeftBar>
                    <ImportContent></ImportContent>
                </main>
            </>
        },
        {
            path: '/main/download',
            element: <>
                <main className="d-flex flex-nowrap">
                    <LeftBar></LeftBar>
                    <DownloadContent></DownloadContent>
                </main>
            </>
        }
    ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
    </React.StrictMode>,)
