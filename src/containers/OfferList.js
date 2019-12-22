import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { OfferItem } from '../components';
import { applyOffer } from '../store/userOffersActions'

function PageNumbers({ numberOfPages, goToPage, currentPage }){
    let pages = [];
    for(let i = 1; i <= numberOfPages; i++){
        let active = i === currentPage ? 'active-page' : '';
        pages.push( <button 
            key={i} 
            className={active} 
            disabled = {i === currentPage}
            onClick={() => goToPage(i)}>{i}</button> 
        );
    }
    return pages;
}
PageNumbers.propTypes = {
    numberOfPages: PropTypes.number, 
    goToPage: PropTypes.func, 
    currentPage: PropTypes.number
};
PageNumbers.defaultProps = {
    numberOfPages: 0
};

function OfferList ({ data }) {    
    const dispatch = useDispatch();
    const [pageList, setPageList] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [numberPerPage] = React.useState(3);
    const [numberOfPages, setNumberOfPages] = React.useState(0);
    
    const loadList = () => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        let pageList = data.slice(begin, end);
        setPageList(pageList);
    }

    React.useEffect(
        () => {
            loadList();
            setNumberOfPages(Math.ceil(data.length / 3));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, currentPage]
    );
    
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const apply = item => dispatch(applyOffer(item));
    
    return(
        <>
            {
                pageList && pageList.map(item => {
                return <OfferItem 
                        key = {item._id}
                        Item = {item}
                        apply={apply}
                        />
                })
            }
            <div className='pagination'>
                <button onClick={prevPage} disabled={currentPage === 1}>{'<'}</button>
                <PageNumbers 
                    numberOfPages={numberOfPages} 
                    goToPage={setCurrentPage} 
                    currentPage={currentPage}
                />
                <button onClick={nextPage} disabled={currentPage === numberOfPages}>{'>'}</button>
            </div>
        </>
    );
    
};

OfferList.propTypes = {
    data: PropTypes.array
};
OfferList.defaultProps = {
    data: []
};

export default OfferList;