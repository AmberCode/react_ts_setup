import * as React from 'react';
import Header from './Header/Header';
import MainContent from './MainContent';
import Footer from './Footer/Footer';

export interface IAppProps {}

export default function IApp(props: IAppProps) {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}