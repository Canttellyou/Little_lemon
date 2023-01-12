import React, { useEffect, useState } from 'react'

const ReserveTable = () => {
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState('Anniversary')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [msg, setMsg] = useState({ msg: '', error: false })

    const handleGuestsInput = (e) => {
        setGuests(e.target.value)
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
    }

    const handleDateInput = (e) => {
        setDate(e.target.value)
    }

    const handleTimeInput = (e) => {
        setTime(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!time || !date || !guests || !occasion) throw new Error()

            //const data = await submitApi({ date, time, occasion, guests })

            setMsg({ msg: 'Table reserved successfully', error: false })
        } catch (e) {
            setMsg({ msg: 'Error, table was not reserved', error: true })
        }
    }

    return (
        <section className="reserve section">
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h1 className="form__title">Reserve a table</h1>

                    <fieldset className="fieldset">
                        <label className="label">
                            <p className="label__text">Number of guests</p>
                            <input
                                className="input"
                                type="text"
                                onInput={handleGuestsInput}
                                data-testid="guests"
                                value={guests}
                            />
                        </label>
                        <label className="label">
                            <p className="label__text">
                                Occasion (Birthday, Anniversary)
                            </p>
                            <select
                                onChange={handleOccasionChange}
                                data-testid="occasion"
                                value={occasion}
                            >
                                <option value="Anniversary">Anniversary</option>
                                <option value="Birthday">Birthday</option>
                            </select>
                        </label>
                        <label className="label">
                            <p className="label__text">Date</p>
                            <input
                                className="input"
                                type="date"
                                onInput={handleDateInput}
                                data-testid="date"
                                value={date}
                            />
                        </label>
                        <label className="label">
                            <p className="label__text">Time</p>
                            <input
                                className="input"
                                type="time"
                                onInput={handleTimeInput}
                                data-testid="time"
                                value={time}
                            />
                        </label>
                    </fieldset>
                    <p
                        className={
                            'msg' +
                            (msg.error ? ' error' : msg.msg ? ' success' : '')
                        }
                        data-testid="msg"
                    >
                        {msg.msg}
                    </p>
                    <button className="submit" data-testid="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ReserveTable
