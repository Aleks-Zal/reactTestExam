import React, { useState } from 'react';
import '../App.css';
import { DelIcon, EdIcon, SubmitIcon } from './Icons';

export default function SimpleCard(item) {
    console.log(item);
    const [toggleDesc, setToggleDesc] = useState(false)

    const {
        pictureInput,
        nameInput,
        priceInput,
        countInput,
        articleInput,
        dateInput,
        priceTypeInput,
        descriptionInput,
        deleteCallback
    } = item

    const [typeOfDate, setTypeOfDate] = useState('text')
    const [cardVision, setCardVision] = useState(true)
    const [formHidden, setFormHidden] = useState('hidden')
    const [divHidden, setDivHidden] = useState('')

    const editItem = () => {
        if (cardVision) {
            setCardVision(false)
            setFormHidden('activeForm')
            setDivHidden('hidden')
        }
    }

    const submitItem = () => {
        if (!cardVision) {
            setCardVision(true)
            setFormHidden('hidden')
            setDivHidden('')
        }
    }

    const onFocusDate = () => {
        setTypeOfDate('date')
    }

    const onBlurDate = () => {
        setTypeOfDate('text')
    }

    const noPhoto = 'https://autopartskorea.ru/catalog/view/theme/korea/images/no_photo.jpg'

    function noPhotoInput() {
        if (!pictureInput) {
            return (
                noPhoto
            )
        } else {
            return pictureInput
        }
    }

    function lastOne() {
        if (countInput === '1') {
            return ' (LAST ONE)'
        }
    }

    const descriptionButton = () => {
        toggleDesc === false ? setToggleDesc(true) : setToggleDesc(false)
    }

    const hiddenDescription = () => {
        if (toggleDesc === true) {
            return
        } else {
            return 'hidden'
        }
    }

    const noDescription = () => {
        if (!descriptionInput) {
            return 'No description'
        } else {
            return descriptionInput
        }
    }

    const textDescription = () => {
        if (toggleDesc === true) {
            return 'Hide description'
        } else {
            return 'Show description'
        }
    }

    return (

        <div className={`card__${priceTypeInput}`} id="card__premium">

            <form className={formHidden}>
                <div className="form__group">
                    <input className="form__input"
                        value={pictureInput}
                        type="text"
                        placeholder=" " />
                    <label className="form__label">Link to the photo (URL)</label>
                </div>
                <div className='form__group'>
                    <input className='form__input'
                        value={nameInput}
                        type='text'
                        minLength='5'
                        placeholder=' '
                        required />
                    <label className='form__label'>Name (min 5 char.)<span className='required'>*</span></label>
                </div>
                <div className='form__group'>
                    <input className="form__input"
                        value={articleInput}
                        type="text"
                        placeholder=" "
                        pattern='[A-ZА-Я]{1}[0-9]{2,}'
                        required />
                    <label className="form__label">Article (samp.: A12...)<span className='required'>*</span></label>
                    <div id="validArticleForm"></div>
                </div>
                <div className='form__group'>
                    <input className="form__input"
                        value={countInput}
                        type="number"
                        min="1"
                        step="1"
                        placeholder=" "
                        required />
                    <label className="form__label">Count (PCs)<span className='required'>*</span></label>
                </div>
                <div className="form__group">
                    <input className="form__input"
                        value={priceInput}
                        type="number"
                        min="0"
                        placeholder=" "
                        required />
                    <label className="form__label">Price (RUB)<span className='required'>*</span></label>
                </div>
                <div className="form__group">
                    <input className="form__input"
                        value={dateInput}
                        type={typeOfDate}
                        onFocus={onFocusDate}
                        onBlur={onBlurDate}
                        placeholder=" "
                        required />
                    <label className="form__label">Creation date<span className='required'>*</span></label>
                </div>
                <div className="form__group">
                    <input className="form__input form__input_description"
                        value={descriptionInput}
                        type="textarea"
                        placeholder=" " />
                    <label className="form__label">Description</label>
                </div>

                <div className='iconBlock'>
                    <SubmitIcon submitItem={submitItem} />
                </div>
            </form>
            <div className={divHidden}>
                <div>
                    <img className="photo" alt={nameInput} src={noPhotoInput()} />
                </div>

                <div className="textPadding">
                    <b>Name: </b>
                    <i>{nameInput.substr(0, 1).toUpperCase()}{nameInput.toLowerCase().slice(1)}</i>
                </div>

                <div>
                    <b>Price:</b> <i>{priceInput}</i>
                </div>

                <div>
                    <b>Count:</b> <i>{countInput}<span className='lastOne'>{lastOne()}</span></i>
                </div>

                <div>
                    <b>Article:</b> <i>{articleInput}</i>
                </div>

                <div>
                    <b>Date:</b> <i>{dateInput}</i>
                </div>

                <div>
                    <div className="show-description__button"
                        onClick={descriptionButton}>
                        {textDescription()}
                    </div>
                </div>

                <div className={hiddenDescription()}>
                    <div className="description-field">
                        <i>{noDescription()}</i>
                    </div>
                </div>

                <div className='iconBlock'>
                    <DelIcon id={item.id} deleteCallback={deleteCallback} />
                    <div className='splitIcon'></div>
                    <EdIcon editItem={editItem} />
                </div>
            </div>

        </div>
    )
}



