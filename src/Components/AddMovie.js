import React,{useRef} from 'react';
import classes from './AddMovie.module.css';

const AddMovie = (props) => {
    // useRef аркылуу данныйларды алабыз
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const submitHandler = (e) => {
        e.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        }
        
        props.onAddMovie(movie)
    }

    return (
        <form onSubmit={submitHandler}>
            {/*1 input  */}
            <div className={classes.control}>
                <label htmlFor='title'>title</label>
                <input type='text' id='title' ref={titleRef}/>
            </div>
            {/* 2 textarea */}
            <div className={classes.control}>
            <label htmlFor='opening-text'>opening Text</label>
            <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRef}/>
            </div>
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie
