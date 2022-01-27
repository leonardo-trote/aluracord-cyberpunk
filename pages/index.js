import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from "react"
import { useEffect } from "react"

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Cyberpunk</h2>
//         </div>
//     )
// }
// export default HomePage


export default function HomePage() {
    //const username = 'leonardo-trote';
    const [username, setUsername] = React.useState('');
    const [data, setData] = useState("");
    const routing = useRouter();

    useEffect(() => {
        fetchData(userURL)
    }, [])

    const userURL = `https://api.github.com/users/${username}`

    function fetchData(url) {

        fetch(url).then(function (data) {
            return data.json()
        })
            .then(function (convertedData) {
                setData(convertedData)
            })

    }

    console.log(data)

    function checkUsername(user) {

        if (user != null && user.length >= 1) {
            return user;
        }
    }

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['000'],
                    backgroundImage: 'url(https://i.pinimg.com/originals/0f/88/3e/0f883e6f5db348671c1e26a7dfd2e5f3.gif)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault()
                            console.log('form submited')
                            if (checkUsername(username)) {
                                routing.push('/chat')
                            }
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Welcome!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/*       <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                const inputValue = event.target.value;
                                setUsername(inputValue);

                            }}
                        />*/}

                        <TextField
                            placeholder='Type your username'
                            value={username}
                            onChange={function (event) {
                                const inputValue = event.target.value;
                                console.log('user typed ' + inputValue);
                                setUsername(inputValue);

                            }}

                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.custom['000'],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />



                        <Button
                            type='submit'
                            label='Login'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.custom['000'],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.custom['050'],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >


                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={checkUsername(username) ? `https://github.com/${username}.png` : 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png'}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
