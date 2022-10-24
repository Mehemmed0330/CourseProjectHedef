import React from 'react'
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import VacancyFormFirst from "./VakancyFormFirst"

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
                Hi i am 2
            </div>
            <div hidden={page !== 3}>
                Hi i am 3
            </div>

            <Stack spacing={1}>
                <Pagination count={3} onChange={handleChange} />
            </Stack>
        </div>
    )
}
