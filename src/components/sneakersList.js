import React, { useState} from "react"
import { sneakers } from '../sneakers_bank/sneakers'
import ReactPaginate from "react-paginate";


const SneakersList = (props)=> {    
  const [sneakersList, setsneakersList] = useState(sneakers);
  const [pageNumber, setPageNumber] = useState(0)
  const [sortType, setsortType]=useState('asc')
  const sneakersPerPage = 10;
  const pagesVisited = pageNumber * sneakersPerPage;


  const sortSeakersList = sneakersList.sort((a,b)=>{
    const isReversed =(sortType === 'asc')? -1 : 1;
    return isReversed * a.released_date.localeCompare(b.released_date)
  })

  const onImageClick = (sneaker) =>{
    props.history.push(`/sneaker/${sneaker.model}`,{sneaker})
  }

  const displaySneakers = () => (
    <div className="container">
    <div className="row" role="shoues_list">
      {sortSeakersList.slice(pagesVisited, pagesVisited + sneakersPerPage).map((sneaker,index) => (
        <div className="col-md-3 col-sm-6 " key={index} role="shoues_list_item">
          <div className="card text-center" >
            <img data-testid="image" src={sneaker.picture} className="card-img-top img-adjusted" alt="Sneaker" onClick={() => onImageClick (sneaker)} />
              <div className="card-body text-center">
                <h5  className="card-title">{sneaker.brand}</h5>
                <p data-testid="model" className="card-text">{sneaker.model}<br/>
                {sneaker.sizes[0].price + ' Rwf'}<br/>
                <small className="text-muted">{'released on ' + sneaker.released_date}</small></p>
              </div>
            </div>
          </div>
      )
      )
      }
    </div>
    </div>
  )

  const pageCount = Math.ceil(sneakersList.length / sneakersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displaySneakers()}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default SneakersList;