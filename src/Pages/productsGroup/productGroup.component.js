import { useForm } from "react-hook-form";

import {
    HeaderProductsPage,
    NameOutlet,
    LayoutSearch,
    DivSearch,
    ValueToSearch,
    InputSearch,
    ButtonSearch,
    Svg,
    SpanSearch,
    DivAddProduct,
    ButtonAddProduct,
    SpanAddProduct
} from "../generalCss/headerTemplate.styles";

import { 
    MainLayoutAddGroup,
    LayoutProductGroups,
    LayoutAddProductGroup,
    ProductGroups,
    NameProductsGroup,
    UlProductsGroup,
    ItemProduct,
    FormAddNewProductGroups
} from "./productGroup.styles";

const ProductsGroup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <HeaderProductsPage>
                <NameOutlet>Product Groups</NameOutlet>
                <LayoutSearch>
                    <DivSearch>
                        <ValueToSearch>Product group name</ValueToSearch>
                        <InputSearch
                            type="text"
                            placeholder="Product group name..."
                        />
                    </DivSearch>
                    <ButtonSearch>
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>
                        <SpanSearch>Search</SpanSearch>
                    </ButtonSearch>
                </LayoutSearch>
            </HeaderProductsPage>
            <MainLayoutAddGroup>
                <LayoutProductGroups>
                    <ProductGroups>
                        <NameProductsGroup>Product Groups</NameProductsGroup>
                        <UlProductsGroup>
                            <ItemProduct>Mouse</ItemProduct>
                            <ItemProduct>Keyboard</ItemProduct>
                            <ItemProduct>Loudspeaker</ItemProduct>
                            <ItemProduct>Screen</ItemProduct>
                        </UlProductsGroup>
                    </ProductGroups>
                </LayoutProductGroups>
                <LayoutAddProductGroup>
                    <FormAddNewProductGroups>
                        <span>Add New Product Groups</span>
                    </FormAddNewProductGroups>
                </LayoutAddProductGroup>
            </MainLayoutAddGroup>
        </div>
    )
}

export default ProductsGroup;