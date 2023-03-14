import FormInput from '../../../../ui/formInput/FormInput'
import './reserv-form.scss'

export default function ReservationForm() {
    return (
        <form className="reserv-form"
            onSubmit={e => e.preventDefault()}>
            <div className="reserv-form__input-container">
                <FormInput
                    type="text"
                    className="reserv-form__input"
                    placeholder="Your Name" />
                <FormInput
                    type="text"
                    className="reserv-form__input"
                    placeholder="Your Phone" />
                <FormInput
                    type="text"
                    className="reserv-form__input"
                    placeholder="Person" />
                <FormInput
                    type="date"
                    className="reserv-form__input"
                />
                <FormInput
                    type="text"
                    className="reserv-form__input"
                    placeholder="Time" />
            </div>
            <input className="reserv-form__submit" type="submit" value="Book A Table" />
        </form>
    )
}