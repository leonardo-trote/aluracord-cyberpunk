import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>

            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 100px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

export default function NotFoundPage() {

    return (
        <>

            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['500'],
                    backgroundImage: 'url(https://cdna.artstation.com/p/assets/images/images/028/102/058/original/pixel-jeff-matrix-s.gif?1593487263)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >


                <Titulo>ERROR 404</Titulo>





            </Box>




        </>
    )
}