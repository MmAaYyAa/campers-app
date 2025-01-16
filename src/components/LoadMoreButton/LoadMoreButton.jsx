import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectFilters} from '../../redux/filters/filterSelectors';
import {selectCampers, selectTotalCampers} from '../../redux/catalog/catalogSelectors';
import {fetchCampers} from '../../redux/catalog/catalogOperations.js';
import {clearCatalog} from '../../redux/catalog/catalogSlice.js';
import {LoadMoreBtn} from '../LoadMoreButton/LoadMoreButton.styled.js';

export default function LoadMoreButton() {
  const [currentPage, setCurrentPage] = useState(1);
  const trucks = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotalCampers);

  const limit = 4;
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPage(1);
    dispatch(fetchCampers({ page: 1, filters, reset: true }));
  }, [filters, dispatch]);

  const handleLoadMore = () => {
    dispatch(
      fetchCampers({
        page: currentPage + 1,
        filters,
        reset: false,
      })
    )
      .unwrap()
      .catch(() => {
        dispatch(clearCatalog());
      });

    setCurrentPage(prev => prev + 1);
  };

  return (
    <>
      {currentPage < totalPages && trucks.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
}