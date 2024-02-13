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
import OldPlatform from "./Content/OldPlatform.jsx";
import Diction from "./Content/Diction.jsx";

const toggleLeftBar = function (){

    let display = document.querySelector('#root > main > div.flex-shrink-0').style.display;

    if (display==='none'){
        document.querySelector('#root > main > div.flex-shrink-0').style.display = 'block';
    }else {
        document.querySelector('#root > main > div.flex-shrink-0').style.display = 'none';
    }
}



const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (<><Header btn={false}/><MainBody/></>),
        },
        {
            path: '/main',
            element: <>
                <Header btn={true} toggleLeftBar={toggleLeftBar}/>
                <main className="d-flex flex-nowrap">
                    <LeftBar isLeftBarVisible={false} ></LeftBar>

                    <Outlet></Outlet>


                </main>
                <Footer/>
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
                    path: 'platform/old/:id',
                    element: <>
                        <OldPlatform platformId={window.location.href}></OldPlatform>
                    </>
                },
                {
                    path: 'platform/:id',
                    element: <>
                        <PlatformContent platformId={window.location.href}></PlatformContent>
                    </>,

                }
            ]
        },
        {
            path: '/main/delivery',
            element: <>
                <Header btn={true} toggleLeftBar={toggleLeftBar}/>
                <main className="d-flex flex-nowrap">
                    <LeftBar isLeftBarVisible={false}></LeftBar>
                    <DeliveryContent></DeliveryContent>
                </main>
                <Footer/>
            </>
        },
        {
            path: '/main/import',
            element: <>
                <Header btn={true} toggleLeftBar={toggleLeftBar}/>
                <main className="d-flex flex-nowrap">
                    <LeftBar isLeftBarVisible={false}></LeftBar>
                    <ImportContent></ImportContent>
                </main>
                <Footer/>
            </>
        },
        {
            path: '/main/download',
            element: <>
                <Header btn={true} toggleLeftBar={toggleLeftBar}/>
                <main className="d-flex flex-nowrap">
                    <LeftBar isLeftBarVisible={false}></LeftBar>
                    <DownloadContent></DownloadContent>
                </main>
                <Footer/>
            </>
        },
        {
            path: '/dict',
            element: <>
                <Diction></Diction>
            </>
        },
    ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <>

        <RouterProvider router={router}/>

    </>
    /*</React.StrictMode>,*/)
