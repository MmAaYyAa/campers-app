import { useSelector, useDispatch } from 'react-redux';
import {useEffect } from 'react';
import { selectLoading, selectError, selectCampers } from '../../redux/catalog/catalogSelectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { fetchCampers } from '../../redux/catalog/catalogOperations.js';
import { selectFilters } from '../../redux/filters/filterSelectors';
import Filter from '../../components/Filter/Filter';
import CamperList from '../../components/CamperList/CamperList.jsx';
import {Container, Wrapper} from '../CatalogPage/CatalogPage.styled';
import LoadMoreBtn from '../../components/LoadMoreButton/LoadMoreButton';

export default function CatalogPage() {
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const campers = useSelector(selectCampers);
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampers({ page: 1, filters, reset: true }));
      }, [dispatch, filters]);

      return (
        <Container>
          {isLoading && <Loader />}
          {isError && <Error />}
          <Filter />
          <Wrapper>
          {campers.length > 0 && <CamperList />}
          {campers.length > 0 && <LoadMoreBtn />}
        </Wrapper>
        {/* <ScrollToTopButton /> */}
        </Container>
      );
}