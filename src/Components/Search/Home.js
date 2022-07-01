import { Container } from '@mui/material'
import React from 'react'
import Design from "../Home/Design"
import SearchBar from '../Home/SearchBar'
import BookData from "../Home/Data.json";


function Home({ inputs }) {

    React.useEffect(() => {
        console.log(inputs)
    }, [inputs])

    return (
        <>
            <Container>
                <Design inputs={inputs} />
                <div className="">
                    <SearchBar placeholder="Enter a name to be searched..." data={BookData} />
                </div>
            </Container>
        </>
    )
}

export default Home
