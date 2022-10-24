import React, { useState } from 'react'

// Mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function VakancyFormFirst() {
    const [value, setValue] = useState("");
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Adınız</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Soyadınız</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Select an option</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Evli</option>
                            <option value="US">Subay</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Select an option</label>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                    // label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField
                                        {...params}
                                        sx={{
                                            '.MuiInputBase-input': {
                                                padding: "10px",
                                                backgroundColor: "rgb(249 250 251)",
                                                borderRadius: "10px"
                                            },
                                            'MuiButtonBase-root': {
                                                borderRadius: "15px",
                                                backgroundColor: "rgb(249 250 251)",
                                            },
                                            'css-1lwbda4-MuiStack-root': {
                                                backgroundColor: "red",

                                            }

                                        }}
                                    />}
                                    className="p-2.5"
                                />
                            </Stack>
                        </LocalizationProvider>

                    </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
