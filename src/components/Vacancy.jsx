import React from 'react'
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

//  Components
import VacancyFormFirst from "./VacancyFormFirst"
import VacancyFormSecond from "./VacancyFormSecond"
import VacancyFormThird from "./VacancyFormThird"
// Css
import "../css/muiPagination.css"
export default function Vacancy() {
    const [page, setPage] = useState(1);
    const handleChange = (e, p) => {
        e.preventDefault(e)
        setPage(p);
    }

    return (
        <div>
            <div hidden={page !== 1}>
                <VacancyFormFirst />
            </div>
            <div hidden={page !== 2}>
                <VacancyFormSecond />
            </div>
            <div hidden={page !== 3}>
                <VacancyFormThird />
            </div>
            <Stack spacing={1} >
                <Pagination count={3} onChange={handleChange} />
            </Stack>
        </div>
    )
}
