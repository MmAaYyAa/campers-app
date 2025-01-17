import { useEffect, useState, Suspense } from 'react';
import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import { selectCamperDetails, selectLoading,
    selectError,  } from '../../redux/catalog/catalogSelectors';
import { fetchCamperById } from '../../redux/catalog/catalogOperations.js';
import { LinkBack, Container,
    MainContent,  ListLinks,
    LinkItem,
    NavLinkStyled,} from "./CamperDetailsPage.styled"

export default function CamperDetailsPage() {

        const dispatch = useDispatch();
        const camper = useSelector(selectCamperDetails);
        const isLoading = useSelector(selectLoading);
        const isError = useSelector(selectError);
        const location = useLocation();
        const { id } = useParams();
        const navigate = useNavigate();
        const [isLoaded, setIsLoaded] = useState(false);
    
        useEffect(() => {
            dispatch(fetchCamperById(id));
          }, [dispatch, id]);

          useEffect(() => {
            if (!isLoading && camper && !isLoaded) {
              setIsLoaded(true);
              navigate('features');
            }
          }, [isLoading, camper, isLoaded, navigate]);

    return (
        <>
        <Container>
        <LinkBack to={'/catalog'}><span>&#8592;</span> Back</LinkBack>
          {isLoading && <Loader />}
          {isError && <Error />}
          {camper && <CamperInfo camper={camper} />}
          <MainContent>
        <div>
          <ListLinks>
            <LinkItem>
              <NavLinkStyled  to="features"
            state={{ ...location.state }}>
                Features
              </NavLinkStyled>
            </LinkItem>
            <LinkItem>
              <NavLinkStyled
                to="reviews"
                state={{ ...location.state }}
              >
                Reviews
              </NavLinkStyled>
            </LinkItem>
          </ListLinks>
          <Suspense fallback={isLoading && <Loader />}>
            <Outlet />
          </Suspense>
          </div>
      </MainContent>
        </Container>
        </>
    );
};