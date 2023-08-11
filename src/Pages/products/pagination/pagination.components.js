import { 
    Paginate,
    ButtonNextPrevious,
    DivMountPage
} from "./pagination.styles";

import { Svg } from "../product.styles";
const PaginateProducts = ({currentPage, setCurrentPage, products}) => {
    return (
        <Paginate>
            {currentPage === 0 ||
                <ButtonNextPrevious
                    onClick={() => setCurrentPage(0)}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </Svg>
                </ButtonNextPrevious>
            }
            {currentPage === 0 ||
                <ButtonNextPrevious
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </Svg>
                </ButtonNextPrevious>
            }
            {Array.from({ length: products?.totalPages }, (_, i) => (
                <DivMountPage
                    key={i}
                    className={currentPage === i ? "active-mount-page" : ""}
                    onClick={() => setCurrentPage(i)}
                >
                    {i + 1}
                </DivMountPage>
            ))}
            {currentPage === products?.totalPages - 1 ||
                <ButtonNextPrevious
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </Svg>
                </ButtonNextPrevious>
            }
            {currentPage === products?.totalPages - 1 ||
                <ButtonNextPrevious
                    onClick={() => setCurrentPage(products?.totalPages - 1)}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </Svg>
                </ButtonNextPrevious>
            }
        </Paginate>
    )
}

export default PaginateProducts;