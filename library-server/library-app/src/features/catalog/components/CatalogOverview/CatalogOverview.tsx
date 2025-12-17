// import React,{useEffect, useState} from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// //import { RootState } from '../../../../redux/ReduxStore';
// import './CatalogOverview.css';
// import { AppDispatch, RootState } from '../../../../redux/ReduxStore';
// import { fetchAllBooks } from '../../../../redux/slices/BookSlice';
// import { generateRandomGenres } from '../../utils/CatalogUtils';
// import { CatalogOverviewSection } from '../CatalogOverviewSection/CatalogOverviewSection';
// import { Book } from '../../../../models/Book';

// export const CatalogOverview:React.FC = () => {

//     const bookState = useSelector((state:RootState) => state.book);
//     const dispatch:AppDispatch = useDispatch();

//     const [genres, setGenres] = useState<string[]>(()=>{
//         return generateRandomGenres();
//     })
//     //
//         // const getRandomBooksByGenre = (genre: string, books: Book[]): Book[] => {
//         //     // Filter books by genre
//         //     const genreBooks = books.filter(book => book.genre === genre);
            
//         //     // Get random subset (e.g., 5 books)
//         //     return genreBooks.sort(() => Math.random() - 0.5).slice(0, 5);
//         // };
// //
//     useEffect(()=>{
//         dispatch(fetchAllBooks())
//     }, []);

//     return(
//         <>
//             {bookState.books.length > 0 && !bookState.loading ?
//                 <div className="catalog-overview">
//                     <h2>Welcome To Our Library, We currently have {bookState.books && bookState.books.length} books.</h2>
//                     <h4>Browse our selected books below, or search for something using the top navigation bar.</h4>
//                     {genres.map((genre) => (
//                         <CatalogOverviewSection 
//                             key={genre} 
//                             books={getRandomBooksByGenre(genre, bookState.books)} 
//                             label={genre} 
//                         />
//                         //{ function getRandomBooksByGenre(genre: string, books: Book[]): Book[] {
//                         //     throw new Error('Function not implemented.');
//                         // }

//                         // return <CatalogOverviewSection key={genre} books={getRandomBooksByGenre(genre, bookState.books)} label={genre} />}
//                     ))}
//                 </div> : <></>
//             }
//         </>
//         //
        
//     )

// }

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/ReduxStore';
import { fetchAllBooks } from '../../../../redux/slices/BookSlice';
import { generateRandomGenres } from '../../utils/CatalogUtils';
import { CatalogOverviewSection } from '../CatalogOverviewSection/CatalogOverviewSection';
import { Book } from '../../../../models/Book';
import './CatalogOverview.css';

export const CatalogOverview: React.FC = () => {
    const bookState = useSelector((state: RootState) => state.book);
    const dispatch: AppDispatch = useDispatch();

    const [genres, setGenres] = useState<string[]>(() => {
        return generateRandomGenres();
    });

    const getRandomBooksByGenre = (genre: string, books: Book[]): Book[] => {
        const genreBooks = books.filter(book => book.genre === genre);
        return genreBooks.sort(() => Math.random() - 0.5).slice(0, 5);
    };

    useEffect(() => {
        dispatch(fetchAllBooks());
    }, [dispatch]);

    return (
        <>
            {bookState.books.length > 0 && !bookState.loading ? (
                <div className="catalog-overview">
                    <h2>
                        Welcome To Our Library, We currently have{' '}
                        {bookState.books.length} books.
                    </h2>
                    <h4>
                        Browse our selected books below, or search for something using
                        the top navigation bar.
                    </h4>
                    {genres.map((genre) => {
                        // The function implementation now properly exists outside the JSX
                        return (
                            <CatalogOverviewSection 
                                key={genre} 
                                books={getRandomBooksByGenre(genre, bookState.books)} 
                                label={genre} 
                            />
                        );
                    })}
                </div>
            ) : null}
        </>
    )
}