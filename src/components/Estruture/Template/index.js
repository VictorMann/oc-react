import React from 'react';
import { TemplateArea } from './styled';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';


function Template({ children }) {
    return (
        <TemplateArea>
            <Header />
            <Menu />
            <div className="page-body">
                {children}
            </div>
            <Footer />
        </TemplateArea>
    );
}

export default Template;